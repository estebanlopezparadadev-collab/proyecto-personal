// ⚠️ Reemplaza este número por el número de WhatsApp real de Julian
// (código de país + número, sin espacios ni "+"). Es el ÚNICO lugar
// del proyecto donde hay que cambiarlo.
export const WHATSAPP_NUMBER = "573126329466";

export const WHATSAPP_MESSAGE =
  "Hola Julian, vi tu página y quiero la revisión gratis de mi sitio web";

export function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
