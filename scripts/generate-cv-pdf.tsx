/**
 * Genera public/cv.pdf — CV A4 de 2 páginas (documento propio, no print de la web).
 * Contenido del CV actual. No inventa datos.
 *
 * Uso: npm run cv:pdf
 * Opcional: NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
 */

import PDFDocument from "pdfkit";
import { PDFDocument as PDFLib } from "pdf-lib";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

const FULL_NAME = "Israel Santos López";
const EMAIL = "isra31987@gmail.com";
const PHONE = "+34 677 230 612";
const PHONE_HREF = "tel:+34677230612";
const CITY = "Gandía (Valencia)";
// Portfolio público del CV (no usar localhost del .env.local)
const SITE_URL = (
  process.env.CV_SITE_URL || "https://israel-santos.vercel.app"
).replace(/\/$/, "");
const LINKEDIN_URL = (process.env.CV_LINKEDIN_URL ?? "").replace(/\/$/, "");

// Paleta portfolio (organic dark → imprimible)
const C = {
  bg: "#F8F7F4",
  ink: "#1A1C1A",
  muted: "#5C5F5A",
  line: "#D8D6D0",
  accent: "#2D5A27",
  accentSoft: "#E8EFE6",
  amber: "#A67C52",
  walnut: "#2A221C",
};

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 48;
const MARGIN_TOP = 40;
const MARGIN_BOTTOM = 42;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
const RAIL = 5;
/** Sangría nivel 1: cuerpo bajo un título de sección */
const INDENT_1 = 10;
/** Sangría nivel 2: viñetas y detalle bajo un puesto/proyecto */
const INDENT_2 = 18;

type Ctx = {
  doc: PDFKit.PDFDocument;
  y: number;
  page: number;
};

function paintPageChrome(doc: PDFKit.PDFDocument, pageNum: number) {
  // Fondo
  doc.save();
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(C.bg);
  // Rail organic
  doc.rect(0, 0, RAIL, PAGE_H).fill(C.accent);
  doc.rect(RAIL, 0, 1.5, 70).fill(C.amber);
  doc.restore();

  // Footer
  const footerY = PAGE_H - 28;
  doc
    .strokeColor(C.line)
    .lineWidth(0.5)
    .moveTo(MARGIN_X, footerY - 8)
    .lineTo(PAGE_W - MARGIN_X, footerY - 8)
    .stroke();

  doc
    .fillColor(C.muted)
    .font("Helvetica")
    .fontSize(7)
    .text(
      `${FULL_NAME} · Analista de Negocio y Transformación Digital`,
      MARGIN_X,
      footerY,
      { width: CONTENT_W - 70, lineBreak: false },
    );
  doc.text(`Página ${pageNum} / 2`, MARGIN_X, footerY, {
    width: CONTENT_W,
    align: "right",
    lineBreak: false,
  });
}

function ensureSpace(ctx: Ctx, need: number) {
  if (ctx.y + need > PAGE_H - MARGIN_BOTTOM) {
    ctx.doc.addPage();
    ctx.page += 1;
    paintPageChrome(ctx.doc, ctx.page);
    ctx.y = MARGIN_TOP;
  }
}

/** Título de sección (PERFIL, EXPERIENCIA…) — jerarquía 1, más grande que puestos */
function sectionTitle(ctx: Ctx, title: string) {
  ensureSpace(ctx, 22);
  ctx.y += 2;
  ctx.doc
    .fillColor(C.accent)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(title, MARGIN_X, ctx.y, { width: CONTENT_W });
  ctx.y = ctx.doc.y + 2;
  // Línea corta bajo el título para reforzar jerarquía visual
  ctx.doc
    .strokeColor(C.accent)
    .lineWidth(1)
    .moveTo(MARGIN_X, ctx.y)
    .lineTo(MARGIN_X + 28, ctx.y)
    .stroke();
  ctx.y += 8;
}

function bodyText(
  ctx: Ctx,
  text: string,
  opts?: { size?: number; color?: string; italic?: boolean; indent?: number },
) {
  const size = opts?.size ?? 8.5;
  const color = opts?.color ?? C.ink;
  const indent = opts?.indent ?? INDENT_1;
  const x = MARGIN_X + indent;
  const w = CONTENT_W - indent;
  ensureSpace(ctx, size * 3);
  ctx.doc
    .fillColor(color)
    .font(opts?.italic ? "Helvetica-Oblique" : "Helvetica")
    .fontSize(size)
    .text(text, x, ctx.y, {
      width: w,
      align: "justify",
      lineGap: 1.2,
    });
  ctx.y = ctx.doc.y + 3;
}

function bullets(ctx: Ctx, items: string[], indent = INDENT_2) {
  const x = MARGIN_X + indent;
  const w = CONTENT_W - indent;
  for (const item of items) {
    ensureSpace(ctx, 12);
    ctx.doc.fillColor(C.amber).font("Helvetica").fontSize(8).text("•", x, ctx.y, {
      width: 10,
      lineBreak: false,
    });
    ctx.doc
      .fillColor(C.ink)
      .font("Helvetica")
      .fontSize(8)
      .text(item, x + 10, ctx.y, { width: w - 10, lineGap: 0.8 });
    ctx.y = ctx.doc.y + 1.5;
  }
}

function highlightBox(ctx: Ctx, text: string, indent = INDENT_1) {
  const pad = 6;
  const boxX = MARGIN_X + indent;
  const boxW = CONTENT_W - indent;
  ctx.doc.font("Helvetica-Oblique").fontSize(7.5);
  const h = ctx.doc.heightOfString(text, { width: boxW - pad * 2 }) + pad * 2;
  ensureSpace(ctx, h + 4);

  ctx.doc.save();
  ctx.doc.rect(boxX, ctx.y, boxW, h).fill(C.accentSoft);
  ctx.doc.rect(boxX, ctx.y, 2, h).fill(C.accent);
  ctx.doc.restore();

  ctx.doc
    .fillColor(C.ink)
    .font("Helvetica-Oblique")
    .fontSize(7.5)
    .text(text, boxX + pad, ctx.y + pad, {
      width: boxW - pad * 2,
      lineGap: 1,
    });
  ctx.y += h + 6;
}

/** Título de puesto/proyecto (LOGÍSTICA…, AMAZON…) — jerarquía 2, menor que secciones */
function jobTitleRow(ctx: Ctx, title: string, dates?: string) {
  ensureSpace(ctx, 16);
  const x = MARGIN_X + INDENT_1;
  const w = CONTENT_W - INDENT_1;
  ctx.doc
    .fillColor(C.walnut)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(title, x, ctx.y, {
      width: dates ? w - 90 : w,
      lineBreak: false,
    });
  if (dates) {
    ctx.doc
      .fillColor(C.muted)
      .font("Helvetica")
      .fontSize(8)
      .text(dates, x, ctx.y, { width: w, align: "right", lineBreak: false });
  }
  ctx.y += 12;
}

/** Línea secundaria bajo un puesto (empresa, roles…) */
function jobMeta(ctx: Ctx, text: string, opts?: { bold?: boolean }) {
  const x = MARGIN_X + INDENT_1;
  const w = CONTENT_W - INDENT_1;
  ensureSpace(ctx, 12);
  ctx.doc
    .fillColor(opts?.bold ? C.ink : C.muted)
    .font(opts?.bold ? "Helvetica-Bold" : "Helvetica")
    .fontSize(8)
    .text(text, x, ctx.y, { width: w });
  ctx.y = ctx.doc.y + (opts?.bold ? 3 : 1);
}

async function buildPdf(outPath: string) {
  await fsp.mkdir(path.dirname(outPath), { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    info: {
      Title: `${FULL_NAME} — CV`,
      Author: FULL_NAME,
      Subject: "Analista de Negocio y Transformación Digital",
      Keywords:
        "Business Analysis, Transformación Digital, Automatización, IA, Operaciones",
    },
    autoFirstPage: true,
  });

  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  const ctx: Ctx = { doc, y: MARGIN_TOP, page: 1 };
  paintPageChrome(doc, 1);

  // ——— HEADER ———
  doc
    .fillColor(C.walnut)
    .font("Helvetica-Bold")
    .fontSize(20)
    .text(FULL_NAME, MARGIN_X, ctx.y, { width: CONTENT_W });
  ctx.y = doc.y + 3;

  doc
    .fillColor(C.accent)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text("ANALISTA DE NEGOCIO Y TRANSFORMACIÓN DIGITAL", MARGIN_X, ctx.y, {
      width: CONTENT_W,
    });
  ctx.y = doc.y + 2;

  doc
    .fillColor(C.muted)
    .font("Helvetica")
    .fontSize(8.5)
    .text(
      "Mejora de procesos · Automatización · IA · Soluciones digitales",
      MARGIN_X,
      ctx.y,
      { width: CONTENT_W },
    );
  ctx.y = doc.y + 8;

  // Contacto: email · teléfono · ciudad · portfolio
  const contactParts: { label: string; url?: string }[] = [
    { label: EMAIL, url: `mailto:${EMAIL}` },
    { label: PHONE, url: PHONE_HREF },
    { label: CITY },
    { label: SITE_URL, url: SITE_URL },
  ];
  if (LINKEDIN_URL) contactParts.push({ label: "LinkedIn", url: LINKEDIN_URL });

  // Puede ocupar 2 líneas en A4
  let cx = MARGIN_X;
  const maxX = MARGIN_X + CONTENT_W;
  for (let i = 0; i < contactParts.length; i++) {
    const part = contactParts[i];
    const sep = i > 0 ? "  ·  " : "";
    const sepW = sep ? doc.widthOfString(sep) : 0;
    const labelW = doc.widthOfString(part.label);
    if (cx + sepW + labelW > maxX && i > 0) {
      ctx.y += 11;
      cx = MARGIN_X;
    } else if (i > 0) {
      doc.fillColor(C.line).font("Helvetica").fontSize(8).text(sep, cx, ctx.y, {
        lineBreak: false,
      });
      cx += sepW;
    }
    doc.fillColor(C.ink).font("Helvetica").fontSize(8);
    if (part.url) {
      doc.text(part.label, cx, ctx.y, {
        link: part.url,
        underline: false,
        lineBreak: false,
      });
    } else {
      doc.text(part.label, cx, ctx.y, { lineBreak: false });
    }
    cx += labelW;
  }
  ctx.y += 14;

  doc
    .strokeColor(C.line)
    .lineWidth(0.75)
    .moveTo(MARGIN_X, ctx.y)
    .lineTo(PAGE_W - MARGIN_X, ctx.y)
    .stroke();
  ctx.y += 12;

  // ——— PERFIL ———
  sectionTitle(ctx, "PERFIL");
  bodyText(
    ctx,
    "Economista con más de una década de experiencia en logística, administración y operaciones empresariales, combinada con experiencia práctica en el diseño y desarrollo de soluciones digitales mediante IA, automatización y tecnologías actuales.",
  );
  bodyText(
    ctx,
    "Analizo procesos, detecto ineficiencias y transformo necesidades operativas en soluciones digitales prácticas. He desarrollado herramientas internas, automatizaciones y aplicaciones conectadas a bases de datos utilizando Python, JavaScript/TypeScript, React, Next.js, SQL, Supabase, APIs, n8n e IA.",
  );
  bodyText(
    ctx,
    "Mi principal diferencial es combinar experiencia real en negocio y operaciones con capacidad para diseñar y prototipar soluciones tecnológicas.",
  );
  ctx.y += 4;

  // ——— EXPERIENCIA ———
  sectionTitle(ctx, "EXPERIENCIA PROFESIONAL");

  jobTitleRow(ctx, "LOGÍSTICA Y OPERACIONES", "2014 – feb. 2026");
  jobMeta(ctx, "Empresa de transporte y logística · España");
  jobMeta(ctx, "Administración · Operaciones · Gestión empresarial", { bold: true });
  bodyText(
    ctx,
    "Experiencia transversal en la gestión de procesos administrativos y operativos de una empresa de transporte, trabajando con información procedente de operaciones, almacén, clientes, proveedores y sistemas internos.",
    { indent: INDENT_2 },
  );
  bullets(ctx, [
    "Gestión de procesos administrativos y operativos.",
    "Gestión documental y control de albaranes.",
    "Facturación y control de facturas.",
    "Gestión de proveedores, pagos, clientes y cobros.",
    "Control de costes.",
    "Gestión y control de stock de almacén.",
    "Gestión de seguros de crédito, mercancías y responsabilidad civil.",
    "Gestión de documentación en plataformas de clientes y proveedores.",
    "Preparación de información para procesos fiscales y administrativos.",
    "Uso de CRM, Excel y Google Sheets para estructurar, controlar y analizar información.",
    "Identificación de tareas repetitivas y oportunidades de mejora mediante herramientas digitales.",
  ]);
  highlightBox(
    ctx,
    "Más de una década trabajando desde dentro de una empresa de operaciones, entendiendo cómo fluye la información entre administración, almacén, proveedores, clientes y operaciones.",
  );

  jobTitleRow(ctx, "AMAZON E-COMMERCE Y NEGOCIO DIGITAL");
  jobMeta(ctx, "Proyecto empresarial independiente · España e Italia");
  jobMeta(ctx, "Producto · Operaciones · Analítica · PPC", { bold: true });
  bodyText(
    ctx,
    "Gestión integral del ciclo de producto, desde la identificación de oportunidades y sourcing hasta la comercialización, adquisición de tráfico y análisis de rendimiento.",
    { indent: INDENT_2 },
  );
  bullets(ctx, [
    "Identificación y análisis de oportunidades de producto con potencial comercial.",
    "Investigación de mercados y búsqueda de proveedores en Asia.",
    "Solicitud, comparación y análisis de cotizaciones.",
    "Negociación con proveedores.",
    "Coordinación de compras, transporte, recepción, etiquetado y preparación de mercancía para Amazon FBA.",
    "Gestión de productos en Amazon España e Italia.",
    "Diseño, estructuración y optimización de listings.",
    "Investigación y análisis de palabras clave.",
    "Diseño y gestión de campañas PPC orientadas a objetivos concretos.",
    "Análisis del rendimiento de productos y campañas mediante Helium 10.",
    "Desarrollo de prompts optimizados para analizar el rendimiento de campañas y apoyar la toma de decisiones.",
    "Análisis de datos comerciales para optimizar productos, campañas y rentabilidad.",
  ]);

  // ——— PÁGINA 2 (forzar si aún no) ———
  if (ctx.page === 1) {
    doc.addPage();
    ctx.page = 2;
    paintPageChrome(doc, 2);
    ctx.y = MARGIN_TOP;
  }

  // ——— PROYECTOS ———
  sectionTitle(ctx, "PROYECTOS DIGITALES");

  const projects = [
    {
      number: "01",
      title: "DOCUMENT INTELLIGENCE",
      stack: "Python · IA · Extracción de datos · Excel",
      description:
        "Herramienta en Python para automatizar el procesamiento de tickets de tacógrafo digitalizados: la IA extrae datos clave, los estructura e incorpora a Excel, con informes diarios y apoyo a la gestión de stock de vehículos.",
      shows:
        "Demuestra: IA aplicada al procesamiento documental · Extracción de datos · Automatización de flujos · Herramientas internas",
    },
    {
      number: "02",
      title: "AUTOMATIZACIÓN OPERATIVA INMOBILIARIA",
      stack: "Python · Supabase · SQL · IA · APIs · n8n",
      description:
        "Prototipo funcional con base de datos para automatizar y centralizar operaciones diarias de un profesional inmobiliario: email, monitorización de mercado, inventario, leads de Meta, notificaciones y generación documental.",
      shows:
        "Demuestra: Automatización de procesos · Diseño de bases de datos · IA · APIs · Orquestación de flujos · Generación documental",
    },
    {
      number: "03",
      title: "LOGICALC",
      stack: "Next.js · React · Node.js · SQL · Supabase",
      description:
        "Identifiqué durante mi experiencia en transporte una necesidad recurrente: conocer la rentabilidad real de un viaje antes de aceptarlo. Diseñé y desarrollé Logicalc para calcular la rentabilidad por viaje y su evolución acumulada incorporando los principales costes del sector.",
      shows:
        "Demuestra: Identificación de problemas de negocio · Diseño de producto · Desarrollo SaaS · Modelado de datos · Conocimiento del sector",
    },
    {
      number: "04",
      title: "LEAD INTELLIGENCE",
      stack: "Datos de Instagram · Automatización · Análisis de datos",
      description:
        "Herramienta de prospección y análisis para identificar clientes potenciales analizando seguidores de cuentas relevantes, comparando audiencias y clasificando perfiles recurrentes.",
      shows:
        "Demuestra: Generación de leads · Análisis de datos · Automatización · Prospección",
    },
  ];

  for (const p of projects) {
    ensureSpace(ctx, 52);
    const startY = ctx.y;
    const titleX = MARGIN_X + INDENT_1;
    const bodyX = MARGIN_X + INDENT_2;
    const bodyW = CONTENT_W - INDENT_2;

    doc
      .fillColor(C.amber)
      .font("Helvetica-Bold")
      .fontSize(8)
      .text(p.number, titleX, ctx.y, { lineBreak: false });
    doc
      .fillColor(C.walnut)
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(p.title, titleX + 22, ctx.y, { width: CONTENT_W - INDENT_1 - 22 });
    ctx.y = doc.y + 1;

    doc
      .fillColor(C.accent)
      .font("Helvetica")
      .fontSize(7.5)
      .text(p.stack, bodyX, ctx.y, { width: bodyW });
    ctx.y = doc.y + 1;

    doc
      .fillColor(C.ink)
      .font("Helvetica")
      .fontSize(8)
      .text(p.description, bodyX, ctx.y, { width: bodyW, lineGap: 1 });
    ctx.y = doc.y + 1;

    doc
      .fillColor(C.muted)
      .font("Helvetica")
      .fontSize(7.5)
      .text(p.shows, bodyX, ctx.y, { width: bodyW });
    ctx.y = doc.y + 4;

    doc
      .strokeColor(C.line)
      .lineWidth(0.4)
      .moveTo(MARGIN_X + INDENT_1, ctx.y)
      .lineTo(PAGE_W - MARGIN_X, ctx.y)
      .stroke();
    ctx.y += 6;

    void startY;
  }

  // ——— CAPACIDADES ———
  sectionTitle(ctx, "CÓMO PUEDO APORTAR VALOR");
  const caps = [
    { title: "ANALIZAR", desc: "Procesos, datos y problemas de negocio." },
    { title: "DISEÑAR", desc: "Soluciones digitales orientadas al negocio." },
    { title: "AUTOMATIZAR", desc: "Tareas, flujos y procesos repetitivos." },
    { title: "CONSTRUIR", desc: "Prototipos funcionales para validar ideas." },
    { title: "CONECTAR DATOS", desc: "Convertir información en herramientas útiles." },
    { title: "APLICAR IA", desc: "IA aplicada a problemas concretos." },
  ];
  const gap = 5;
  const colW = (CONTENT_W - gap * 2) / 3;
  const rowH = 28;
  ensureSpace(ctx, rowH * 2 + gap + 6);
  caps.forEach((cap, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = MARGIN_X + col * (colW + gap);
    const y = ctx.y + row * (rowH + gap);
    doc.save();
    doc.roundedRect(x, y, colW, rowH, 2).fill(C.accentSoft);
    doc.restore();
    doc
      .fillColor(C.accent)
      .font("Helvetica-Bold")
      .fontSize(7.5)
      .text(cap.title, x + 5, y + 4, { width: colW - 10, align: "left" });
    doc
      .fillColor(C.muted)
      .font("Helvetica")
      .fontSize(6.5)
      .text(cap.desc, x + 5, y + 14, { width: colW - 10, align: "left", lineGap: 0.5 });
  });
  ctx.y += rowH * 2 + gap + 8;

  // ——— TECNOLOGÍA ———
  sectionTitle(ctx, "TECNOLOGÍA Y HERRAMIENTAS");
  const tech = [
    {
      label: "IA Y AUTOMATIZACIÓN",
      items: "IA · Prompt Engineering · n8n · APIs · Automatización de flujos",
    },
    {
      label: "DESARROLLO DE SOLUCIONES",
      items: "Python · JavaScript · TypeScript · React · Next.js · Node.js",
    },
    {
      label: "DATOS",
      items: "SQL · Supabase · MongoDB · Excel · Google Sheets",
    },
    { label: "HERRAMIENTAS", items: "GitHub · Cursor · Helium 10" },
  ];
  const techW = (CONTENT_W - 10) / 2;
  ensureSpace(ctx, 70);
  tech.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN_X + col * (techW + 10);
    const y = ctx.y + row * 28;
    doc
      .fillColor(C.accent)
      .font("Helvetica-Bold")
      .fontSize(7.5)
      .text(t.label, x, y, { width: techW });
    doc
      .fillColor(C.ink)
      .font("Helvetica")
      .fontSize(8)
      .text(t.items, x, y + 10, { width: techW });
  });
  ctx.y += 62;

  // ——— FORMACIÓN + IDIOMAS ———
  ensureSpace(ctx, 80);
  const half = (CONTENT_W - 16) / 2;
  const eduY = ctx.y;

  // Misma jerarquía tipográfica que sectionTitle (11pt verde)
  doc
    .fillColor(C.accent)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("FORMACIÓN", MARGIN_X, eduY);
  doc
    .strokeColor(C.accent)
    .lineWidth(1)
    .moveTo(MARGIN_X, eduY + 14)
    .lineTo(MARGIN_X + 28, eduY + 14)
    .stroke();
  let ey = eduY + 22;
  const edu = [
    { title: "Licenciado en Economía", sub: "Universidad de Castilla-La Mancha" },
    { title: "Máster en Comercio Internacional", sub: "" },
    { title: "Especialista en Programación con IA", sub: "Racks Academy" },
  ];
  for (const e of edu) {
    doc
      .fillColor(C.ink)
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .text(e.title, MARGIN_X + INDENT_1, ey, { width: half - INDENT_1 });
    ey = doc.y;
    if (e.sub) {
      doc
        .fillColor(C.muted)
        .font("Helvetica")
        .fontSize(8)
        .text(e.sub, MARGIN_X + INDENT_1, ey, { width: half - INDENT_1 });
      ey = doc.y + 3;
    } else {
      ey += 3;
    }
  }

  const langX = MARGIN_X + half + 16;
  doc
    .fillColor(C.accent)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("IDIOMAS", langX, eduY);
  doc
    .strokeColor(C.accent)
    .lineWidth(1)
    .moveTo(langX, eduY + 14)
    .lineTo(langX + 28, eduY + 14)
    .stroke();
  let ly = eduY + 22;
  for (const lang of [
    { l: "Español", v: "Nativo" },
    { l: "Inglés", v: "B1" },
  ]) {
    doc
      .fillColor(C.ink)
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .text(lang.l, langX + INDENT_1, ly, { continued: true });
    doc.fillColor(C.muted).font("Helvetica").text(`  —  ${lang.v}`);
    ly = doc.y + 3;
  }

  ctx.y = Math.max(ey, ly) + 10;

  // ——— QUÉ BUSCO ———
  sectionTitle(ctx, "QUÉ BUSCO");
  bodyText(
    ctx,
    "Busco formar parte de equipos donde pueda utilizar mi experiencia en negocio y operaciones para identificar problemas, mejorar procesos y desarrollar soluciones digitales que aporten valor real.",
  );
  bodyText(
    ctx,
    "Me interesan especialmente posiciones relacionadas con Business Analysis, Transformación Digital, Mejora de Procesos, Automatización, Operations Technology e IA aplicada al negocio.",
  );

  doc.end();

  await new Promise<void>((resolve, reject) => {
    stream.on("finish", () => resolve());
    stream.on("error", reject);
  });
}

(async () => {
  const outPath = path.join(process.cwd(), "public", "cv.pdf");
  await buildPdf(outPath);

  const bytes = await fsp.readFile(outPath);
  const pdf = await PDFLib.load(bytes);
  const pages = pdf.getPageCount();

  console.log(`OK → ${outPath}`);
  console.log(`Páginas: ${pages}`);
  console.log(`Tamaño: ${(bytes.length / 1024).toFixed(1)} KB`);

  if (pages !== 2) {
    console.error(`ERROR: se esperaban 2 páginas, hay ${pages}`);
    process.exit(1);
  }
})();
