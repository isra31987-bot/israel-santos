import type { CaseStudyData } from "@/data/caseStudies/types";

export const leadIntelligenceCase: CaseStudyData = {
  slug: "lead-intelligence",
  number: "04",
  category: "DATOS × AUTOMATIZACIÓN",
  title: "Lead Intelligence",
  subtitle: "De datos sociales → oportunidades comerciales",
  intro:
    "Herramienta experimental para identificar y priorizar clientes potenciales a partir de datos públicos de audiencias en Instagram.",
  technologies: ["Data", "Automation", "Analysis", "Python"],
  status: "EXPERIMENTAL / FUNCIONAL",

  screenshots: [
    {
      src: "/work/lead-intelligence/01-dashboard.jpg",
      alt: "Dashboard de rendimiento de Lead Intelligence",
      caption: "Interfaz moderna y user friendly",
    },
    {
      src: "/work/lead-intelligence/02-extraccion.jpg",
      alt: "Hub de extracción de datos y OCR de Lead Intelligence",
      caption: "Extracción de datos y OCR",
    },
    {
      src: "/work/lead-intelligence/03-cruce.jpg",
      alt: "Cruce de audiencias e intersección en Lead Intelligence",
      caption: "Cruce de audiencias e intersección",
    },
    {
      src: "/work/lead-intelligence/04-scoring.jpg",
      alt: "Sistema de lead scoring y priorización",
      caption: "Sistema de lead scoring y priorización",
    },
  ],
  screenshotsNote:
    "Interfaz y métricas mostradas mediante simulaciones con datos anonimizados por motivos de privacidad y protección de datos.",

  problem: {
    label: "EL PROBLEMA",
    heading: "Las audiencias existen. Las oportunidades son difíciles de encontrar.",
    paragraphs: [
      "En un sector concreto, cuentas relevantes de Instagram acumulan seguidores que pueden ser clientes potenciales — pero las listas son grandes y no estructuradas.",
      "Desplazarse manualmente por listas de seguidores no escala. Un solo seguidor en una cuenta es señal débil.",
      "Lo que importa es encontrar perfiles que aparecen en varias cuentas relevantes del mismo nicho — señal de interés genuino en el sector.",
      "No había una forma sencilla de capturar, comparar y clasificar esas audiencias.",
    ],
  },

  beforeFlow: [
    "ABRIR LISTA DE SEGUIDORES",
    "DESPLAZAMIENTO MANUAL",
    "COPIAR NOMBRES DE USUARIO",
    "COMPARAR EN HOJA DE CÁLCULO",
    "ADIVINAR PRIORIDAD",
  ],

  opportunity: {
    heading: 'La oportunidad no era "marketing en redes sociales".',
    quote:
      "La oportunidad era convertir el solapamiento de audiencias públicas en una lista clasificada de leads potenciales.",
    existingItems: [
      "listas públicas de seguidores en Instagram",
      "varias cuentas relevantes en el mismo sector",
      "una necesidad de priorizar el contacto, no recopilar nombres al azar",
    ],
    paragraphs: [
      "La herramienta no necesitaba publicar, enviar mensajes ni automatizar el contacto. Necesitaba responder: ¿quién aparece en múltiples audiencias relevantes y a quién contactar primero?",
    ],
  },

  solution: {
    heading: "Capturar, extraer, comparar, clasificar.",
    paragraphs: [
      "Un pipeline de escritorio en Python: un capturador automatizado recorre listas de seguidores en un emulador Android (LDPlayer), captura pantallas por lotes, y un analizador OCR extrae @usernames con filtrado de ruido.",
      "Cuando se escanean varias cuentas, la herramienta cruza audiencias y asigna una puntuación según en cuántas cuentas aparece cada perfil.",
      "Los resultados se exportan a TXT y Excel, listos para revisión manual. Una GUI unificada (app.py) combina captura y análisis en una sola interfaz.",
    ],
    fields: ["CAPTURA", "OCR", "CRUCE", "PUNTUACIÓN", "EXPORTACIÓN"],
  },

  howItWorks: [
    { label: "CAPTURA", description: "Capturas automatizadas de listas de seguidores mediante scroll en LDPlayer." },
    { label: "EXTRACCIÓN OCR", description: "Tesseract lee nombres de usuario de regiones recortadas de pantalla con filtros anti-ruido." },
    { label: "CRUCE", description: "Las audiencias de varias cuentas se comparan para encontrar perfiles solapados." },
    { label: "PUNTUACIÓN Y EXPORTACIÓN", description: "Perfiles clasificados por recuento de solapamiento y exportados a TXT / Excel." },
  ],

  userFlowHeading: "De cuentas a leads clasificados.",
  userFlowNote: "El usuario revisa y decide a quién contactar. La herramienta no automatiza el contacto.",
  userFlow: [
    { step: "1", title: "OBJETIVO", description: "Seleccionar cuentas relevantes de Instagram en el sector." },
    { step: "2", title: "CAPTURAR", description: "El capturador recorre y captura listas de seguidores automáticamente." },
    { step: "3", title: "EXTRAER", description: "OCR extrae @usernames y filtra ruido de interfaz y lecturas falsas." },
    { step: "4", title: "COMPARAR", description: "Las audiencias se cruzan para encontrar perfiles solapados." },
    { step: "5", title: "EXPORTAR", description: "Leads clasificados se exportan a TXT o Excel para revisión manual." },
  ],

  evidencePlaceholders: [
    "Captura — interfaz de captura",
    "Captura — extracción OCR",
    "Captura — cruce de audiencias",
    "Captura — exportación clasificada",
  ],

  builtWith: [
    "Python",
    "Tkinter",
    "Tesseract OCR",
    "pyautogui",
    "OpenCV",
    "openpyxl",
  ],

  role: [
    "Definición del problema",
    "Diseño de automatización de procesos",
    "Diseño del pipeline OCR",
    "Desarrollo en Python",
    "Lógica de filtrado y puntuación de datos",
    "GUI de escritorio (Tkinter)",
    "Pruebas e iteración",
  ],

  demonstrates: [
    { title: "TRABAJAR CON DATOS PÚBLICOS", description: "Extraer señal de listas de seguidores públicamente visibles." },
    { title: "AUTOMATIZAR CAPTURA REPETITIVA", description: "Sustituir el desplazamiento manual por recopilación automatizada de capturas." },
    { title: "ESTRUCTURAR DATOS NO ESTRUCTURADOS", description: "Convertir imágenes de pantalla en listas limpias de nombres de usuario vía OCR." },
    { title: "ENCONTRAR PATRONES ENTRE FUENTES", description: "Cruzar audiencias para detectar perfiles solapados." },
    { title: "PRIORIZAR, NO DISPARAR A CIEGAS", description: "Clasificar leads por relevancia en lugar de exportar listas en bruto." },
    { title: "EXPERIMENTAR CON RESTRICCIONES", description: "Construido sin acceso a API oficial — automatización pragmática en su lugar." },
  ],

  statusNote:
    "Experimental y funcional para uso interno. Depende de un emulador Android y no utiliza la API oficial de Instagram. No se reclaman resultados comerciales.",

  cta: {
    heading: "¿Tienes datos no estructurados?",
    quoteLines: [
      "Quizá la oportunidad no es más datos.",
      "Quizá es mejor análisis.",
    ],
  },

  navigation: {
    previous: { href: "/work/logicalc", label: "Logicalc" },
  },
};
