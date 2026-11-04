// Catálogo mínimo de perfiles con su peso nominal en kg/m.
// Los valores son aproximados y sirven únicamente para este ejercicio.
export const CATALOGO = {
  "IPR 203x19.4": 19.4,
  "IPR 254x22.3": 22.3,
  "IPR 305x28.3": 28.3,
  "PTR 4x4 cal. 11": 9.2,
  "PTR 2x2 cal. 14": 2.9,
  "Canal CPS 6\"": 12.2,
  "Ángulo 2x1/4": 4.75,
};

/**
 * Devuelve el peso por metro (kg/m) de un perfil del catálogo.
 * Lanza un error si el perfil no existe.
 */
export function pesoPorMetro(perfil) {
  const peso = CATALOGO[perfil];
  if (peso === undefined) {
    throw new Error(`Perfil no encontrado en el catálogo: ${perfil}`);
  }
  return peso;
}
