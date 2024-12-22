const currencySymbol = "€";

export default function formatPrice(price) {
  return `${parseFloat(price).toFixed(2)}${currencySymbol}`;
}
