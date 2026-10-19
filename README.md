# Exámenes de Derecho Laboral

Web estática para Vercel: 3 exámenes de 20 preguntas (60 preguntas en total), mezclado independiente de preguntas y opciones en cada intento, navegación, nota y corrección explicada.

## Publicación en Vercel

1. Descomprimí el ZIP.
2. Subí la carpeta `examenes-derecho-laboral` a un repositorio de GitHub.
3. En https://vercel.com/new importá el repositorio.
4. Elegí **Framework Preset: Other**, **Root Directory: .**, dejá **Build Command** vacío y publicá con **Deploy**.

No requiere npm, base de datos, backend ni claves. También funciona abriendo `index.html` localmente.

## Cambiar preguntas

Editá `questions.js`. La primera opción de cada pregunta es la correcta en el archivo; la aplicación las mezcla en pantalla automáticamente. Se incluyen explicaciones breves.

**Nota académica:** los contenidos se basan en los cuatro apuntes aportados; los apuntes tienen referencias de diferentes versiones normativas y diferencias de cálculo. Este material no es asesoramiento jurídico ni una actualización de legislación.
