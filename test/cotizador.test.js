import { test } from "node:test";
import assert from "node:assert/strict";

import { pesoPorMetro } from "../src/catalogo.js";
import { pesoPieza, cotizar } from "../src/cotizador.js";

test("el catálogo devuelve el peso por metro de un perfil conocido", () => {
  assert.equal(pesoPorMetro("IPR 203x19.4"), 19.4);
});

test("el catálogo lanza un error con un perfil desconocido", () => {
  assert.throws(() => pesoPorMetro("IPR 999x1"), /no encontrado/);
});

test("pesoPieza convierte la longitud de milímetros a metros", () => {
  // 19.4 kg/m × 6 m × 2 piezas = 232.8 kg
  const peso = pesoPieza({ perfil: "IPR 203x19.4", longitudMm: 6000, cantidad: 2 });
  assert.ok(Math.abs(peso - 232.8) < 0.01, `se esperaban 232.8 kg y se obtuvieron ${peso} kg`);
});

test("cotizar suma el peso de todas las piezas y aplica IVA del 16%", () => {
  const piezas = [
    { perfil: "IPR 203x19.4", longitudMm: 1000, cantidad: 1 }, // 19.4 kg
    { perfil: "PTR 2x2 cal. 14", longitudMm: 2000, cantidad: 5 }, // 29.0 kg
  ];
  const c = cotizar(piezas, 10); // $10/kg para simplificar las cuentas

  assert.ok(Math.abs(c.pesoTotal - 48.4) < 0.01, `pesoTotal: ${c.pesoTotal}`);
  assert.ok(Math.abs(c.subtotal - 484) < 0.01, `subtotal: ${c.subtotal}`);
  assert.ok(Math.abs(c.iva - 77.44) < 0.01, `iva: ${c.iva}`);
  assert.ok(Math.abs(c.total - 561.44) < 0.01, `total: ${c.total}`);
});
