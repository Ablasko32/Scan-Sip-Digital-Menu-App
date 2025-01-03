const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL;

export default function formatPrice(price) {
  return `${parseFloat(price).toFixed(2)}${currencySymbol}`;
}
