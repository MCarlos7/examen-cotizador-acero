# Examen práctico — Cotizador de acero

Este es un pequeño programa que calcula el peso y el precio de un paquete de perfiles de acero (columnas, trabes, largueros, etc.). **Hoy está fallando** y tu tarea es arreglarlo siguiendo un flujo de trabajo normal con Git y GitHub.

Puedes usar cualquier herramienta: Google, documentación, ChatGPT, Claude, Copilot… Lo importante es que entiendas y puedas explicar lo que hiciste.

## Requisitos

- Git
- Node.js 18 o superior (compruébalo con `node -v`)
- Una cuenta de GitHub

No hace falta instalar dependencias: el proyecto no usa ninguna.

## Tu tarea

1. Haz un **fork** de este repositorio a tu cuenta y **clónalo** en tu computadora. (Si te agregaron como colaborador, puedes clonar este repositorio directamente.)
2. Crea una **branch** llamada `fix/<tu-nombre>` (por ejemplo `fix/ana-lopez`) y trabaja en ella.
3. Ejecuta el programa con `npm start`. Verás un error.
4. Encuentra el error y corrígelo. Vuelve a ejecutar `npm start` hasta que la cotización se imprima completa.
5. Haz **commit** de tu corrección con un mensaje descriptivo.
6. Sube tu branch a GitHub y abre un **Pull Request** hacia la rama `main` de este repositorio.
7. En la descripción del Pull Request explica, con tus palabras:
   - ¿En qué archivo y en qué línea estaba el error?
   - ¿Por qué fallaba el programa?
   - ¿Qué cambiaste para corregirlo?

## Bonus (opcional)

Ejecuta las pruebas con `npm test`. Hay pruebas que fallan por un **segundo error**, distinto al primero. Corrígelo en la misma branch (en otro commit) y vuelve a subir tus cambios: el Pull Request se actualiza solo.

## Estructura del proyecto

```
src/catalogo.js    Catálogo de perfiles y su peso por metro
src/cotizador.js   Cálculo de peso, subtotal, IVA y total
src/utils.js       Funciones de formato (moneda, kilogramos)
src/index.js       Programa principal: arma un paquete de ejemplo y lo cotiza
test/              Pruebas automáticas (npm test)
```

Tiempo sugerido: 20 a 30 minutos.
