import type { PrivacyContent } from "@/i18n/types/privacy";

export const privacyEs: PrivacyContent = {
  metaDescription:
    "Aviso legal, privacidad y cookies del portfolio de Israel Santos López.",
  title: "Aviso legal y privacidad",
  updated: "Última actualización: octubre 2026",
  sections: [
    {
      heading: "Aviso legal",
      paragraphs: [
        "Titular del sitio: Israel Santos López.",
        "Email de contacto: isra31987@gmail.com · Teléfono: +34 677 230 612 · Ubicación: Gandía (Valencia), España.",
        "Sitio web: https://israel-santos.vercel.app — portfolio personal con fines informativos y profesionales (no es una tienda ni un servicio de pago).",
        "El contenido del sitio (textos, diseño y materiales propios) pertenece a su titular, salvo indicación en contrario. Queda prohibida su reproducción no autorizada con fines comerciales.",
      ],
    },
    {
      heading: "Responsable del tratamiento",
      paragraphs: [
        "Israel Santos López — isra31987@gmail.com.",
        "Trato los datos de forma limitada y solo para gestionar contacto profesional, citas y el funcionamiento del sitio.",
      ],
    },
    {
      heading: "Qué datos se recogen y para qué",
      paragraphs: [
        "Formulario de contacto: nombre, email y mensaje. Se usan para responderte. No los guardo en una base de datos propia: se envían por email mediante Web3Forms (y, si se configurara, Resend).",
        "WhatsApp: si eliges ese canal, se abre WhatsApp con el texto preparado; tú confirmas el envío. Se aplica la política de Meta/WhatsApp.",
        "Chatbot de reclutamiento: si escribes en el chat, el mensaje se envía a la API de Google Gemini para generar una respuesta sobre mi perfil profesional. No uses el chat para datos sensibles. El historial no se almacena en una base de datos mía.",
        "Agenda (Cal.com): si reservas una entrevista o reunión, Cal.com trata los datos necesarios para la cita (nombre, email, franja horaria, etc.) según su propia política de privacidad.",
        "Analítica: Vercel Web Analytics recoge métricas de uso agregadas/privacidad-friendly (visitas, páginas) en el hosting del sitio. No requiere el banner de cookies de terceros.",
        "Enlaces de candidatura: si abres una URL con un código de seguimiento (?ref=…), puedo recibir un aviso por email de que la página se ha visitado. No te identifica personalmente; solo registra el código, la fecha y datos técnicos básicos del navegador. En la misma pestaña no se repite el aviso.",
        "Si en el futuro se activan Google Analytics 4 o Microsoft Clarity (variables de entorno), solo se cargarán tras aceptar el banner de cookies analíticas.",
      ],
    },
    {
      heading: "Base legal y conservación",
      paragraphs: [
        "Interés legítimo / medidas precontractuales al atender consultas profesionales, y consentimiento cuando uses el chat, reserves en Cal.com o aceptes cookies analíticas opcionales.",
        "Los mensajes del formulario y los avisos de visita con ?ref= llegan a mi email y se conservan el tiempo necesario para gestionar la conversación o la candidatura. Los datos de citas los gestiona Cal.com. Las métricas de Vercel se tratan según su plataforma.",
      ],
    },
    {
      heading: "Destinatarios / proveedores",
      paragraphs: [
        "Hosting y analítica: Vercel.",
        "Formulario y avisos de visita (?ref=): Web3Forms (y opcionalmente Resend).",
        "Chat: Google (Gemini API).",
        "Citas: Cal.com (https://cal.com).",
        "WhatsApp: Meta Platforms, si eliges ese canal.",
        "Estos proveedores pueden tratar datos fuera de España/UE según sus condiciones; se usan solo para las finalidades descritas.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Cookie técnica de idioma (preferencia ES/EN) para recordar tu elección.",
        "sessionStorage del navegador puede guardar temporalmente que ya se envió un aviso de visita (?ref=) en esa pestaña, para no repetirlo.",
        "Vercel Web Analytics no depende de cookies de publicidad de terceros.",
        "Si se activan GA4 o Clarity, sus cookies/scripts analíticos solo se cargan si aceptas el banner. Puedes rechazarlos y seguir navegando.",
      ],
    },
    {
      heading: "Tus derechos",
      paragraphs: [
        "Puedes solicitar acceso, rectificación, supresión, limitación u oposición escribiendo a isra31987@gmail.com.",
        "También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si lo consideras necesario.",
        "Para retirar consentimiento de cookies analíticas opcionales, borra las cookies del navegador o vuelve a rechazarlas si aparece el banner.",
      ],
    },
  ],
};
