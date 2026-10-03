import type { Dictionary } from "@/i18n/types";
import { aboutWhyMeEs } from "@/i18n/content/aboutWhyMe.es";
import { cvPageEs } from "@/i18n/content/cvPage.es";
import { experimentsEs } from "@/i18n/content/experiments.es";
import { privacyEs } from "@/i18n/content/privacy.es";

export const es: Dictionary = {
  locale: "es",
  profile: {
    name: "Israel Santos",
    fullName: "Israel Santos López",
    title: "Analista de Negocio y Transformación Digital",
    brand: "Business × Technology",
    headline: "Convierto problemas empresariales en soluciones digitales.",
    subheadline:
      "Analizo procesos, detecto ineficiencias y diseño soluciones utilizando IA, automatización y tecnología.",
    claim: [
      "Entiendo el negocio.",
      "Encuentro la fricción.",
      "Construyo la solución.",
    ],
    tags: [
      "Análisis de negocio",
      "Optimización de procesos",
      "IA y automatización",
      "Soluciones digitales",
    ],
    email: "isra31987@gmail.com",
    phone: "677 230 612",
    city: "Gandía (Valencia)",
    english: "B1",
    footerLine:
      "Construido con curiosidad, IA y mucha resolución de problemas.",
  },
  nav: [
    { href: "/work", label: "Proyectos" },
    { href: "/approach", label: "Enfoque" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ],
  home: {
    ctaProjects: "VER PROYECTOS →",
    ctaCv: "DESCARGAR CV",
    scrollHint: "DESPLÁZATE PARA EXPLORAR ↓",
  },
  homeClosing: {
    value: {
      label: "QUÉ PUEDO APORTAR",
      heading: ["A TU EMPRESA.", "NO SOLO AL CÓDIGO."],
      supporting:
        "Combino experiencia real en operaciones con capacidad para analizar procesos, detectar fricción y construir soluciones digitales prácticas.",
      items: [
        "Análisis de procesos y detección de ineficiencias",
        "Automatización e integraciones (APIs, n8n, IA)",
        "Prototipos y herramientas internas",
        "IA aplicada a operaciones y documentación",
      ],
    },
    contact: {
      label: "HABLEMOS",
      heading: "¿Buscas un perfil entre negocio y tecnología?",
      supporting:
        "Si tienes una oportunidad donde pueda aportar, escríbeme. Estoy abierto a conversar.",
      ctaContact: "CONTACTAR →",
      ctaAbout: "CONOCER MI PERFIL →",
    },
  },
  approach: {
    label: "Enfoque",
    heading: "NO EMPIEZO POR LA TECNOLOGÍA.",
    tagline: [
      "La tecnología cambia constantemente.",
      "Los problemas de negocio, no.",
    ],
    closing: ["La tecnología es el medio.", "La solución es el objetivo."],
    steps: [
      {
        number: "01",
        label: "ENTENDER",
        question: "¿Qué necesita realmente el negocio?",
      },
      {
        number: "02",
        label: "MAPEAR",
        question: "¿Cómo funciona el proceso actual?",
      },
      {
        number: "03",
        label: "IDENTIFICAR",
        question: "¿Dónde está la fricción?",
      },
      {
        number: "04",
        label: "DISEÑAR",
        question: "¿Cómo debería ser el proceso ideal?",
      },
      {
        number: "05",
        label: "CONSTRUIR",
        question: "¿Qué tecnología puede resolverlo?",
      },
      {
        number: "06",
        label: "ITERAR",
        question: "¿Funciona? ¿Qué se puede mejorar?",
      },
    ],
  },
  process: {
    ariaLabel: "Método: Problema, Analizar, Diseñar, Automatizar, Construir",
    steps: [
      { number: "01", label: "PROBLEMA" },
      { number: "02", label: "ANALIZAR" },
      { number: "03", label: "DISEÑAR" },
      { number: "04", label: "AUTOMATIZAR" },
      { number: "05", label: "CONSTRUIR" },
    ],
  },
  selectedWork: {
    label: "Proyectos seleccionados",
    heading: ["PROBLEMAS REALES.", "SOLUCIONES DIGITALES."],
    supporting:
      "Proyectos creados para simplificar procesos, automatizar trabajo repetitivo, analizar información y convertir necesidades de negocio en soluciones digitales funcionales.",
    viewCase: "Ver caso →",
    projectVisual: "Visual del proyecto",
    screenshotComing: "Captura próximamente",
    workflowAria: "Flujo del proyecto",
  },
  work: {
    label: "Proyectos",
    heading: "Proyectos seleccionados",
    intro:
      "Cuatro casos donde un problema de negocio se convirtió en solución digital. Estados honestos, sin métricas inventadas.",
    viewCase: "Ver caso →",
  },
  aboutWhyMe: aboutWhyMeEs,
  contact: {
    label: "Contacto",
    heading: "¿Buscas un perfil entre negocio y tecnología?",
    intro:
      "Si tienes una oportunidad donde el análisis de procesos y las soluciones digitales aporten valor, escríbeme. Estoy abierto a conversar.",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    footerNote:
      "Me interesa unirme a un equipo donde pueda aportar experiencia de negocio y capacidad para construir soluciones. Una conversación breve basta para empezar.",
    ctaEmail: "ENVIAR EMAIL →",
    ctaWhatsapp: "WHATSAPP →",
    ctaWork: "VER PROYECTOS",
    metaDescription:
      "Contacto Israel Santos — Analista de Negocio y Transformación Digital. Abierto a oportunidades laborales.",
    emailSubject: "Oportunidad laboral — Israel Santos",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      emailField: "Email",
      emailPlaceholder: "tu@empresa.com",
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntame el rol, el equipo o el contexto de la oportunidad…",
      channelLabel: "Canal",
      channelEmail: "Email",
      channelWhatsapp: "WhatsApp",
      submitEmail: "ENVIAR MENSAJE →",
      submitWhatsapp: "ENVIAR POR WHATSAPP →",
      hintEmail: "El mensaje llega directamente a mi email. Puedo responderte desde ahí.",
      hintWhatsapp:
        "Se abrirá WhatsApp con tu mensaje listo. Solo tienes que pulsar enviar.",
      statusSending: "Enviando…",
      statusSuccessEmail: "Mensaje enviado. Te responderé lo antes posible.",
      statusSuccessWhatsapp: "Abriendo WhatsApp…",
      statusError: "No se pudo enviar. Prueba de nuevo o escríbeme por email.",
      statusNotConfigured:
        "El envío por email aún no está configurado en el servidor. Usa WhatsApp o el email directo.",
    },
  },
  cv: cvPageEs,
  video: {
    label: "Vídeo",
    title: "El método en 60 segundos",
    subtitle: "No es una presentación personal — es el proceso.",
    description:
      "Observar el negocio → analizar el proceso → diseñar la solución → automatizar donde ayuda → construir lo que aporta valor.",
    duration: "45–60 s",
    comingSoon: "Vídeo próximamente",
    seedance: "Seedance 2.5",
    noVideoSupport: "Tu navegador no soporta vídeo HTML5.",
    methodSteps: ["Observar", "Analizar", "Diseñar", "Automatizar", "Construir"],
  },
  navbar: {
    downloadCv: "Descargar CV",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    navAria: "Principal",
    mobileAria: "Móvil",
  },
  caseStudyUi: {
    backToWork: "← VOLVER A PROYECTOS",
    selectedWork: "PROYECTOS SELECCIONADOS",
    projectScreenshot: "Captura del proyecto",
    before: "Antes",
    beforeAria: "Flujo de trabajo antes de la automatización",
    businessAlreadyHad: "El negocio ya tenía:",
    howItWorks: "Cómo funciona",
    insideSolution: "Dentro de la solución",
    demoVideo: "Vídeo demo breve",
    videoComing: "Vídeo próximamente",
    builtWith: "Construido con",
    techNote:
      "La tecnología se eligió según el problema, no al revés.",
    myRole: "Mi rol",
    demonstrates: "Qué demuestra este proyecto",
    projectStatus: "Estado del proyecto",
    exploreMore: "EXPLORAR MÁS PROYECTOS →",
    getInTouch: "CONTACTAR →",
    previous: "← ANTERIOR",
    next: "SIGUIENTE →",
    selectedWorkNav: "PROYECTOS",
    projectVisual: "Visual del proyecto",
    screenshotComing: "Captura próximamente",
    closeLightbox: "Cerrar",
  },
  slugPage: {
    backToWork: "← Volver a Proyectos",
    problem: "Problema",
    analyze: "Análisis",
    solution: "Solución",
    technologies: "Tecnologías",
    status: "Estado",
  },
  metadata: {
    approachDescription:
      "No empiezo por la tecnología. Seis etapas desde entender el negocio hasta iterar la solución.",
    workDescription:
      "Cuatro casos de estudio donde problemas de negocio se convirtieron en soluciones digitales.",
    caseStudySuffix: "Caso de estudio",
  },
  projects: [
    {
      number: "01",
      slug: "document-intelligence",
      title: "Document Intelligence",
      subtitle: "De documentos en papel → datos estructurados",
      description:
        "Automatización mediante IA de la extracción de información de tickets de tacógrafo para facilitar la gestión documental y el control de stock de un compraventa de vehículos.",
      problem:
        "Un compraventa de vehículos recibía fotografías o escaneos de tickets de tacógrafo y registraba a mano matrícula, bastidor, fecha, km y modelo para actualizar su Excel de stock.",
      analysis:
        "Proceso repetitivo, lento y propenso a error. Los mismos campos se repetían en cada ticket sin validación de duplicados.",
      solution:
        "App Python/Tkinter (Control Vehículos) que procesa imágenes con Gemini Vision, valida VIN y matrícula, confirma modelo/tipo y escribe en Control_Vehiculos.xlsx (ENTRADAS → STOCK → SALIDAS). Reportes diarios y backup automático.",
      technologies: ["Python", "AI", "OCR / Document Intelligence", "Excel"],
      status: "SOLUCIÓN REAL DE NEGOCIO",
    },
    {
      number: "02",
      slug: "real-estate-automation",
      title: "Real Estate Automation",
      subtitle: "De flujos fragmentados → sistema conectado",
      description:
        "Una herramienta de gestión que conecta leads, email, mercado, stock, alertas y generación documental en un único flujo de trabajo.",
      problem:
        "Un profesional inmobiliario gestionaba correo, leads de Meta, portales, stock y contratos en flujos separados, sin una base común.",
      analysis:
        "Cada canal operaba de forma aislada. Faltaba un sistema que uniera la información y automatizara alertas y documentos.",
      solution:
        "InmoFlow: Inbox IA (Gemini), inventario, rastreador con scraping de Milanuncios, embudo Kanban para leads Meta (n8n) y generación documental desde plantillas en Supabase. Funcional; no en uso comercial activo.",
      technologies: [
        "Supabase",
        "SQL",
        "n8n",
        "Gemini",
        "Meta",
        "APIs",
        "Web Scraping",
      ],
      status: "SOLUCIÓN FUNCIONAL",
    },
    {
      number: "03",
      slug: "logicalc",
      title: "Logicalc",
      subtitle: "De experiencia en transporte → producto SaaS",
      description:
        "Una herramienta de análisis de rentabilidad diseñada para ayudar a pequeños transportistas a decidir si aceptar o rechazar un viaje basándose en su rentabilidad real.",
      problem:
        "Transportistas autónomos y pequeñas flotas aceptaban viajes sin visibilidad real de combustible, seguros, mantenimiento y otros costes operativos.",
      analysis:
        "Recibían un precio por viaje sin poder calcular rápido el beneficio neto ni acumular rentabilidad por periodo.",
      solution:
        "LogiCalc (Next.js): calculadora de rentabilidad por viaje y periodo, registro histórico, perfil de costes con aprobación admin. PostgreSQL en Supabase, desplegado en Vercel. Diseñado como SaaS; pasarela de pagos y lanzamiento comercial pendientes.",
      technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
      status: "PRODUCTO FUNCIONAL / MVP",
    },
    {
      number: "04",
      slug: "lead-intelligence",
      title: "Lead Intelligence",
      subtitle: "De datos sociales → oportunidades comerciales",
      description:
        "Una herramienta experimental para identificar y priorizar potenciales clientes a partir de datos públicos de audiencias relevantes.",
      problem:
        "Identificar clientes potenciales entre seguidores de cuentas Instagram relevantes de un sector.",
      analysis:
        "Recorrer audiencias a mano no escala. Lo valioso es detectar perfiles que aparecen en varias cuentas del mismo nicho.",
      solution:
        "Capturador sobre LDPlayer + OCR (Tesseract) + cruce de audiencias con scoring y exportación TXT/Excel. GUI en app.py. Experimental; sin API oficial de Instagram.",
      technologies: ["Data", "Automation", "Analysis", "Python"],
      status: "EXPERIMENTAL / FUNCIONAL",
    },
  ],
  selectedProjects: [
    {
      number: "01",
      slug: "document-intelligence",
      category: "SOLUCIÓN REAL DE NEGOCIO",
      title: "Document Intelligence",
      subtitle: "De documentos en papel → datos estructurados",
      description:
        "Automatización mediante IA de la extracción de información de tickets de tacógrafo para facilitar la gestión documental y el control de stock de un compraventa de vehículos.",
      context:
        "El flujo original recibía fotografías o escaneos de tickets de tacógrafo de vehículos que entraban o salían del compraventa. La herramienta usa IA para extraer matrícula, bastidor, fecha y modelo, transferir los datos a la estructura Excel del negocio y facilitar la selección de altas y bajas de stock.",
      technologies: ["Python", "AI", "OCR / Document Intelligence", "Excel"],
      status: "SOLUCIÓN REAL DE NEGOCIO",
      workflow: [
        "DOCUMENTO",
        "EXTRACCIÓN IA",
        "DATOS ESTRUCTURADOS",
        "EXCEL",
        "CONTROL DE STOCK",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Document Intelligence",
      hideVisual: true,
    },
    {
      number: "02",
      slug: "real-estate-automation",
      category: "SOLUCIÓN FUNCIONAL",
      title: "Real Estate Automation",
      subtitle: "De flujos fragmentados → sistema conectado",
      description:
        "Una herramienta de gestión que conecta leads, email, mercado, stock, alertas y generación documental en un único flujo de trabajo.",
      context:
        "Desarrollada para un profesional inmobiliario (InmoFlow). Incluye gestión automatizada de correo, monitorización del mercado, scraping de portales como Idealista y Milanuncios, detección de oportunidades, gestión de stock, alertas de vencimiento, leads de Meta y generación documental desde plantillas del cliente. Base SQL en Supabase; IA con Gemini. Funcional, pero no en uso comercial activo.",
      technologies: [
        "Supabase",
        "SQL",
        "n8n",
        "Gemini",
        "Meta",
        "APIs",
        "Web Scraping",
      ],
      status: "SOLUCIÓN FUNCIONAL",
      workflow: [
        "LEADS + MERCADO + EMAIL + STOCK",
        "BASE DE DATOS CENTRAL",
        "AUTOMATIZACIÓN",
        "ACCIONES / DOCUMENTOS / ALERTAS",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Real Estate Automation",
      hideVisual: true,
    },
    {
      number: "03",
      slug: "logicalc",
      category: "PRODUCTO FUNCIONAL / MVP",
      title: "Logicalc",
      subtitle: "De experiencia en transporte → producto SaaS",
      description:
        "Una herramienta de análisis de rentabilidad diseñada para ayudar a pequeños transportistas a decidir si aceptar o rechazar un viaje basándose en su rentabilidad real.",
      context:
        "Nació de la experiencia directa en el sector transporte. Muchos autónomos reciben un precio por viaje sin visibilidad real de combustible, seguros, mantenimiento y otros costes operativos. Permite calcular rentabilidad por viaje y acumulada en un periodo. Diseñado como SaaS por suscripción; pasarela de pagos y lanzamiento comercial aún no implementados.",
      technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
      status: "PRODUCTO FUNCIONAL / MVP",
      workflow: ["VIAJE + COSTES", "RENTABILIDAD", "ACEPTAR / RECHAZAR"],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Logicalc",
      hideVisual: true,
    },
    {
      number: "04",
      slug: "lead-intelligence",
      category: "EXPERIMENTAL / FUNCIONAL",
      title: "Lead Intelligence",
      subtitle: "De datos sociales → oportunidades comerciales",
      description:
        "Una herramienta experimental para identificar y priorizar potenciales clientes a partir de datos públicos de audiencias relevantes.",
      technologies: ["Data", "Automation", "Analysis", "Python"],
      status: "EXPERIMENTAL / FUNCIONAL",
      workflow: [
        "DATOS SOCIALES",
        "EXTRACCIÓN",
        "COMPARACIÓN",
        "PRIORIZACIÓN",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Lead Intelligence",
      hideVisual: true,
    },
  ],
  experiments: experimentsEs,
  privacy: privacyEs,
  cookies: {
    message: "Usamos cookies analíticas opcionales para mejorar el sitio.",
    privacyLink: "Privacidad",
    accept: "Aceptar",
    decline: "Rechazar",
  },
  footer: {
    experimentsLink: "Experimentos personales →",
    privacyLink: "Privacidad",
  },
};
