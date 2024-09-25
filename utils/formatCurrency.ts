/**
 * Formata um número para o formato de moeda especificado
 * @param {number} value - O valor a ser formatado
 * @param {string} [locale='pt-BR'] - O código de localização (por exemplo, 'en-US', 'de-DE')
 * @param {string} [currency='BRL'] - O código da moeda (por exemplo, 'USD', 'EUR')
 * @returns {string} O valor formatado como moeda
 */
export function formatCurrency(
  value: number,
  locale: string = "pt-BR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
