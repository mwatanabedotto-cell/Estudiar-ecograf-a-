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

## Qué incluye

- **Temario** por criterio, con tablas, perlas clínicas y espacio para notas propias.
- **Tarjetas** con repetición espaciada (Otra vez / Difícil / Bien / Fácil).
- **Preguntas** de opción múltiple y casos clínicos con explicación.
- **Simulacro** con preguntas repartidas según el peso de cada criterio y nota ponderada sobre 100.
- **Repaso del día** de los cuatro cursos, **glosario** con buscador y **biblioteca** de fuentes.
- El progreso se guarda en el navegador; se puede copiar y restaurar en otro dispositivo.

## Cómo abrirla

- Abrir `dist/sonoaula.html` (archivo único, funciona sin internet salvo las fuentes tipográficas), o
- Abrir `index.html`, o publicarla con GitHub Pages (Settings → Pages → rama y carpeta raíz).

## Cómo agregar contenido (libros de referencia)

Cada curso está en `contenido/<curso>.js`. El formato está documentado en `contenido/registro.js`:
temas (`html` + `fuente`), tarjetas `[criterio, frente, reverso]`, preguntas `{c, q, o, a, e, caso}`,
glosario y `fuentes` (los libros integrados aparecen en la Biblioteca).

Después de editar, regenerar el archivo único:

```bash
node scripts/construir.mjs
```
