// ⚠️ Reemplaza este número por el número de WhatsApp real de Esteban
// (código de país + número, sin espacios ni "+"). Es el ÚNICO lugar
// del proyecto donde hay que cambiarlo.
export const WHATSAPP_NUMBER = "573126329466";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
