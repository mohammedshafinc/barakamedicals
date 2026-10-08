export const WHATSAPP_NUMBER = '97433931435';
export const WHATSAPP_DISPLAY = '+974 3393 1435';

export const buildWhatsAppUrl = (message = '') => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
