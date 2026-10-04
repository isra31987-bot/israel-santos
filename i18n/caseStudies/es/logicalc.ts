import type { CaseStudyData } from "@/data/caseStudies/types";

export const logicalcCase: CaseStudyData = {
  slug: "logicalc",
  number: "03",
  category: "TRANSPORTE × SAAS",
  title: "Logicalc",
  subtitle: "De experiencia en transporte → producto SaaS",
  intro:
    "Una herramienta de análisis de rentabilidad diseñada para ayudar a los pequeños transportistas a tomar decisiones en su día a día.",
  technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
  status: "PRODUCTO FUNCIONAL / MVP",

  screenshots: [
    {
      src: "/work/logicalc/01-calculadora.jpg",
      alt: "Calculadora de rentabilidad de LogiCalc con datos del viaje",
      caption: "Calcula la rentabilidad de un servicio de manera instantánea",
    },
    {
      src: "/work/logicalc/02-beneficios.jpg",
      alt: "Sección de beneficios de LogiCalc para transportistas",
      caption: "Diseñado para ayudarte en tu día a día",
    },
    {
      src: "/work/logicalc/03-insights.jpg",
      alt: "Insights del periodo en LogiCalc con KPIs y desglose de gastos",
      caption: "Insights que te ayudan a tomar decisiones",
    },
    {
      src: "/work/logicalc/04-informes.png",
      alt: "Informe de viajes exportado desde LogiCalc",
      caption: "Exporta tus informes y compártelos fácilmente",
    },
  ],

  problem: {
    label: "EL PROBLEMA",
    heading: "Un precio sobre la mesa. Sin respuesta clara.",
    paragraphs: [
      "Autónomos del transporte y pequeñas flotas reciben con frecuencia un precio propuesto por un viaje y deben decidir rápidamente si aceptarlo.",
      "La decisión depende de costes como combustible, seguros, mantenimiento, kilómetros en vacío, amortización y otros costes operativos — pero esos números rara vez están reunidos en un solo lugar.",
      "Muchos transportistas confían en el instinto o estimaciones mentales aproximadas. No hay una forma sencilla de ver beneficio neto y margen antes de decir sí o no.",
      "Con el tiempo, tampoco hay un historial estructurado para revisar qué rutas o periodos fueron realmente rentables.",
    ],
  },

  beforeFlow: [
    "OFERTA DE VIAJE RECIBIDA",
    "ESTIMACIÓN MENTAL",
    "ACEPTAR O RECHAZAR",
    "SIN DESGLOSE DE COSTES",
    "SIN HISTORIAL",
  ],

  opportunity: {
    heading: 'La oportunidad no era "otra app de transporte".',
    quote:
      "La oportunidad era convertir una decisión diaria de negocio en un cálculo claro y repetible.",
    existingItems: [
      "experiencia directa en el sector del transporte",
      "un conjunto conocido de costes operativos que enfrenta todo transportista",
      "una decisión que ocurre antes de cada viaje",
    ],
    paragraphs: [
      "El producto no necesitaba gestionar rutas, despacho ni logística de flota. Necesitaba responder una pregunta: ¿vale la pena este viaje?",
    ],
  },

  solution: {
    heading: "Claridad antes de cada viaje.",
    paragraphs: [
      "LogiCalc (Logicalc) es una aplicación web que calcula la rentabilidad del viaje en segundos usando un modelo de costes estructurado.",
      "Los usuarios introducen precio del viaje, distancia, peso, kilómetros en vacío y costes extra. El sistema devuelve beneficio neto, margen y un desglose detallado de costes.",
      "Los suscriptores pueden enviar un perfil de costes personalizado (aprobado por el admin) y registrar viajes a lo largo del tiempo para analizar la rentabilidad acumulada en un periodo seleccionado.",
    ],
    fields: ["COMBUSTIBLE", "SEGURO", "MANTENIMIENTO", "KM VACÍO", "COSTES OPERATIVOS"],
  },

  howItWorks: [
    { label: "VIAJE + COSTES", description: "Se introducen precio, distancia, peso, km en vacío y extras." },
    { label: "MODELO DE COSTES", description: "Un modelo estándar o personalizado aplica tarifas específicas del sector." },
    { label: "RENTABILIDAD", description: "Se calculan beneficio neto y margen con un desglose completo." },
    { label: "ACEPTAR / RECHAZAR", description: "El transportista decide con números, no con suposiciones." },
  ],

  userFlowHeading: "De la oferta a la decisión.",
  userFlowNote: "Modelo freemium: tres cálculos gratuitos antes de la suscripción. El usuario siempre toma la decisión final.",
  userFlow: [
    { step: "1", title: "INTRODUCIR", description: "Introducir precio del viaje, km, peso, km en vacío y costes extra." },
    { step: "2", title: "CALCULAR", description: "El sistema aplica el modelo de costes estándar o aprobado." },
    { step: "3", title: "REVISAR", description: "Ver beneficio neto, margen % y desglose de costes." },
    { step: "4", title: "DECIDIR", description: "Aceptar o rechazar el viaje con visibilidad completa." },
    { step: "5", title: "REGISTRAR", description: "Los suscriptores guardan viajes y revisan totales en un periodo." },
  ],

  evidencePlaceholders: [
    "Captura — calculadora de rentabilidad",
    "Captura — desglose de costes",
    "Captura — registro de viajes",
    "Captura — panel de control",
  ],

  builtWith: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "Resend"],

  role: [
    "Análisis del problema de negocio",
    "Diseño de producto",
    "Diseño del modelo de costes",
    "Desarrollo Next.js",
    "Integración PostgreSQL / Supabase",
    "Diseño freemium y suscripción",
    "UX para usuarios mobile-first",
    "Pruebas e iteración",
  ],

  demonstrates: [
    { title: "PARTIR DE EXPERIENCIA REAL", description: "Nacido del conocimiento directo de cómo deciden los profesionales del transporte." },
    { title: "CUANTIFICAR DECISIONES", description: "Sustituir el instinto por un cálculo de rentabilidad estructurado." },
    { title: "CONSTRUIR SAAS DESDE UN PROBLEMA", description: "Un producto modelado en torno a una pregunta recurrente de negocio." },
    { title: "DISEÑAR MODELOS DE COSTES", description: "Modelos estándar y personalizados por peso, distancia y tipo de operación." },
    { title: "DE FREEMIUM A SUSCRIPCIÓN", description: "Tres usos gratuitos, luego suscripción para acceso ilimitado e historial de viajes." },
    { title: "LANZAR UN PRODUCTO FUNCIONAL", description: "Desplegado online con autenticación real, base de datos y recuperación de email." },
  ],

  statusNote:
    "Producto funcional desplegado en Vercel. Diseñado como SaaS por suscripción.",

  cta: {
    heading: "¿Aceptas viajes por instinto?",
    quoteLines: [
      "Quizá la decisión necesita números,",
      "no suposiciones.",
    ],
  },

  navigation: {
    previous: { href: "/work/real-estate-automation", label: "Automatización Inmobiliaria" },
    next: { href: "/work/lead-intelligence", label: "Lead Intelligence" },
  },
};
