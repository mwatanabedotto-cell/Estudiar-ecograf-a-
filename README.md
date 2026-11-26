# Sonoaula — plataforma de estudio de ecografía

Plataforma personal para estudiar los cuatro cursos del posgrado de ecografía (gestión 2026),
organizada según los **criterios de evaluación y sus pesos**:

| Curso | Código | Contenido |
|---|---|---|
| Bases Generales en Ecografía | 520092C | Términos (25 %), física y modos (25 %), técnica y manejo del equipo (10 %), transductores (20 %), aplicaciones clínicas (20 %) |
| Ecografía Abdominal I | 749948A | Hígado, vías biliares y páncreas* |
| Ecografía Abdominal II | 9329289 | Riñón, suprarrenales y bazo |
| Ecografía Abdominal III | A518615 | Peritoneo, retroperitoneo, tubo digestivo y vasos |

Abdominal II y III: técnica 10 %, anatomía normal 20 %, patrones patológicos 40 %, correlación clínica 30 %.
\*En Abdominal I los porcentajes no se veían en la captura; se asumieron iguales (marcados como «estimado»).

## Libros en los que se basa

- **Bates J.** *Ecografía abdominal: cómo, por qué y cuándo*, 3.ª ed. Elsevier España, 2012 (citado como «Bates», con capítulo y página).
- **Rodríguez L.** *El ABC de la ecografía abdominal*, 1.ª ed. RayosPedia (citado como «ABC», con página).

Cada tema, tarjeta y pregunta indica de qué libro y página sale. Los pocos datos que no están en los libros
se marcan como «complemento» o «dato general». Cuando los dos libros dan cifras distintas (p. ej., pared
vesicular < 2 mm en Bates y < 3 mm en el ABC), se muestran ambas.

## Imágenes

- **Esquemas anatómicos propios** (`contenido/diagramas.js`, SVG): orientación, artefactos, ondas Doppler, Couinaud,
  porta hepatis, páncreas y sus vasos, niveles de obstrucción biliar, riñón, hidronefrosis, suprarrenales, aorta,
  pared intestinal, FAST y medición del aneurisma.
- **Figuras de los libros** (`contenido/figuras-libro.js`): solo pies y citas. Las imágenes tienen derechos de autor y
  **no se guardan en este repositorio público**. En esta versión cada figura aparece como «Ver libro, fig., página».
  La versión privada (artifact) las incluye; se genera con
  `node scripts/construir.mjs --imagenes <carpeta> --salida <archivo fuera del repo>`.
- **Atlas de imágenes**: todas las figuras y esquemas agrupados por curso.

## Qué incluye

- **Temario** por criterio, con tablas, perlas clínicas y espacio para notas propias.
- **Tarjetas** con repetición espaciada (Otra vez / Difícil / Bien / Fácil).
- **Preguntas** de opción múltiple y casos clínicos con explicación.
- **Simulacro** con preguntas repartidas según el peso de cada criterio y nota ponderada sobre 100.
- Menú en **barra lateral** (desplegable en el móvil) y tema oscuro.
- **Repaso del día** de los cuatro cursos, **glosario** con buscador y **biblioteca** de fuentes.
- El progreso se guarda en el navegador; se puede copiar y restaurar en otro dispositivo.

## Cómo abrirla

- Abrir `dist/sonoaula.html` (archivo único, funciona sin internet salvo las fuentes tipográficas), o
- Abrir `index.html`, o publicarla con GitHub Pages (Settings → Pages → rama y carpeta raíz).

## Cómo agregar contenido (libros de referencia)

Cada curso está en `contenido/<curso>.js`. El formato está documentado en `contenido/registro.js`:
temas (`html` + `fuente`), tarjetas `[criterio, frente, reverso]`, preguntas `{c, q, o, a, e, caso}`,
glosario. Las tarjetas aceptan un 4.º elemento con la fuente y las preguntas un campo `f`.

Después de editar, regenerar el archivo único:

```bash
node scripts/construir.mjs
```
