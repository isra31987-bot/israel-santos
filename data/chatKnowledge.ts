/**
 * Fuente de verdad del chatbot de reclutamiento.
 * Solo datos verificables del portfolio/CV — el modelo no debe inventar fuera de esto.
 */

export const CHAT_KNOWLEDGE = `
# Perfil — Israel Santos López

## Identidad
- Nombre: Israel Santos López
- Título: Analista de Negocio y Transformación Digital
- Marca: Business × Technology
- Ubicación: Gandía (Valencia), España
- Email de contacto: isra31987@gmail.com
- Teléfono: 677 230 612
- Idiomas: Español (nativo), Inglés (B1)
- Formación: Licenciado en Economía (Universidad de Castilla-La Mancha); Máster en Comercio Internacional; Especialista en Programación con IA (Racks Academy)

## Propuesta de valor
- Convierte problemas empresariales en soluciones digitales.
- Combina experiencia real en operaciones (logística, administración) con capacidad para diseñar y prototipar con IA, automatización y tecnologías actuales.
- Enfoque: entender el negocio → mapear el proceso → identificar fricción → diseñar → construir.
- Busca roles: Business Analysis, Transformación Digital, Mejora de Procesos, Automatización, Operations Technology, IA aplicada al negocio.

## Experiencia operativa
- Logística y operaciones (2014–2026): empresa de transporte y logística en España.
  Administración, operaciones, gestión documental, facturación, proveedores/clientes, stock, seguros, CRM/Excel/Sheets, detección de tareas repetitivas.
- Amazon e-commerce (proyecto independiente, España e Italia):
  Producto, sourcing, FBA, listings, keywords, PPC, Helium 10, análisis de rendimiento.

## Proyectos digitales (portfolio)
1) Document Intelligence — Python, IA, OCR, Excel.
   Extrae datos de tickets de tacógrafo (matrícula, bastidor, fecha, modelo), los estructura y los lleva a Excel; informes diarios y control de stock de vehículos.
2) Automatización inmobiliaria (InmoFlow) — Supabase, SQL, n8n, Gemini, Meta, APIs.
   Prototipo funcional: inbox IA, inventario, rastreador de portales, embudo Kanban, generación de documentos con plantillas del cliente.
3) Logicalc — Next.js, React, Node.js, SQL, Supabase.
   Calcula rentabilidad de viajes para autónomos del transporte (combustible, seguros, mantenimiento).
4) Lead Intelligence — datos de Instagram, automatización, análisis.
   Identifica leads potenciales analizando seguidores de cuentas relevantes.

## Stack / herramientas
- IA y automatización: IA, Prompt Engineering, n8n, APIs, automatización de flujos
- Desarrollo: Python, JavaScript, TypeScript, React, Next.js, Node.js
- Front-end: HTML5, CSS3, interfaces responsive (apps y portfolio web)
- Datos: SQL, Supabase, MongoDB (proyectos personales), Excel, Google Sheets
- Herramientas: Git / GitHub, Cursor, Helium 10

## Encaje con roles Full Stack / desarrollo web (p. ej. ecosistema MERN)
Usar esto cuando pregunten si encaja en un puesto Full Stack Developer, MERN, React/Node, etc.
- Imprescindibles que SÍ cubre: JavaScript y TypeScript; React.js; Node.js; desarrollo web front y back en proyectos propios; Git; HTML/CSS/responsive; trabajar en equipo y de forma autónoma; orientación a resolución de problemas; interés por nuevas tecnologías y aprendizaje continuo.
- Experiencia práctica full stack: ha construido aplicaciones web de extremo a extremo (p. ej. Logicalc con Next.js/React/Node/SQL/Supabase; InmoFlow con front, APIs, base de datos y automatizaciones).
- APIs y backend: diseña e integra APIs y servicios (REST/webhooks, Supabase, n8n); documenta y mantiene lo que construye.
- MongoDB: experiencia real en proyectos personales (modelado de documentos, consultas, integración con backends Node). Se desenvuelve con NoSQL y también con SQL/Supabase según el proyecto. Encaja bien en un stack MERN en la parte de datos.
- Express.js: no se presenta como experto Express documentado; backends con Node.js / Next.js y servicios conectados. Interés y capacidad para adoptar Express en un equipo MERN.
- Docker, CI/CD, testing formal, Azure/AWS/GCP, microservicios: no figuran como experiencia consolidada en el CV. Interés genuino y disposición a formarse en el puesto.
- Metodologías ágiles: acostumbrado a iterar, priorizar y flujos tipo Kanban en proyectos; no reclamar certificación Scrum.
- Posicionamiento honesto: no es un “senior MERN puro”. Es un perfil Business × Technology con capacidad real de desarrollar full stack, aportar visión de negocio al equipo de desarrollo y crecer técnicamente en un entorno colaborativo.
- Formación mínima de muchas ofertas (CFGS): su formación reglada es universitaria (Economía + máster) más especialización en programación con IA; no inventar un ciclo formativo si no lo tiene.

## Capacidades
Analizar procesos, diseñar soluciones, automatizar, construir prototipos, conectar datos, aplicar IA donde aporta valor real.
Participar en el ciclo de vida de una solución: análisis, diseño, construcción, puesta en marcha y mejora continua.

## Trabajo en equipo
- Facilidad de adaptación a distintos entornos y formas de trabajar.
- Se integra con facilidad en un equipo de trabajo.
- Puede trabajar de forma autónoma y también colaborar con perfiles multidisciplinares (negocio, diseño, desarrollo).
- Colabora de forma práctica entre perfiles de negocio y tecnología.
- Abierto a revisiones de código, buenas prácticas y mejora continua.

## Condiciones y logística (para reclutadores)
- Disponibilidad de incorporación: Disponible para incorporar de forma inmediata o con un preaviso breve, según se acuerde con la empresa.
- Vehículo propio: Sí, dispone de vehículo propio.
- Carnet de conducir: Sí, carnet B.
- Preferencia de jornada: Preferencia por jornada completa. Abierto a valorar otras modalidades si el rol lo requiere.
- Modalidad de trabajo: Abierto a presencial o híbrido (zona Gandía / Valencia). Remoto a valorar según la oferta.
- Traslados / movilidad: Puede desplazarse en la provincia de Valencia y alrededores cuando el puesto lo requiera.
- Relación laboral preferida: Contrato por cuenta ajena. Otros formatos (autónomo, proyecto) se pueden valorar.
- Remuneración: A convenir según responsabilidades y encaje; no hay cifra publicada — invitar a hablarlo por email o entrevista.
- Viajes: Dispuesto a viajes puntuales relacionados con el puesto.

## Notas
- Abierto a oportunidades alineadas con negocio × tecnología.
- No inventar clientes, métricas, empleadores concretos ni resultados no listados aquí.
- Si falta un detalle concreto, decirlo y redirigir a isra31987@gmail.com.
`.trim();
