import type { CaseStudyData } from "@/data/caseStudies/types";

export const realEstateAutomationCase: CaseStudyData = {
  slug: "real-estate-automation",
  number: "02",
  category: "PROPTECH × AUTOMATIZACIÓN",
  title: "Automatización Inmobiliaria",
  subtitle: "De flujos fragmentados → sistema conectado",
  intro:
    "Una herramienta para el sector inmobiliario que conecta leads, email, mercado, stock, alertas y generación documental en un único flujo de trabajo.",
  technologies: ["Supabase", "SQL", "n8n", "Gemini", "Meta", "APIs"],
  status: "SOLUCIÓN FUNCIONAL",

  screenshots: [
    {
      src: "/work/real-estate-automation/01-inbox.jpg",
      alt: "IA Inbox de InmoFlow con mensajes de portales y clientes",
      caption:
        "Centraliza las consultas e interacciones entrantes desde diferentes canales",
    },
    {
      src: "/work/real-estate-automation/02-inventario.jpg",
      alt: "Inventario de InmoFlow con fichas y alertas pendientes",
      caption: "Gestión de inventario y control de alertas",
    },
    {
      src: "/work/real-estate-automation/03-embudo.jpg",
      alt: "Embudo de captación Kanban de InmoFlow",
      caption: "Embudo de captación: organiza el flujo de conversión",
    },
    {
      src: "/work/real-estate-automation/04-documentos.jpg",
      alt: "Editor de plantillas de documentos de InmoFlow",
      caption:
        "Generador de documentos: automatiza la creación de borradores y documentos legales",
    },
  ],

  problem: {
    label: "EL PROBLEMA",
    heading: "Demasiados canales. Ningún sistema único.",
    paragraphs: [
      "Un profesional inmobiliario gestionaba email, leads de Meta, portales inmobiliarios, stock y contratos en herramientas y notas separadas.",
      "La información se copiaba manualmente entre canales. No había una vista compartida de leads, inventario ni documentos.",
      "Responder consultas, hacer seguimiento de oportunidades y preparar contratos exigía cambiar de contexto constantemente.",
      "El flujo funcionaba — pero solo con esfuerzo extra y repetición.",
    ],
  },

  beforeFlow: [
    "LEADS DE META",
    "BANDEJA DE EMAIL",
    "REVISIÓN DE PORTALES",
    "STOCK / NOTAS",
    "DOCUMENTOS MANUALES",
  ],

  opportunity: {
    heading: 'La oportunidad no era "otro CRM".',
    quote:
      "La oportunidad era conectar los canales existentes en un único sistema operativo.",
    existingItems: [
      "plantillas de documentos del cliente",
      "leads de Meta y email",
      "una forma establecida de gestionar el stock",
    ],
    paragraphs: [
      "El objetivo no era cambiar la forma de trabajar del negocio. Era centralizar la información y automatizar las partes repetitivas: clasificación, enrutamiento, alertas y preparación de documentos.",
    ],
  },

  solution: {
    heading: "Un sistema conectado: InmoFlow.",
    paragraphs: [
      "InmoFlow unifica cinco módulos sobre una base de datos Supabase: AI Inbox, Inventario, Tracker (scraping de portales), Embudo de Captación y Documentos.",
      "Gemini clasifica el email y redacta respuestas. Los leads de Meta llegan vía webhook (n8n). Un scraper en Python alimenta anuncios privados de Milanuncios en el tracker.",
      "Los documentos se generan a partir de las plantillas propias del cliente — campos conocidos pre-rellenados desde el sistema; campos variables recogidos mediante formularios.",
    ],
    fields: ["INBOX", "INVENTARIO", "RASTREADOR", "EMBUDO", "DOCUMENTOS"],
  },

  howItWorks: [
    { label: "LEADS + EMAIL + MERCADO + STOCK", description: "La información entra desde Meta, email, portales e inventario." },
    { label: "BASE DE DATOS CENTRAL", description: "Supabase almacena clientes, propiedades, leads y documentos en un solo lugar." },
    { label: "AUTOMATIZACIÓN", description: "Clasificación con IA, webhooks, scraping y alertas reducen el enrutamiento manual." },
    { label: "ACCIONES / DOCUMENTOS / ALERTAS", description: "El agente responde, avanza leads, monitoriza stock y genera contratos." },
  ],

  userFlowHeading: "Del lead al documento.",
  userFlowNote: "El agente mantiene el control — la automatización asiste, no sustituye las decisiones.",
  userFlow: [
    { step: "1", title: "CAPTURAR", description: "Un lead llega vía Meta, email o el tracker de portales." },
    { step: "2", title: "CLASIFICAR", description: "Inbox AI ordena el mensaje y redacta una respuesta." },
    { step: "3", title: "SEGUIR", description: "El embudo Kanban avanza el lead por las etapas." },
    { step: "4", title: "MONITORIZAR", description: "El tracker muestra anuncios privados y oportunidades." },
    { step: "5", title: "GENERAR", description: "Se crea un documento a partir de plantillas con datos pre-rellenados." },
  ],

  evidencePlaceholders: [
    "Captura — inbox con IA",
    "Captura — embudo de captación",
    "Captura — inventario",
    "Captura — generación de documentos",
  ],

  builtWith: [
    "Supabase",
    "SQL",
    "n8n",
    "Gemini",
    "Meta",
    "APIs",
    "Web Scraping",
  ],

  role: [
    "Análisis del problema de negocio",
    "Mapeo de procesos",
    "Arquitectura de la solución",
    "Desarrollo Next.js / Supabase",
    "Integración de IA (Gemini)",
    "Diseño de automatización (n8n, webhooks)",
    "Diseño de flujo de trabajo y UX",
    "Pruebas e iteración",
  ],

  demonstrates: [
    { title: "CONECTAR FLUJOS FRAGMENTADOS", description: "Unificar canales que antes operaban de forma aislada." },
    { title: "CENTRALIZAR DATOS", description: "Una base de datos en lugar de hojas de cálculo y notas dispersas." },
    { title: "APLICAR IA DE FORMA SELECTIVA", description: "Utilizar Gemini donde la clasificación y redacción ahorran tiempo." },
    { title: "AUTOMATIZAR TAREAS REPETITIVAS", description: "Webhooks, scraping y alertas gestionan el enrutamiento rutinario." },
    { title: "CONSTRUIR UN MVP FUNCIONAL", description: "Un producto operativo, no una presentación ni un prototipo." },
    { title: "DISEÑAR PARA OPERACIONES REALES", description: "Construido en torno a cómo trabaja realmente un agente día a día." },
  ],

  statusNote:
    "Construido como MVP funcional para un flujo inmobiliario.",

  cta: {
    heading: "¿Tienes herramientas fragmentadas?",
    quoteLines: [
      "Quizá no necesitas más apps.",
      "Quizá necesitas un sistema conectado.",
    ],
  },

  navigation: {
    previous: { href: "/work/document-intelligence", label: "Document Intelligence" },
    next: { href: "/work/logicalc", label: "Logicalc" },
  },
};
