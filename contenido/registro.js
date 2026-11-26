/* Registro de contenido de Sonoaula.
   Cada archivo de curso llama a ECO.curso({...}). Formato:
   {
     id: 'bases',                 // identificador corto, sin guiones
     codigo, titulo, corto, resumen,
     criterios: [{ id, peso, pesoEstimado?, titulo, descripcion, temas: [{ titulo, html, fuente? }] }],
     tarjetas:  [[criterioId, 'pregunta (frente)', 'respuesta (reverso)'], ...],
     preguntas: [{ c: criterioId, q: 'enunciado', o: ['A','B','C','D'], a: índiceCorrecto, e: 'explicación', caso?: true }],
     glosario:  [['Término', 'definición'], ...],
     tarjetas pueden llevar un 4.º elemento con la fuente; preguntas, el campo f: 'Bates, cap. 3, p. 60'
   }
   El progreso de cada tarjeta/pregunta se asocia al texto del frente/enunciado:
   si se corrige una errata, esa tarjeta reinicia su progreso. */
window.ECO = window.ECO || { cursos: [] };
window.ECO.curso = function (c) { window.ECO.cursos.push(c); };
/* Libros del curso (fuente principal del contenido). Las citas usan las claves cortas «Bates» y «ABC». */
window.ECO.libros = [
  { id: 'bates', corto: 'Bates', titulo: 'Ecografía abdominal: cómo, por qué y cuándo (3.ª ed.)', autor: 'Jane Bates · Elsevier España, 2012', detalle: '11 capítulos: optimización y seguridad, hepatobiliar, páncreas, bazo y linfático, vías renales, retroperitoneo y tubo digestivo, pediatría, abdomen agudo e intervencionismo.' },
  { id: 'abc', corto: 'ABC', titulo: 'El ABC de la ecografía abdominal (1.ª ed.)', autor: 'Dr. Lorenz Rodríguez · RayosPedia', detalle: 'Generalidades, hígado y vía biliar, páncreas, bazo, riñón y vejiga, tubo digestivo, próstata y ginecología.' }
];
window.ECO.referencias = [
  { titulo: 'Diagnóstico por ecografía', autor: 'Rumack, Wilson, Charboneau, Levine', uso: 'Tratado de referencia: abdomen, retroperitoneo, vasos, pediatría.' },
  { titulo: 'Sonography Principles and Instruments', autor: 'Frederick W. Kremkau', uso: 'Física del ultrasonido, transductores, Doppler, artefactos y bioefectos.' },
  { titulo: 'Textbook of Diagnostic Sonography', autor: 'Sandra L. Hagen-Ansert', uso: 'Técnica de exploración por órgano, anatomía y patrones ecográficos.' },
  { titulo: 'Ecografía (serie Radiología Clínica: los requisitos)', autor: 'Middleton, Kurtz, Hertzberg', uso: 'Síntesis práctica de patología abdominal para repaso.' },
  { titulo: 'Ecografía abdominal', autor: 'Matthias Hofer', uso: 'Manual de técnica paso a paso, planos estándar y medidas normales.' }
];
