ECO.curso({
  id: 'bases',
  codigo: '520092C',
  titulo: 'Bases Generales en Ecografía',
  corto: 'Bases',
  resumen: 'Terminología, física del ultrasonido, manejo y optimización del equipo, transductores, seguridad y aplicaciones clínicas.',
  criterios: [
    {
      id: 'b1', peso: 25, titulo: 'Términos y conceptos básicos',
      descripcion: 'Describe los términos y conceptos básicos relacionados con la ecografía.',
      temas: [
        {
          titulo: 'Ecogenicidad: el lenguaje del blanco y negro',
          fuente: 'ABC, pp. 7–8',
          html: `
<p>La <b>ecogenicidad</b> es la capacidad de un tejido de reflejar el ultrasonido y, por tanto, cómo se ve en la pantalla. Depende de la densidad y composición del tejido: las ondas pueden rebotar mucho, poco o nada. Así como en TC se dice hiperdenso/hipodenso y en RM hiperintenso/hipointenso, en ecografía se dice <b>hiperecoico/hipoecoico</b>.</p>
<figure class="fig"><svg viewBox="0 0 520 92" role="img" aria-label="Escala de ecogenicidad de anecoico a hiperecoico">
<defs><linearGradient id="gEco" x1="0" x2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>
<rect x="10" y="10" width="500" height="34" rx="4" fill="url(#gEco)" stroke="#888"/>
<g font-family="JetBrains Mono, monospace" font-size="12" fill="currentColor" text-anchor="middle">
<text x="40" y="66">Anecoico</text><text x="170" y="66">Hipoecoico</text><text x="300" y="66">Isoecoico</text><text x="440" y="66">Hiperecoico</text>
<text x="40" y="84" fill="#8d9ea8">sangre, orina</text><text x="170" y="84" fill="#8d9ea8">gris oscuro</text><text x="300" y="84" fill="#8d9ea8">= vecino</text><text x="440" y="84" fill="#8d9ea8">hueso, cálculos</text></g></svg>
<figcaption>Negro = no hay eco de vuelta; blanco = reflexión intensa.</figcaption></figure>
<ul>
<li><b>Anecoico</b> (negro): casi no refleja; el sonido atraviesa el líquido sin rebotar. Ejemplos: sangre, orina en la vejiga, quistes.</li>
<li><b>Hipoecoico</b> (gris oscuro): refleja algunas ondas, pero menos que los tejidos que lo rodean.</li>
<li><b>Isoecoico</b>: ecogenicidad similar a la de los tejidos circundantes (lesiones difíciles de ver).</li>
<li><b>Hiperecoico</b> (blanco/muy claro): tejidos densos que reflejan mucho: hueso, cálculos renales o biliares, tejido fibroso.</li>
</ul>
<h4>Cómo describir una lesión</h4>
<p>Localización, tamaño en 3 ejes, forma, bordes, ecogenicidad (comparada con el órgano), homogeneidad, efecto posterior (sombra o refuerzo) y vascularización Doppler.</p>
<div class="perla"><b>Perla</b>«Hipoecoico» no es «quístico». Antes de llamar quiste a una lesión busca los tres criterios: anecoica, bordes bien definidos y refuerzo posterior; y comprueba con Doppler que no tiene flujo (ABC, p. 16).</div>`
        },
        {
          titulo: 'Orientación en la imagen',
          fuente: 'ABC, p. 9',
          html: `
<ul>
<li><b>Arriba = superficial, abajo = profundo.</b> Esto nunca cambia: la parte superior de la imagen es lo más cercano al transductor (piel, grasa subcutánea, músculo); la inferior, lo más profundo (hígado, riñones, páncreas, cuerpo vertebral).</li>
<li>Los <b>laterales</b> dependen de cómo se coloque el transductor: la <b>marca</b> de un extremo del transductor corresponde a la marca de la pantalla.</li>
<li><b>Transversal</b>: marca hacia la <b>derecha del paciente</b> → el lado de la marca en pantalla es la derecha del paciente.</li>
<li><b>Longitudinal</b>: marca hacia la <b>cabeza</b> → en la parte izquierda de la pantalla (donde está la marca) se ve lo cefálico y del otro lado lo caudal.</li>
<li>La TC da tres planos (axial, sagital, coronal); el transductor es como una «sierra» que puede cortar en casi cualquier ángulo, pero los órganos se evalúan, en general, en planos <b>transversal y longitudinal</b>.</li>
</ul>`
        },
        {
          titulo: 'Artefactos: los tres esenciales y otros',
          fuente: 'ABC, p. 8; Bates, cap. 1, pp. 11–12',
          html: `
<p>Todas las técnicas de imagen tienen artefactos propios. Si los conocemos, los usamos a nuestro favor. Según el ABC, los <b>tres más importantes</b> y frecuentes son:</p>
<ul>
<li><b>Sombra acústica posterior</b>: los ecos chocan con una interfase muy reflectante que no los deja pasar → zona negra detrás de una estructura hiperecoica. Típica de la <b>litiasis biliar o renal</b>.</li>
<li><b>Refuerzo (reforzamiento) acústico posterior</b>: el ultrasonido atraviesa un medio sin interfases (líquido) y llega a un medio sólido. Permite reconocer <b>quistes, vejiga, abscesos</b>.</li>
<li><b>Reverberación</b>: rebotes entre dos superficies de alta impedancia → líneas paralelas repetidas. Frecuente con aire, capas de tejido o al interponer una <b>aguja o catéter</b>.</li>
</ul>
<div class="tabla"><table><thead><tr><th>Otros artefactos</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Cola de cometa</td><td>Adenomiomatosis vesicular, metal</td></tr>
<tr><td>Imagen en espejo</td><td>Hígado «duplicado» sobre el diafragma</td></tr>
<tr><td>Sombra de borde (refracción)</td><td>Bordes de vesícula o quistes</td></tr>
<tr><td>Aliasing</td><td>Mosaico de color con FRP baja; puede simular inversión de flujo (Bates, fig. 1.10)</td></tr>
<tr><td>Centelleo (twinkling)</td><td>Litiasis renal en Doppler color</td></tr>
</tbody></table></div>
<p>Las <b>imágenes armónicas</b> reducen artefactos; las <b>imágenes combinadas</b> (compound) mejoran los bordes, pero pueden borrar artefactos útiles como la sombra de un cálculo (Bates, p. 12).</p>
<div class="perla"><b>Perla</b>Sombra <b>limpia</b> = cálculo o calcio. Sombra <b>sucia</b> con reverberación = gas.</div>`
        }
      ]
    },
    {
      id: 'b2', peso: 25, titulo: 'Principios físicos y modos de imagen',
      descripcion: 'Conoce los principios físicos subyacentes a la ecografía, la generación y propagación de ondas sonoras, la interacción de las ondas sonoras con los tejidos biológicos y los diferentes modos de imagen.',
      temas: [
        {
          titulo: 'Cómo se forma la imagen',
          fuente: 'ABC, p. 6 (ecuaciones: física general de ultrasonido)',
          html: `
<ul>
<li>El sonido es un fenómeno <b>mecánico</b> que viaja en ondas: requiere una fuente que vibre y un <b>medio</b>. La ecografía no usa radiación ionizante ni campos electromagnéticos.</li>
<li>Frecuencia = ondas que pasan por un punto en un segundo (Hz). Oído humano: <b>20 Hz – 20 kHz</b>. Por encima de 20 kHz: <b>ultrasonido</b>.</li>
<li>Los ecógrafos usan típicamente <b>2–18 MHz</b> (1 MHz = un millón de Hz).</li>
<li>Dentro del transductor hay un <b>cristal piezoeléctrico</b>: con corriente eléctrica vibra y emite ultrasonido; al recibir el eco hace lo inverso, lo convierte en señal eléctrica.</li>
</ul>
<h4>Los 4 pasos de la imagen (ABC)</h4>
<ol><li>Se envían ondas sonoras al cuerpo.</li><li>Se reciben los ecos que rebotan en los tejidos.</li><li>El cristal transforma los ecos (energía mecánica) en electricidad.</li><li>El equipo procesa la señal y la muestra en escala de grises.</li></ol>
<h4>Ecuaciones de apoyo</h4>
<ul>
<li><b>c = f × λ</b>; velocidad media en tejido blando <b>1540 m/s</b> (aire ≈ 330, hueso ≈ 4080).</li>
<li>Profundidad = (c × t)/2 → <b>13 µs por cm</b>.</li>
<li><b>Impedancia</b> Z = densidad × velocidad. Los ecos nacen en interfaces con distinta impedancia; tejido–aire refleja casi todo (por eso el <b>gel</b>).</li>
<li>Atenuación ≈ 0,5 dB/cm/MHz.</li>
</ul>`
        },
        {
          titulo: 'Frecuencia, resolución y penetración',
          fuente: 'ABC, p. 7; Bates, cap. 1, pp. 3–6',
          html: `
<p>Regla de oro: <b>a menor frecuencia, mayor penetración pero menor resolución; a mayor frecuencia, mayor resolución pero menor penetración</b>. Por eso los órganos abdominales profundos se ven con baja frecuencia y la piel, el tejido celular subcutáneo o los músculos con alta frecuencia.</p>
<ul>
<li>Bates (fig. 1.1): el mismo transductor a 2,7 MHz resuelve mal unos alambres de prueba que a 5,1 MHz se ven nítidos; un nódulo hepático visto a 5 MHz muestra más detalle a 7,5 MHz y aparece otro nódulo que antes no se veía.</li>
<li><b>Densidad lineal</b>: más líneas por imagen = imagen más nítida. Aumenta si se reduce la velocidad de cuadro, el ángulo del sector o la profundidad (fig. 1.2: un cálculo pequeño solo se ve al reducir el campo).</li>
<li><b>Zona focal</b>: mejora la resolución axial y lateral a esa profundidad; con el foco mal colocado, los cálculos pequeños pierden su sombra (fig. 1.3). Varias zonas focales mejoran la imagen a costa de la velocidad de cuadro.</li>
<li><b>Resolución axial</b>: depende de la longitud del pulso (mejora con alta frecuencia). <b>Lateral</b>: del ancho del haz (mejor en el foco; se deteriora en campo lejano por divergencia del haz, fig. 1.12).</li>
</ul>`
        },
        {
          titulo: 'Modos de imagen: A, M, B, Doppler y modalidades nuevas',
          fuente: 'ABC, p. 10; Bates, cap. 1, pp. 3–12',
          html: `
<p>El ecógrafo puede expresar los ecos en <b>modo A, modo M, modo B y modo Doppler</b>; en ecografía abdominal se usan sobre todo el <b>B y el Doppler</b> (ABC).</p>
<ul>
<li><b>Modo B</b>: imagen bidimensional en escala de grises, en tiempo real («TV sin señal»). Sirve para anatomía, movimiento de órganos, peristaltismo y para guiar biopsias o drenajes.</li>
<li><b>Doppler color</b>: detecta el cambio de frecuencia de las ondas que rebotan en los glóbulos rojos en movimiento. Rojo = hacia el transductor; azul = se aleja. <b>El rojo no es arteria ni el azul vena</b>, y los colores se pueden invertir en la configuración. Usar una <b>caja de color compacta</b>: cuanto más grande, menor velocidad de cuadro y peor imagen en grises (Bates).</li>
<li><b>Doppler energía (power)</b>: solo muestra la cantidad de energía, sin dirección; señal más fuerte, detecta vasos pequeños con flujo lento y <b>depende menos del ángulo</b>: útil en vasos perpendiculares al haz como la VCI.</li>
<li><b>Doppler pulsado</b>: espectro de un vaso concreto: velocidad, oscilación y resistencia distal. Arteria hepática: baja resistencia con buen flujo diastólico; vena hepática: <b>trifásica</b> (fig. 1.9).</li>
<li><b>Imágenes armónicas de tejidos</b>: procesan la segunda armónica (doble de la frecuencia emitida) mediante inversión de pulsos → más relación señal/ruido, menos artefactos; ideales en abdómenes obesos o con gas.</li>
<li><b>Imágenes combinadas</b> (compound): varios ángulos o frecuencias; mejoran los márgenes de las lesiones hepáticas.</li>
<li><b>Ecografía volumétrica</b> (3D), <b>elastografía</b> (rigidez tisular; método fiable para valorar <b>fibrosis hepática</b>, puede evitar biopsias) y <b>ecografía con contraste</b> (microburbujas intravasculares).</li>
</ul>`
        },
        {
          titulo: 'Seguridad: efectos biológicos e índices',
          fuente: 'Bates, cap. 1, pp. 15–17',
          html: `
<p>Actualmente se acepta que <b>no hay evidencia suficiente de efectos adversos</b> de la ecografía diagnóstica y que sus beneficios superan a sus riesgos (EFSUMB, ECURS, WFUMB). No se aconseja el <b>Doppler pulsado sobre el embrión en el primer trimestre</b>; no existe esa restricción en ecografía abdominal.</p>
<div class="tabla"><table><thead><tr><th>Efecto</th><th>Qué es</th><th>Dónde importa</th></tr></thead><tbody>
<tr><td><b>Térmico</b></td><td>Ligero aumento de temperatura; se han medido hasta 5 °C en la interfase hueso–tejido</td><td>Doppler pulsado (haz estacionario, FRP alta), huesos fetales, transcraneal</td></tr>
<tr><td><b>Mecánico</b></td><td>Cavitación y presión de radiación; dependen de la amplitud del pulso</td><td>Órganos con gas (pulmón, intestino) y medios de contraste con microburbujas</td></tr>
</tbody></table></div>
<ul>
<li><b>Índice mecánico (IM)</b>: cuán «grande» es el pulso → probabilidad de efectos mecánicos.</li>
<li><b>Índice térmico (IT)</b>: TIS (tejido blando, el del abdomen), TIB (hueso en foco), TIC (craneal). En hígado y bazo, bien perfundidos, el flujo sanguíneo enfría.</li>
<li>Desde 1998 los equipos muestran los índices en pantalla (ODS). Limitaciones: no consideran la duración de la exposición ni la fiebre del paciente.</li>
</ul>
<h4>Cómo minimizar la dosis (Cuadro 1.3, ALARA)</h4>
<ol>
<li>Operadores formados.</li>
<li>Reducir la potencia de salida: <b>usar la ganancia (amplificación de ecos recibidos) en vez de subir la energía transmitida</b>.</li>
<li>Exámenes breves; no dejar el transductor apoyado sin explorar.</li>
<li>Solo exámenes con indicación clínica y solicitud en regla.</li>
<li>Vigilar los índices; limitar el Doppler pulsado a lo necesario.</li>
<li>Optimizar los controles del equipo.</li>
</ol>
<p><b>Otros riesgos</b>: seguridad eléctrica (cables, transductor con grietas fuera de servicio), microbiológica (limpieza según el fabricante y <b>fundas estériles</b> en heridas o inmunodeprimidos) y, el más serio, el <b>operador sin formación</b>.</p>`
        }
      ]
    },
    {
      id: 'b3', peso: 10, titulo: 'Técnica de exploración y manejo del ecógrafo',
      descripcion: 'Identifica las diferentes técnicas de exploración ecográfica, ajustes y manejo del ecógrafo, de acuerdo con la situación clínica del paciente.',
      temas: [
        {
          titulo: 'Sacar el máximo del equipo (Cuadro 1.1)',
          fuente: 'Bates, cap. 1, pp. 2–3',
          html: `
<p>La ecografía depende del operador más que cualquier otra técnica. La calidad diagnóstica depende de la <b>aptitud técnica</b>, de saber cómo interactúa el sonido con los tejidos (artefactos) y del <b>conocimiento clínico</b>. Es mejor una ecografía bien hecha en un equipo sencillo que una mal hecha en el último modelo.</p>
<ol>
<li>Usar la <b>frecuencia más alta posible</b>; subirla al examinar páncreas o una vesícula anterior.</li>
<li>Usar la <b>velocidad de cuadro más baja</b> y la <b>densidad lineal más alta</b> posibles (pacientes inquietos o disneicos necesitan velocidad de cuadro mayor).</li>
<li>Usar el <b>campo más pequeño</b> factible: el hígado exige sector amplio y gran profundidad; para el colédoco se puede reducir mucho el campo.</li>
<li>Colocar la <b>zona de enfoque</b> a la profundidad correcta.</li>
<li>Usar <b>armónicas de tejidos</b> para mejorar la señal/ruido y reducir artefactos.</li>
<li>Probar distintas <b>curvas de procesamiento</b> para destacar anomalías sutiles (un nódulo en un hígado cirrótico, fig. 1.4).</li>
</ol>
<div class="tabla"><table><thead><tr><th>Control</th><th>Qué hace</th></tr></thead><tbody>
<tr><td>Ganancia / TGC</td><td>Amplifica los ecos recibidos, global o por profundidad</td></tr>
<tr><td>Potencia (output)</td><td>Energía emitida: bajarla primero (ALARA)</td></tr>
<tr><td>Profundidad, sector, zoom</td><td>Campo de visión; menos campo = más densidad lineal</td></tr>
<tr><td>Foco</td><td>Número y posición de zonas focales</td></tr>
<tr><td>Preajustes (presets)</td><td>Parámetros por órgano</td></tr>
</tbody></table></div>`
        },
        {
          titulo: 'Doppler: cuando «no hay flujo» (Cuadro 1.2)',
          fuente: 'Bates, cap. 1, pp. 9–11',
          html: `
<p>Mostrar flujo en un vaso grande es fácil; los problemas aparecen al diagnosticar <b>ausencia de flujo</b> (trombosis) o flujo lento en vasos difíciles. El Doppler da <b>falsos positivos de oclusión</b>:</p>
<ul>
<li>La vena porta a <b>90°</b> del haz parece no tener flujo; por vía intercostal queda casi paralela y el flujo se ve.</li>
<li>Una <b>FRP demasiado alta</b> borra el flujo lento; una FRP muy baja produce <b>aliasing</b> que simula inversión del flujo.</li>
</ul>
<h4>Qué hacer si no detectas flujo</h4>
<ol>
<li>Ángulo entre haz y vaso <b>&lt; 60°</b> (lo más cercano a 0°).</li>
<li>Ganancia Doppler justo <b>por debajo del nivel de ruido</b>.</li>
<li>Potencia/salida Doppler suficiente.</li>
<li><b>FRP (escala) baja</b> para flujos lentos.</li>
<li><b>Filtro de pared bajo</b>.</li>
<li>Usar <b>Doppler energía</b>: más sensible y no depende del ángulo.</li>
<li>Reducir el campo y ampliar el vaso.</li>
<li>Conocer las limitaciones del equipo.</li>
<li>En caso de duda, probar en un <b>vaso de referencia</b> que sabes que tiene flujo.</li>
</ol>
<p>Ojo con el exceso de sensibilidad: el color puede «tapar» un trombo no oclusivo.</p>`
        },
        {
          titulo: 'Preparación, posición y trabajo seguro',
          fuente: 'ABC, p. 11; Bates, cap. 1, pp. 13–19; cap. 10, p. 298',
          html: `
<ul>
<li><b>Preparación</b> del paciente programado: <b>ayuno de 6–8 h</b> (menos gas intestinal, vesícula llena) y <b>vejiga llena</b> para evaluar la pelvis. En un politraumatizado o un abdomen agudo quirúrgico no se espera: se explora de inmediato.</li>
<li>Movimientos del transductor: deslizar, rotar, angular/abanicar, balancear, comprimir. Inspiración profunda para bajar hígado, bazo y riñones.</li>
<li>La ecografía es <b>interactiva</b>: pedir al paciente que señale el punto de dolor orienta hacia la patología (colecistitis, intestino inflamado).</li>
<li>Mantener la mente abierta: «casar» la exploración con el diagnóstico clínico que uno espera es una fuente seria de error.</li>
</ul>
<h4>Ergonomía</h4>
<p>Los <b>trastornos musculoesqueléticos ocupacionales</b> afectan a un porcentaje importante de ecografistas a tiempo completo. Prevención: asiento y camilla regulables, monitor y panel ajustables, formación en manejo de pacientes y carga de trabajo variada.</p>
<h4>Calidad y aspectos medicolegales</h4>
<ul>
<li>Directrices escritas del servicio; solicitud en regla; <b>informe por escrito</b>; <b>grabar imágenes</b> representativas; describir las <b>limitaciones</b> del examen (p. ej., páncreas no visible por gas).</li>
<li>Control de calidad del equipo con fantoma: exactitud de calibres, sensibilidad y penetración, resolución axial y lateral, grosor de corte, escala de grises, zona muerta, potencia, seguridad eléctrica, guía de biopsias, Doppler.</li>
</ul>`
        }
      ]
    },
    {
      id: 'b4', peso: 20, titulo: 'Transductores',
      descripcion: 'Distingue los diferentes tipos de transductores utilizados en ecografía, para obtener mejores imágenes y optimizarlas.',
      temas: [
        {
          titulo: 'Tipos de transductor',
          fuente: 'ABC, p. 7; Bates, cap. 1, p. 13',
          html: `
<figure class="fig"><svg viewBox="0 0 540 170" role="img" aria-label="Formas de imagen de los transductores lineal, convexo y sectorial">
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="30" y="20" width="120" height="110" fill="#8d9ea8" fill-opacity="0.18"/>
<path d="M210 40 A90 90 0 0 1 330 40 L360 130 L180 130 Z" fill="#8d9ea8" fill-opacity="0.18"/>
<path d="M455 20 L395 130 L515 130 Z" fill="#8d9ea8" fill-opacity="0.18"/></g>
<g fill="#f0b84a"><rect x="30" y="14" width="120" height="6"/><path d="M210 40 A90 90 0 0 1 330 40 L326 34 A84 84 0 0 0 214 34 Z"/><rect x="445" y="14" width="20" height="6"/></g>
<g font-family="JetBrains Mono, monospace" font-size="12" fill="currentColor" text-anchor="middle">
<text x="90" y="152">Lineal 7–18 MHz</text><text x="270" y="152">Convexo 2–5 MHz</text><text x="455" y="152">Sectorial 1,5–5 MHz</text></g></svg>
<figcaption>Huella (ámbar) y forma del campo de visión. Frecuencias según el ABC.</figcaption></figure>
<div class="tabla"><table><thead><tr><th>Transductor</th><th>Forma</th><th>Frecuencia</th><th>Imagen</th><th>Uso</th></tr></thead><tbody>
<tr><td><b>Convexo (curvo)</b></td><td>Cabeza curva, campo amplio</td><td class="mono">2–5 MHz</td><td>Mayor profundidad, menor resolución</td><td>Órganos grandes y profundos: hígado, riñones</td></tr>
<tr><td><b>Lineal</b></td><td>Cabeza plana, ondas en líneas rectas</td><td class="mono">7–18 MHz</td><td>Alta resolución, poca profundidad</td><td>Músculos, vasos, piel, pared abdominal</td></tr>
<tr><td><b>Sectorial</b></td><td>Emite en abanico desde una huella pequeña</td><td class="mono">1,5–5 MHz</td><td>Profunda, con menos detalle</td><td>Ecocardiografía, espacios pequeños</td></tr>
<tr><td><b>Endocavitario</b></td><td>Pequeño, se introduce en vagina o recto</td><td class="mono">7–10 MHz</td><td>Alta resolución, menos profundidad</td><td>Útero, ovarios, próstata (transrectal)</td></tr>
</tbody></table></div>
<ul>
<li>Bates: para la mayor parte del abdomen se usa una sonda <b>convexa de 3,5–6 MHz</b>; una sonda <b>lineal de 5–7,5 MHz</b> sirve para estructuras superficiales (vesícula anterior, pared abdominal). Neonatos y niños: sonda de poco campo de <b>7–10 MHz</b>.</li>
<li>Los transductores modernos son de <b>banda ancha</b>: una sola sonda cubre una gama de frecuencias.</li>
<li>La pared abdominal (hernias) no forma parte de la ecografía abdominal de rutina: se estudia con <b>transductor lineal</b> como ecografía de partes blandas (ABC, p. 10).</li>
</ul>`
        },
        {
          titulo: 'Componentes del transductor y cuidados',
          fuente: 'Física general de transductores; Bates, cap. 1, pp. 16–19',
          html: `
<ul>
<li><b>Cristal piezoeléctrico</b> (PZT): emite y recibe. Cristal más delgado → mayor frecuencia.</li>
<li><b>Capa de acoplamiento</b>: impedancia intermedia entre cristal y piel.</li>
<li><b>Material de respaldo (backing)</b>: amortigua y acorta el pulso → mejor resolución axial.</li>
<li><b>Lente acústica</b>: enfoca en el plano de elevación (grosor de corte).</li>
<li>Arreglos: lineal secuencial, convexo y fásico (phased array, el sectorial electrónico).</li>
</ul>
<div class="perla"><b>Regla de elección</b>La frecuencia más alta que alcance la profundidad de interés: superficial → lineal; profundo → convexo; ventana pequeña entre costillas → sectorial.</div>
<p><b>Cuidados</b>: un transductor con grietas en el revestimiento se retira del servicio; limpieza según el fabricante; funda estéril en heridas abiertas, inmunodeprimidos y procedimientos.</p>`
        }
      ]
    },
    {
      id: 'b5', peso: 20, titulo: 'Aplicaciones clínicas, alcances y limitaciones',
      descripcion: 'Comprende las aplicaciones clínicas de la ecografía, sus indicaciones, alcances y limitaciones.',
      temas: [
        {
          titulo: 'Ventajas, limitaciones e indicaciones',
          fuente: 'ABC, pp. 6, 10–11; Bates, cap. 1, p. 2',
          html: `
<div class="tabla"><table><thead><tr><th>Ventajas</th><th>Limitaciones</th></tr></thead><tbody>
<tr><td>No invasiva, sin radiación ionizante: segura incluso en embarazadas</td><td>Gas abdominal abundante</td></tr>
<tr><td>Rápida, en tiempo real, se hace casi en cualquier lugar</td><td>Obesidad</td></tr>
<tr><td>Guía procedimientos (biopsias, drenajes)</td><td><b>Operador-dependiente</b>: la calidad depende de la habilidad, experiencia y conocimiento</td></tr>
<tr><td>Valora peristaltismo y flujo (Doppler)</td><td>No es ideal para estómago y asas (gas)</td></tr>
</tbody></table></div>
<h4>¿Qué se evalúa en una ecografía abdominal? (ABC)</h4>
<p>Hígado, vesícula, bazo, páncreas, riñones, aorta y VCI, <b>y también la pelvis</b> (vejiga, útero, ovarios, próstata): una mujer joven con dolor abdominal e irritación peritoneal puede tener un quiste ovárico roto o un <b>embarazo ectópico</b>. Además se busca <b>líquido libre</b> y se explora el retroperitoneo (adenopatías, masas).</p>
<p><b>No incluye</b> la pared abdominal (requiere transductor lineal: ecografía de partes blandas para hernias). El <b>tubo digestivo</b> lleno de gas no se valora bien, aunque pueden verse tumores grandes o asas dilatadas con líquido en la obstrucción.</p>
<h4>Indicaciones</h4>
<p>Cuadros agudos: colecistitis, apendicitis, cólico renal, traumatismos, abdomen agudo. No agudos: cirrosis, hepatitis, absceso hepático, tumores.</p>
<p>Bates insiste: la única práctica aceptable es tras formación teórica y práctica adecuada, con supervisión, actualización continua y auditoría. Conocer las propias limitaciones y pedir ayuda es una de las lecciones más valiosas.</p>`
        },
        {
          titulo: 'Abdomen agudo y FAST',
          fuente: 'Bates, cap. 10, pp. 297–305',
          html: `
<p>La ecografía es decisiva en la evaluación inicial del abdomen agudo: como diagnóstico definitivo (colecistitis en el dolor del cuadrante superior derecho) o como herramienta de <b>priorización</b>. En el politraumatismo múltiple la TC suele ser de primera elección porque ve hueso, columna y retroperitoneo, sopesando el riesgo de radiación.</p>
<h4>FAST</h4>
<ul>
<li>Mínimo <b>cuatro ventanas</b>: flanco derecho (espacio hepatorrenal), flanco izquierdo (periesplénico, por encima y debajo del diafragma), subcostal (pericardio) y pelvis (retrovesical y retrouterino).</li>
<li>El líquido pélvico es difícil de ver si la vejiga no está llena. Para que se acumule en la pelvis por gravedad hay que elevar la cabecera (<b>anti-Trendelenburg</b>); la traducción del libro dice «Trendelenburg», que haría lo contrario.</li>
<li>La ecografía detecta mejor el <b>líquido libre</b> que la lesión del órgano: un estudio mostró sensibilidad del <b>98 % para líquido</b> pero solo <b>41 % para lesiones orgánicas</b>.</li>
<li>La ecografía con contraste ayuda a ver laceraciones hepáticas y esplénicas antes de que haya hemoperitoneo. Las lesiones <b>pancreáticas</b> (cinturón de seguridad) pueden no verse al inicio ni en ecografía ni en TC.</li>
<li>Líquido libre en una mujer → explorar la pelvis: en edad fértil incluir el <b>embarazo ectópico</b>.</li>
</ul>
<h4>Otras urgencias</h4>
<ul>
<li><b>Perforación</b>: pequeñas cantidades de líquido «espeso» (partículas, gas) cerca del duodeno o en el saco menor.</li>
<li><b>Obstrucción</b>: asas dilatadas con líquido y peristaltismo «hiperactivo»; la ecografía muestra bien la obstrucción pero no tanto su causa.</li>
<li><b>Cólico renal</b>: en etapas iniciales puede haber obstrucción <b>sin dilatación</b>; una pelvis mínimamente dilatada en un paciente con dolor lumbar merece atención; el IR es más alto en el riñón obstruido.</li>
<li><b>Aneurisma de aorta</b>: la ecografía confirma o descarta el aneurisma, pero <b>no debe usarse para evaluar la fuga o rotura</b>; no se debe retrasar la cirugía urgente por estudios de imagen.</li>
<li>Absceso o hematoma del <b>psoas</b>: la ecografía es la primera investigación.</li>
</ul>`
        },
        {
          titulo: 'Intervencionismo y ecografía con contraste',
          fuente: 'Bates, cap. 11, pp. 308–327',
          html: `
<h4>Ventajas de guiar procedimientos con ecografía</h4>
<ul>
<li>Se ve la punta de la aguja en <b>tiempo real</b> a lo largo de su trayecto y dentro de la lesión.</li>
<li>Más precisión (esencial en lesiones pequeñas y profundas) y <b>menos pases</b> → menos complicaciones.</li>
<li>Se eligen rutas que evitan vasos; aumenta la confianza en un resultado negativo.</li>
<li>Rápida, sin radiación, de bajo costo, posible a pie de cama.</li>
</ul>
<p>Procedimientos: biopsia hepática, pancreática y renal, paracentesis, drenaje de abscesos, colecistostomía, nefrostomía, drenaje de quistes, tratamiento percutáneo de tumores hepáticos.</p>
<h4>Complicaciones de la biopsia</h4>
<ul>
<li>Con aguja de calibre 18: mortalidad ≈ <b>1 de cada 3.300–5.400</b> pacientes (70 % por hemorragia) y morbilidad ≈ <b>1 de cada 530</b> biopsias.</li>
<li>Mayor riesgo de sangrado en cirrosis y en lesiones malignas.</li>
<li>Siembra tumoral en el trayecto: rara, ≈ 1 de cada 20.000 (mesotelioma, hepatoma).</li>
</ul>
<h4>Ecografía con contraste (EC)</h4>
<ul>
<li>Microburbujas pequeñas que cruzan los capilares pulmonares y <b>permanecen en el espacio intravascular</b> (a diferencia de los contrastes de TC y RM).</li>
<li>Usos: confirmar <b>permeabilidad vascular</b> (trombosis en hepatopatía crónica, trasplantes), <b>caracterizar</b> lesiones hepáticas en fases arterial, portal y sinusoidal (hemangioma, hepatoma, HNF) y <b>detectar</b> lesiones; traumatismo de órganos sólidos.</li>
<li>Riesgo teórico de cavitación (índice mecánico).</li>
</ul>`
        }
      ]
    }
  ],

  tarjetas: [
    ['b1', '¿Qué es la ecogenicidad?', 'La capacidad de un tejido de reflejar el ultrasonido, que determina cómo se ve en pantalla.', 'ABC, p. 7'],
    ['b1', 'Anecoico: definición y ejemplos', 'No refleja casi nada (negro). Sangre, orina en la vejiga, quistes.', 'ABC, p. 8'],
    ['b1', 'Hiperecoico: ejemplos', 'Hueso, cálculos renales o biliares, tejido fibroso (blanco).', 'ABC, p. 8'],
    ['b1', 'Equivalentes de «hiperecoico» en TC y RM', 'TC: hiperdenso. RM: hiperintenso.', 'ABC, p. 7'],
    ['b1', 'Los tres artefactos más importantes según el ABC', 'Sombra acústica posterior, refuerzo acústico posterior y reverberación.', 'ABC, p. 8'],
    ['b1', '¿Cuándo se produce el refuerzo acústico posterior?', 'Cuando el sonido atraviesa un medio sin interfases (líquido) y llega a un medio sólido. Típico de quistes, vejiga y abscesos.', 'ABC, p. 8'],
    ['b1', '¿Qué produce la reverberación?', 'Rebotes entre dos superficies de alta impedancia: líneas paralelas repetidas (aire, aguja, catéter).', 'ABC, p. 8'],
    ['b1', 'Sombra limpia vs sucia', 'Limpia: cálculo o calcio. Sucia (con reverberación): gas.'],
    ['b1', 'En la imagen, ¿qué está arriba y qué abajo?', 'Arriba: lo superficial (cerca del transductor). Abajo: lo profundo. Nunca cambia.', 'ABC, p. 9'],
    ['b1', 'Corte longitudinal con la marca hacia la cabeza: ¿qué hay en el lado de la marca?', 'Lo cefálico; del otro lado, lo caudal.', 'ABC, p. 9'],
    ['b1', 'Desventaja de las imágenes combinadas (compound)', 'Pueden reducir o eliminar artefactos útiles para el diagnóstico (p. ej., la sombra de un cálculo).', 'Bates, cap. 1, p. 12'],
    ['b2', 'Rango audible humano y definición de ultrasonido', '20 Hz – 20 kHz. Ultrasonido: por encima de 20 kHz.', 'ABC, p. 6'],
    ['b2', 'Rango de frecuencias de los ecógrafos', 'Típicamente 2–18 MHz.', 'ABC, p. 6'],
    ['b2', 'Los 4 pasos de la formación de la imagen', 'Emisión de ondas → recepción de ecos → conversión del eco en señal eléctrica (piezoeléctrico) → procesamiento en escala de grises.', 'ABC, p. 6'],
    ['b2', 'Frecuencia vs penetración vs resolución', 'Menor frecuencia: más penetración, menos resolución. Mayor frecuencia: más resolución, menos penetración.', 'ABC, p. 7'],
    ['b2', 'Velocidad media del sonido en tejido blando', '1540 m/s.'],
    ['b2', 'Regla de los 13 µs', 'Cada cm de profundidad = 13 µs de ida y vuelta.'],
    ['b2', 'Cómo aumentar la densidad lineal', 'Reducir la velocidad de cuadro, el ángulo del sector o la profundidad del campo.', 'Bates, cap. 1, p. 3'],
    ['b2', 'Modos usados en ecografía abdominal', 'Modo B y modo Doppler (además existen A y M).', 'ABC, p. 10'],
    ['b2', '¿El rojo en Doppler color es una arteria?', 'No. Rojo = flujo hacia el transductor; azul = se aleja. Los colores pueden invertirse en la configuración.', 'ABC, p. 10'],
    ['b2', 'Ventajas del Doppler energía', 'Más sensible al flujo lento y vasos pequeños; depende menos del ángulo (útil en VCI). No da dirección.', 'Bates, cap. 1, p. 9'],
    ['b2', 'Imágenes armónicas de tejidos', 'Procesan la 2.ª armónica (doble de la frecuencia emitida) por inversión de pulsos: más señal/ruido, menos artefactos (obesos, gas).', 'Bates, cap. 1, pp. 3, 11'],
    ['b2', 'Aplicación clínica más establecida de la elastografía abdominal', 'Evaluar la fibrosis hepática; puede evitar biopsias.', 'Bates, cap. 1, p. 12'],
    ['b2', 'Efectos biológicos del ultrasonido', 'Térmicos (hasta 5 °C en interfase hueso–tejido, más con Doppler pulsado) y mecánicos (cavitación).', 'Bates, cap. 1, p. 16'],
    ['b2', 'Índices TIS, TIB, TIC', 'Índice térmico de tejido blando, de hueso en foco y craneal. El TIS es el relevante en abdomen.', 'Bates, cap. 1, p. 16'],
    ['b2', 'Dónde es más relevante el índice mecánico', 'Intestino con gas, pulmón y uso de contraste con microburbujas.', 'Bates, cap. 1, p. 16'],
    ['b2', 'Doppler pulsado y embarazo', 'No se aconseja sobre el embrión en el primer trimestre.', 'Bates, cap. 1, p. 15'],
    ['b3', 'Cuadro 1.1: seis claves para optimizar la imagen', 'Frecuencia más alta posible, velocidad de cuadro baja/densidad lineal alta, campo pequeño, foco correcto, armónicas, curvas de procesamiento.', 'Bates, cap. 1, p. 3'],
    ['b3', 'ALARA: ¿subir potencia o ganancia?', 'Ganancia: amplifica los ecos recibidos sin aumentar la energía transmitida.', 'Bates, cap. 1, p. 17'],
    ['b3', 'Vena porta «sin flujo» en Doppler: primera causa técnica a descartar', 'Ángulo de 90° con el haz. Explorar por vía intercostal (vaso casi paralelo) y ángulo < 60°.', 'Bates, cap. 1, p. 10'],
    ['b3', 'Ajustes Doppler para flujo lento', 'FRP (escala) baja, filtro de pared bajo, ganancia justo bajo el ruido, Doppler energía.', 'Bates, cap. 1, p. 11'],
    ['b3', 'Efecto de una FRP demasiado baja', 'Aliasing, que puede simular inversión del flujo.', 'Bates, cap. 1, p. 11'],
    ['b3', 'Preparación del paciente para ecografía abdominal', 'Ayuno de 6–8 h y vejiga llena (excepto en urgencias).', 'ABC, p. 11'],
    ['b3', 'Cuatro medidas medicolegales básicas', 'Solicitud en regla, informe escrito, grabar imágenes, describir las limitaciones del examen.', 'Bates, cap. 1, p. 18'],
    ['b4', 'Transductor convexo: frecuencia y uso', '2–5 MHz; órganos grandes y profundos (hígado, riñones).', 'ABC, p. 7'],
    ['b4', 'Transductor lineal: frecuencia y uso', '7–18 MHz; estructuras superficiales: músculos, vasos, piel.', 'ABC, p. 7'],
    ['b4', 'Transductor sectorial: frecuencia y uso', '1,5–5 MHz; ecocardiografía y espacios pequeños.', 'ABC, p. 7'],
    ['b4', 'Transductor endocavitario: frecuencia y uso', '7–10 MHz; útero, ovarios (transvaginal), próstata (transrectal).', 'ABC, pp. 7, 44'],
    ['b4', 'Sonda habitual para abdomen según Bates', 'Convexa de 3,5–6 MHz; neonatos 7–10 MHz.', 'Bates, cap. 1, p. 13'],
    ['b4', '¿Con qué transductor se estudia una hernia de pared?', 'Lineal (ecografía de partes blandas de la pared abdominal).', 'ABC, p. 10'],
    ['b4', 'Función del material de respaldo (backing)', 'Amortigua y acorta el pulso: mejora la resolución axial.'],
    ['b5', 'Cuatro ventanas del FAST', 'Hepatorrenal, periesplénica, subcostal pericárdica y pélvica.', 'Bates, cap. 10, p. 298'],
    ['b5', 'Sensibilidad del FAST: líquido vs lesión orgánica', '98 % para líquido libre; 41 % para lesiones de órgano.', 'Bates, cap. 10, p. 298'],
    ['b5', '¿Por qué incluir la pelvis en la ecografía abdominal?', 'Patología pélvica (quiste ovárico roto, embarazo ectópico, miomas) puede causar síntomas abdominales.', 'ABC, p. 10'],
    ['b5', 'Limitación de la ecografía en el cólico renal inicial', 'Puede haber obstrucción sin dilatación del sistema colector.', 'Bates, cap. 10, p. 304'],
    ['b5', 'Aneurisma de aorta y sospecha de rotura', 'La ecografía confirma el aneurisma pero no evalúa la fuga; no retrasar la cirugía.', 'Bates, cap. 10, p. 305'],
    ['b5', 'Mortalidad y morbilidad de la biopsia guiada (aguja 18 G)', 'Mortalidad ≈ 1/3.300–5.400 (70 % hemorragia); morbilidad ≈ 1/530.', 'Bates, cap. 11, p. 315'],
    ['b5', 'Diferencia clave del contraste ecográfico frente al de TC/RM', 'Las microburbujas permanecen en el espacio intravascular.', 'Bates, cap. 11, p. 327']
  ],

  preguntas: [
    { c: 'b1', q: 'Un tejido que refleja algunas ondas pero menos que los tejidos que lo rodean y se ve gris oscuro es:', o: ['Anecoico', 'Hipoecoico', 'Isoecoico', 'Hiperecoico'], a: 1, e: 'Hipoecoico: refleja menos que su entorno.', f: 'ABC, p. 8' },
    { c: 'b1', q: '¿Cuál de estos se ve anecoico en condiciones normales?', o: ['Hueso cortical', 'Orina en la vejiga', 'Cálculo renal', 'Tejido fibroso'], a: 1, e: 'Los líquidos (sangre, orina, quistes) no generan ecos de vuelta.', f: 'ABC, p. 8' },
    { c: 'b1', q: 'Durante una punción aparecen múltiples líneas paralelas detrás de la aguja. Es el artefacto de:', o: ['Sombra acústica', 'Refuerzo posterior', 'Reverberación', 'Imagen en espejo'], a: 2, e: 'La aguja o el catéter producen rebotes entre superficies de alta impedancia.', f: 'ABC, p. 8, fig. 6' },
    { c: 'b1', q: 'El refuerzo acústico posterior ayuda especialmente a identificar:', o: ['Cálculos', 'Estructuras con alto contenido líquido (quistes, abscesos)', 'Gas intestinal', 'Calcificaciones'], a: 1, e: 'Se produce cuando el sonido atraviesa un medio sin interfases y llega a un sólido.', f: 'ABC, p. 8' },
    { c: 'b1', q: 'Con el transductor transversal y la marca hacia la derecha del paciente, en el lado de la marca de la pantalla se ve:', o: ['La izquierda del paciente', 'La derecha del paciente', 'Lo cefálico', 'Lo caudal'], a: 1, e: 'La marca del transductor corresponde a la marca de la pantalla.', f: 'ABC, p. 9' },
    { c: 'b1', q: '¿Qué afirmación sobre la orientación es siempre verdadera?', o: ['La izquierda de la pantalla es siempre la derecha del paciente', 'La parte superior de la imagen es lo más superficial', 'La parte inferior es lo más cercano a la piel', 'Depende del preset'], a: 1, e: 'Arriba superficial, abajo profundo: nunca varía. Los laterales dependen de la marca.', f: 'ABC, p. 9' },
    { c: 'b2', q: 'Rango de frecuencias usado típicamente por los ecógrafos:', o: ['20 Hz – 20 kHz', '20–200 kHz', '2–18 MHz', '50–100 MHz'], a: 2, e: 'Por encima del rango audible; 1 MHz = un millón de Hz.', f: 'ABC, p. 6' },
    { c: 'b2', q: 'Para evaluar el músculo y el tejido celular subcutáneo conviene usar:', o: ['Baja frecuencia: más penetración', 'Alta frecuencia: más resolución', 'Doppler continuo', 'Modo A'], a: 1, e: 'Estructuras superficiales: alta frecuencia. Profundas: baja frecuencia.', f: 'ABC, p. 7' },
    { c: 'b2', q: '¿Qué componente convierte los ecos recibidos en señales eléctricas?', o: ['La lente acústica', 'El cristal piezoeléctrico', 'El gel', 'El monitor'], a: 1, e: 'El mismo cristal emite (electricidad → vibración) y recibe (eco → electricidad).', f: 'ABC, p. 6' },
    { c: 'b2', q: 'Un pequeño cálculo vesicular no se ve con un sector amplio y sí al reducir el campo. ¿Qué mejoró?', o: ['La penetración', 'La densidad lineal', 'El índice térmico', 'El rango audible'], a: 1, e: 'Reducir el campo aumenta la densidad de líneas y la nitidez.', f: 'Bates, cap. 1, fig. 1.2' },
    { c: 'b2', q: 'Para mostrar flujo en la VCI, perpendicular al haz, es más útil:', o: ['Doppler color', 'Doppler energía', 'Modo M', 'Modo A'], a: 1, e: 'El Doppler energía depende menos del ángulo y es más sensible.', f: 'Bates, cap. 1, p. 9' },
    { c: 'b2', q: 'Las imágenes armónicas de tejidos:', o: ['Aumentan los artefactos', 'Usan la mitad de la frecuencia emitida', 'Procesan la segunda armónica y reducen artefactos', 'Solo sirven en ecocardiografía'], a: 2, e: 'Mejoran la relación señal/ruido, sobre todo en obesos o abdomen con gas.', f: 'Bates, cap. 1, p. 11' },
    { c: 'b2', q: 'El efecto térmico del ultrasonido es mayor con:', o: ['Modo B', 'Doppler color en barrido', 'Doppler pulsado con el haz fijo', 'Transductor apagado'], a: 2, e: 'El Doppler pulsado tiene mayor intensidad temporal promedio y se mantiene sobre una zona.', f: 'Bates, cap. 1, p. 16' },
    { c: 'b2', q: '¿En qué situación tiene más relevancia el índice mecánico?', o: ['Hígado bien perfundido', 'Uso de contraste con microburbujas', 'Riñón normal', 'Bazo'], a: 1, e: 'Las microburbujas y el gas aumentan la probabilidad de cavitación.', f: 'Bates, cap. 1, p. 16' },
    { c: 'b3', q: 'Según el principio ALARA, para mejorar una imagen débil primero conviene:', o: ['Subir la potencia de salida', 'Subir la ganancia', 'Alargar el examen', 'Usar Doppler pulsado'], a: 1, e: 'Usar la amplificación de los ecos recibidos en vez de aumentar la energía transmitida (Cuadro 1.3).', f: 'Bates, cap. 1, p. 17' },
    { c: 'b3', q: 'La vena porta no muestra flujo en Doppler color. Antes de diagnosticar trombosis, lo primero es:', o: ['Subir la FRP', 'Comprobar que el ángulo sea < 60° y bajar la FRP y el filtro de pared', 'Aumentar el filtro de pared', 'Cambiar a modo M'], a: 1, e: 'Un ángulo cercano a 90° o una FRP alta producen falsa ausencia de flujo (Cuadro 1.2).', f: 'Bates, cap. 1, pp. 10–11' },
    { c: 'b3', q: 'Una vena porta aparece en azul (aparente flujo hepatófugo) con FRP muy baja. Lo más probable es:', o: ['Hipertensión portal', 'Aliasing', 'Trombosis', 'Flujo normal'], a: 1, e: 'Al reducir la FRP el flujo hepatópeto se vio rojo y normal.', f: 'Bates, cap. 1, fig. 1.10C' },
    { c: 'b3', q: 'Paciente ambulatorio para ecografía abdominal completa. Indicación correcta:', o: ['Comida grasa previa', 'Ayuno de 6–8 h y vejiga llena', 'Vejiga vacía', 'Ningún requisito'], a: 1, e: 'El ayuno reduce el gas y la vejiga llena permite valorar la pelvis.', f: 'ABC, p. 11' },
    { c: 'b4', q: 'Frecuencia típica del transductor lineal según el ABC:', o: ['1,5–5 MHz', '2–5 MHz', '7–18 MHz', '0,5–1 MHz'], a: 2, e: 'Alta frecuencia: alta resolución y poca profundidad.', f: 'ABC, p. 7' },
    { c: 'b4', q: 'Transductor ideal para hígado y riñones:', o: ['Lineal', 'Convexo', 'Endocavitario', 'Sectorial de 10 MHz'], a: 1, e: 'Convexo de baja frecuencia (2–5 MHz), campo amplio en profundidad.', f: 'ABC, p. 7' },
    { c: 'b4', q: 'Paciente con sospecha de hernia umbilical. Estudio que se debe solicitar:', o: ['Ecografía abdominal con convexo', 'Ecografía de partes blandas de pared con transductor lineal', 'Ecocardiografía', 'Ecografía transrectal'], a: 1, e: 'La pared abdominal no forma parte de la ecografía abdominal de rutina.', f: 'ABC, p. 10' },
    { c: 'b4', q: 'En un neonato, Bates recomienda una sonda de:', o: ['1–2 MHz', '3,5 MHz', '7–10 MHz de poco campo', '18–20 MHz'], a: 2, e: 'Los niños necesitan mayor frecuencia y una sonda pequeña.', f: 'Bates, cap. 1, p. 13' },
    { c: 'b5', caso: true, q: 'Politraumatizado hipotenso con FAST positivo en el espacio hepatorrenal. Conducta:', o: ['TC de abdomen', 'Repetir FAST en 6 h', 'Laparotomía urgente', 'Observación'], a: 2, e: 'En el paciente inestable la ecografía prioriza: hemoperitoneo → cirugía.', f: 'Bates, cap. 10, p. 298' },
    { c: 'b5', q: 'En el traumatismo abdominal, la ecografía es mejor para detectar:', o: ['Lesiones pancreáticas', 'Líquido libre', 'Fracturas vertebrales', 'Lesiones de víscera hueca'], a: 1, e: 'Sensibilidad 98 % para líquido frente a 41 % para lesiones orgánicas.', f: 'Bates, cap. 10, p. 298' },
    { c: 'b5', caso: true, q: 'Mujer de 24 años con dolor abdominal difuso e irritación peritoneal. Además del abdomen superior, es imprescindible explorar:', o: ['Solo el hígado', 'La pelvis (quiste ovárico roto, embarazo ectópico)', 'La pared abdominal', 'La tiroides'], a: 1, e: 'Omitir la pelvis sería una negligencia.', f: 'ABC, p. 10; Bates, cap. 10, p. 302' },
    { c: 'b5', q: 'Sobre el aneurisma de aorta con sospecha de rotura, es correcto:', o: ['La ecografía descarta la fuga con seguridad', 'La ecografía identifica el aneurisma pero no debe usarse para evaluar la fuga', 'Siempre se espera la TC antes de operar', 'El aneurisma no se ve por ecografía'], a: 1, e: 'No se debe retrasar la cirugía urgente por estudios de imagen.', f: 'Bates, cap. 10, p. 305' },
    { c: 'b5', q: 'Complicación más frecuente como causa de muerte tras biopsia guiada:', o: ['Infección', 'Hemorragia', 'Siembra tumoral', 'Neumotórax'], a: 1, e: 'El 70 % de la mortalidad se debe a hemorragia; la siembra tumoral es rarísima (≈ 1/20.000).', f: 'Bates, cap. 11, p. 315' },
    { c: 'b5', q: '¿Cuál NO es una limitación de la ecografía?', o: ['Gas intestinal', 'Dependencia del operador', 'Radiación ionizante', 'Obesidad'], a: 2, e: 'No usa radiación ionizante: es segura incluso en embarazadas.', f: 'ABC, p. 6' }
  ],

  glosario: [
    ['ALARA', 'Tan bajo como sea razonablemente posible: mínima exposición acústica que permita el diagnóstico.'],
    ['Aliasing', 'Artefacto Doppler cuando el desplazamiento supera el límite de Nyquist (FRP/2).'],
    ['Anecoico', 'Sin ecos (negro). Sangre, orina, quistes.'],
    ['Densidad lineal', 'Número de líneas de exploración por imagen; más densidad, más nitidez.'],
    ['Doppler energía', 'Doppler que muestra la amplitud de la señal sin dirección; muy sensible al flujo lento.'],
    ['Elastografía', 'Medición de la rigidez de los tejidos; útil para la fibrosis hepática.'],
    ['Ecogenicidad', 'Capacidad de un tejido de reflejar el ultrasonido.'],
    ['FRP', 'Frecuencia de repetición de pulsos; define la escala Doppler.'],
    ['Imágenes armónicas', 'Imagen formada con la segunda armónica; reduce artefactos.'],
    ['Imágenes combinadas', 'Compound: imagen con varios ángulos o frecuencias.'],
    ['Índice mecánico (IM)', 'Estimación del riesgo de efectos mecánicos (cavitación).'],
    ['Índice térmico (IT)', 'Estimación del calentamiento: TIS, TIB, TIC.'],
    ['Piezoeléctrico', 'Material que convierte energía eléctrica en mecánica y viceversa.'],
    ['Refuerzo acústico', 'Aumento de brillo detrás de una estructura líquida.'],
    ['Reverberación', 'Ecos repetidos entre dos interfaces de alta impedancia.'],
    ['Sombra acústica', 'Zona negra detrás de una interfase muy reflectante.'],
    ['TGC', 'Compensación ganancia–tiempo: ganancia por profundidad.'],
    ['FAST', 'Evaluación ecográfica focalizada en trauma: líquido libre y pericardio.'],
    ['EC', 'Ecografía con contraste (microburbujas intravasculares).']
  ]
});
