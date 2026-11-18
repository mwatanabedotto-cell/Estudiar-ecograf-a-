/* Registro de contenido de Sonoaula.
   Cada archivo de curso llama a ECO.curso({...}). Formato:
   {
     id: 'bases',                 // identificador corto, sin guiones
     codigo, titulo, corto, resumen,
     criterios: [{ id, peso, pesoEstimado?, titulo, descripcion, temas: [{ titulo, html, fuente? }] }],
     tarjetas:  [[criterioId, 'pregunta (frente)', 'respuesta (reverso)'], ...],
     preguntas: [{ c: criterioId, q: 'enunciado', o: ['A','B','C','D'], a: índiceCorrecto, e: 'explicación', caso?: true }],
     glosario:  [['Término', 'definición'], ...],
     fuentes:   [{ titulo, autor }]   // libros del curso ya integrados
   }
   El progreso de cada tarjeta/pregunta se asocia al texto del frente/enunciado:
   si se corrige una errata, esa tarjeta reinicia su progreso. */
window.ECO = window.ECO || { cursos: [] };
window.ECO.curso = function (c) { window.ECO.cursos.push(c); };
window.ECO.referencias = [
  { titulo: 'Diagnóstico por ecografía', autor: 'Rumack, Wilson, Charboneau, Levine', uso: 'Tratado de referencia: abdomen, retroperitoneo, vasos, pediatría.' },
  { titulo: 'Sonography Principles and Instruments', autor: 'Frederick W. Kremkau', uso: 'Física del ultrasonido, transductores, Doppler, artefactos y bioefectos.' },
  { titulo: 'Textbook of Diagnostic Sonography', autor: 'Sandra L. Hagen-Ansert', uso: 'Técnica de exploración por órgano, anatomía y patrones ecográficos.' },
  { titulo: 'Ecografía (serie Radiología Clínica: los requisitos)', autor: 'Middleton, Kurtz, Hertzberg', uso: 'Síntesis práctica de patología abdominal para repaso.' },
  { titulo: 'Ecografía abdominal', autor: 'Matthias Hofer', uso: 'Manual de técnica paso a paso, planos estándar y medidas normales.' }
];
