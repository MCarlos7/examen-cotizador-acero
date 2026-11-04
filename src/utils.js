/** Da formato de moneda mexicana a una cantidad, p. ej. $12,345.67 */
export function formatearMXN(cantidad) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(cantidad);
}

/** Da formato a un peso en kilogramos con dos decimales. */
export function formatearKg(kg) {
  return `${kg.toFixed(2)} kg`;
}
