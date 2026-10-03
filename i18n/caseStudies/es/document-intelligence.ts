import type { CaseStudyData } from "@/data/caseStudies/types";

export const documentIntelligenceCase: CaseStudyData = {
  slug: "document-intelligence",
  number: "01",
  category: "IA × AUTOMATIZACIÓN",
  title: "Document Intelligence",
  subtitle: "De documentos en papel → datos estructurados",
  intro:
    "Automatización de la extracción y gestión de información de vehículos a partir de tickets de tacógrafo escaneados.",
  technologies: ["Python", "AI", "OCR", "Excel"],
  status: "SOLUCIÓN REAL DE NEGOCIO",

  screenshots: [
    {
      src: "/work/document-intelligence/01-entradas.png",
      alt: "Pantalla de entradas de CONTROL Vehículos",
      caption:
        "Registra entradas y salidas al instante y sin errores manuales",
    },
    {
      src: "/work/document-intelligence/02-fotos.png",
      alt: "Selección de fotos de tickets para procesar con IA",
      caption: "Importa los datos directamente de las fotos",
    },
    {
      src: "/work/document-intelligence/03-stock.png",
      alt: "Listado de entradas del día con búsqueda y datos estructurados",
      caption:
        "Permite llevar un control de stock ordenado y con facilidades de búsqueda",
    },
    {
      src: "/work/document-intelligence/04-informes.png",
      alt: "Pantalla de salidas con generación de informes",
      caption: "Genera informes automáticamente cuando los necesites",
    },
  ],

  problem: {
    label: "EL PROBLEMA",
    heading: "Una tarea sencilla repetida cada día.",
    paragraphs: [
      "El negocio recibía fotografías o imágenes escaneadas de tickets de tacógrafo de vehículos que entraban o salían del concesionario.",
      "La información relevante debía extraerse y trasladarse manualmente a una estructura Excel existente.",
      "El proceso era repetitivo y requería el manejo manual de la información contenida en los documentos.",
      "La información del vehículo también era necesaria para mantener el control de los vehículos que entraban y salían del stock.",
    ],
  },

  beforeFlow: [
    "FOTO / ESCANEO",
    "LECTURA MANUAL",
    "INTRODUCCIÓN MANUAL DE DATOS",
    "EXCEL",
    "CONTROL DE STOCK",
  ],

  opportunity: {
    heading: 'La oportunidad no era "más software".',
    quote:
      "La oportunidad era eliminar el trabajo manual innecesario de un proceso ya existente.",
    existingItems: ["documentos", "una estructura Excel", "un flujo de stock establecido"],
    paragraphs: [
      "El objetivo, por tanto, no era sustituirlo todo. Era introducir automatización exactamente donde aportaba valor.",
    ],
  },

  solution: {
    heading: "Convertir documentos en información estructurada.",
    paragraphs: [
      "La solución acepta fotografías o documentos escaneados y utiliza IA para extraer la información relevante.",
      "La información extraída se mapea en la estructura Excel existente que utiliza el negocio.",
      "La aplicación también ofrece una forma simplificada de seleccionar qué vehículos deben entrar o salir del stock.",
    ],
    fields: ["MATRÍCULA", "BASTIDOR", "FECHA", "MODELO"],
  },

  howItWorks: [
    { label: "DOCUMENTO", description: "Foto o ticket de tacógrafo escaneado." },
    { label: "IA / ANÁLISIS DE DOCUMENTOS", description: "El documento se analiza automáticamente." },
    { label: "EXTRACCIÓN DE DATOS", description: "Se identifica la información relevante del vehículo." },
    { label: "CAMPOS ESTRUCTURADOS", description: "La información extraída se convierte en datos estructurados." },
    { label: "EXCEL", description: "Los datos se transfieren a la estructura Excel existente de la empresa." },
    { label: "CONTROL DE STOCK", description: "El usuario selecciona los vehículos que entran o salen del stock." },
  ],

  userFlowHeading: "Del documento al stock.",
  userFlowNote: "El usuario mantiene el control en cada paso.",
  userFlow: [
    { step: "1", title: "SUBIR", description: "El usuario sube o escanea documentos." },
    { step: "2", title: "ANALIZAR", description: "El sistema analiza el documento." },
    { step: "3", title: "REVISAR", description: "La información extraída puede revisarse." },
    { step: "4", title: "EXPORTAR", description: "La información se transfiere a la estructura Excel existente." },
    { step: "5", title: "STOCK", description: "Se pueden seleccionar vehículos para entrada o salida del stock." },
  ],

  evidencePlaceholders: [
    "Captura — entrada de documentos",
    "Captura — datos extraídos",
    "Captura — control de stock",
  ],

  builtWith: ["Python", "AI", "OCR / Document Intelligence", "Excel"],

  role: [
    "Análisis del problema de negocio",
    "Diseño del proceso",
    "Diseño de la solución",
    "Desarrollo en Python",
    "Integración de IA",
    "Diseño del flujo de trabajo",
    "Pruebas e iteración",
  ],

  demonstrates: [
    { title: "ENTENDER EL PROCESO", description: "Comprender cómo funciona realmente el negocio antes de proponer una solución." },
    { title: "IDENTIFICAR FRICCIÓN", description: "Reconocer tareas manuales repetitivas y manejo innecesario de datos." },
    { title: "APLICAR IA", description: "Utilizar IA cuando la información no estructurada debe convertirse en datos estructurados." },
    { title: "INTEGRAR", description: "Trabajar con las herramientas existentes del negocio en lugar de sustituirlas innecesariamente." },
    { title: "CONSTRUIR", description: "Convertir el concepto en una aplicación funcional." },
    { title: "PENSAR DE PRINCIPIO A FIN", description: "Considerar todo el flujo de trabajo, no una tarea aislada." },
  ],

  statusNote: "Desarrollado como solución práctica para un flujo de trabajo real de negocio.",

  cta: {
    heading: "¿Tienes un proceso repetitivo?",
    quoteLines: [
      "Quizá no necesita más personas.",
      "Quizá necesita un mejor proceso.",
    ],
  },

  navigation: {
    next: { href: "/work/real-estate-automation", label: "Automatización Inmobiliaria" },
  },
};
