ECO.curso({
  id: 'bases',
  codigo: '520092C',
  titulo: 'Bases Generales en Ecografía',
  corto: 'Bases',
  resumen: 'Terminología, física del ultrasonido, manejo del equipo, transductores y aplicaciones clínicas.',
  criterios: [
    {
      id: 'b1', peso: 25, titulo: 'Términos y conceptos básicos',
      descripcion: 'Describe los términos y conceptos básicos relacionados con la ecografía.',
      temas: [
        {
          titulo: 'Ecogenicidad y descripción de lesiones',
          html: `
<p>La <b>ecogenicidad</b> es la capacidad de un tejido de reflejar el ultrasonido. Se describe siempre <b>comparando</b> con un tejido de referencia (habitualmente el parénquima vecino).</p>
<figure class="fig"><svg viewBox="0 0 520 92" role="img" aria-label="Escala de ecogenicidad de anecoico a hiperecoico">
<defs><linearGradient id="gEco" x1="0" x2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>
<rect x="10" y="10" width="500" height="34" rx="4" fill="url(#gEco)" stroke="#888"/>
<g font-family="JetBrains Mono, monospace" font-size="12" fill="currentColor" text-anchor="middle">
<text x="40" y="66">Anecoico</text><text x="170" y="66">Hipoecoico</text><text x="300" y="66">Isoecoico</text><text x="440" y="66">Hiperecoico</text>
<text x="40" y="84" fill="#8d9ea8">líquido</text><text x="170" y="84" fill="#8d9ea8">ganglio, músculo</text><text x="300" y="84" fill="#8d9ea8">= referencia</text><text x="440" y="84" fill="#8d9ea8">grasa, calcio, gas</text></g></svg>
<figcaption>Escala de grises: negro = sin ecos; blanco = reflexión intensa.</figcaption></figure>
<ul>
<li><b>Anecoico</b>: sin ecos internos (negro). Típico de líquido simple: vesícula, vejiga, quiste.</li>
<li><b>Hipoecoico</b>: menos ecos que el tejido de referencia.</li>
<li><b>Isoecoico</b>: igual ecogenicidad que la referencia (lesiones «fantasma», difíciles de ver).</li>
<li><b>Hiperecoico / ecogénico</b>: más ecos que la referencia. Grasa, fibrosis, calcio, gas, interfaces.</li>
<li><b>Homogéneo / heterogéneo</b>: distribución uniforme o no de los ecos.</li>
</ul>
<h4>Cómo describir una lesión</h4>
<p>Localización (órgano, segmento), tamaño en 3 ejes, forma, márgenes (bien/mal definidos), ecogenicidad, ecoestructura, efectos posteriores (sombra o refuerzo), vascularización Doppler y relación con estructuras vecinas.</p>
<div class="perla"><b>Perla</b>«Hipoecoico» no es sinónimo de «quístico». Un linfoma puede ser casi anecoico pero sólido: busca el <b>refuerzo posterior</b> y el <b>flujo Doppler</b> antes de llamarlo quiste.</div>`
        },
        {
          titulo: 'Planos, orientación y convenciones',
          html: `
<ul>
<li><b>Longitudinal (sagital)</b>: marcador del transductor hacia la <b>cabeza</b> del paciente. En pantalla, craneal a la izquierda, caudal a la derecha.</li>
<li><b>Transversal (axial)</b>: marcador hacia la <b>derecha del paciente</b>. Se ve como en una TC: la derecha del paciente queda a la izquierda de la pantalla.</li>
<li><b>Coronal</b>: desde el flanco, útil para riñones, bazo y espacios de Morison y esplenorrenal.</li>
<li><b>Oblicuo</b>: siguiendo el eje del órgano (p. ej. subcostal oblicuo para hígado y vía biliar).</li>
</ul>
<p>Parte superior de la pantalla = estructuras <b>cercanas</b> al transductor (campo cercano). Parte inferior = <b>profundas</b> (campo lejano).</p>
<p>En ecocardiografía la convención del marcador es inversa (marcador a la derecha de la pantalla); en abdomen y POCUS general se usa la convención radiológica.</p>`
        },
        {
          titulo: 'Artefactos: los que ayudan y los que engañan',
          html: `
<div class="tabla"><table><thead><tr><th>Artefacto</th><th>Mecanismo</th><th>Ejemplo clínico</th></tr></thead><tbody>
<tr><td>Sombra acústica posterior</td><td>Atenuación/reflexión casi total del haz</td><td>Cálculos, calcificaciones, hueso, gas («sombra sucia»)</td></tr>
<tr><td>Refuerzo acústico posterior</td><td>Estructura que atenúa menos que su entorno</td><td>Quistes, vesícula, vejiga</td></tr>
<tr><td>Reverberación</td><td>Rebotes múltiples entre dos interfaces paralelas muy reflectantes</td><td>Líneas A del pulmón, aire bajo la pared</td></tr>
<tr><td>Cola de cometa</td><td>Reverberación de alta frecuencia en un reflector pequeño</td><td>Adenomiomatosis vesicular (senos de Rokitansky-Aschoff), cuerpos extraños metálicos</td></tr>
<tr><td>Ring-down</td><td>Resonancia de burbujas de gas</td><td>Gas intestinal, neumobilia, líneas B pulmonares</td></tr>
<tr><td>Imagen en espejo</td><td>Reflexión en interfaz muy especular (diafragma)</td><td>Hígado «duplicado» por encima del diafragma</td></tr>
<tr><td>Sombra de borde (refracción)</td><td>Refracción en bordes curvos</td><td>Bordes de vesícula o quistes; no confundir con cálculo</td></tr>
<tr><td>Lóbulo lateral / grosor de corte</td><td>Ecos de haces fuera del eje principal</td><td>Falso «barro» en vesícula o vejiga</td></tr>
<tr><td>Aliasing</td><td>Frecuencia Doppler mayor que la mitad de la PRF</td><td>Mosaico de colores en estenosis</td></tr>
<tr><td>Centelleo (twinkling)</td><td>Señal Doppler color tras superficie rugosa</td><td>Litiasis renal pequeña</td></tr>
</tbody></table></div>
<div class="perla"><b>Perla</b>Sombra <b>limpia</b> (anecoica, nítida) = cálculo/calcio. Sombra <b>sucia</b> (con ecos de reverberación) = gas.</div>`
        }
      ]
    },
    {
      id: 'b2', peso: 25, titulo: 'Principios físicos y modos de imagen',
      descripcion: 'Conoce los principios físicos subyacentes a la ecografía, la generación y propagación de ondas sonoras, la interacción de las ondas sonoras con los tejidos biológicos y los diferentes modos de imagen.',
      temas: [
        {
          titulo: 'Generación y propagación del ultrasonido',
          html: `
<ul>
<li>El sonido es una <b>onda mecánica longitudinal</b>: necesita un medio; no viaja en el vacío.</li>
<li><b>Ultrasonido</b>: frecuencia &gt; 20 kHz. Diagnóstico: aproximadamente <b>2–18 MHz</b>.</li>
<li><b>Efecto piezoeléctrico</b> (Curie, 1880): los cristales (cerámica PZT, titanato-zirconato de plomo) se deforman con un voltaje y <b>emiten</b> ultrasonido (efecto inverso); al recibir el eco generan voltaje (efecto directo). El mismo cristal emite y recibe.</li>
<li>El transductor emite pulsos durante ~1 % del tiempo y escucha el ~99 % restante (<b>factor de trabajo</b> bajo).</li>
</ul>
<h4>Ecuaciones esenciales</h4>
<ul>
<li><b>c = f × λ</b>. En tejido blando, c ≈ <b>1540 m/s</b>. A 5 MHz, λ ≈ 0,31 mm.</li>
<li><b>Ecuación de distancia</b>: profundidad = (c × t) / 2. Regla práctica: <b>13 µs por cada cm</b> de profundidad (ida y vuelta).</li>
<li>La velocidad depende del medio (rigidez y densidad), <b>no</b> de la frecuencia.</li>
</ul>
<div class="tabla"><table><thead><tr><th>Medio</th><th>Velocidad (m/s)</th></tr></thead><tbody>
<tr><td>Aire</td><td class="mono">≈ 330</td></tr><tr><td>Grasa</td><td class="mono">≈ 1450</td></tr><tr><td>Tejido blando (promedio)</td><td class="mono">1540</td></tr><tr><td>Hígado</td><td class="mono">≈ 1550</td></tr><tr><td>Músculo</td><td class="mono">≈ 1580</td></tr><tr><td>Hueso</td><td class="mono">≈ 4080</td></tr>
</tbody></table></div>`
        },
        {
          titulo: 'Interacción con los tejidos: impedancia, reflexión, atenuación',
          html: `
<ul>
<li><b>Impedancia acústica</b>: Z = densidad × velocidad (rayls). Los ecos se producen en las <b>interfaces</b> entre tejidos de impedancia distinta; cuanto mayor la diferencia, más reflexión.</li>
<li>Interfaz tejido–aire: refleja ≈ 99,9 % → por eso se usa <b>gel</b>, y el gas intestinal impide ver detrás.</li>
<li><b>Reflexión especular</b>: interfaces grandes y lisas (diafragma, pared vesical); depende del ángulo, máxima a 90°.</li>
<li><b>Dispersión (scattering)</b>: reflectores menores que λ; da la textura («speckle») del parénquima. La dispersión de Rayleigh (eritrocitos) es la base del Doppler.</li>
<li><b>Refracción</b>: cambio de dirección al pasar entre medios de distinta velocidad con incidencia oblicua (ley de Snell). Produce errores de posición y sombras de borde.</li>
<li><b>Absorción</b>: conversión de energía en calor; principal componente de la atenuación.</li>
</ul>
<h4>Atenuación</h4>
<p>En tejido blando ≈ <b>0,5 dB/cm/MHz</b>. Aumenta con la <b>frecuencia</b> y la <b>profundidad</b>. Por eso:</p>
<ul><li>Alta frecuencia → mejor resolución, <b>menor penetración</b> (estructuras superficiales).</li><li>Baja frecuencia → más penetración, menor resolución (abdomen profundo, obesos).</li></ul>
<h4>Resolución</h4>
<ul>
<li><b>Axial</b> (a lo largo del haz) = longitud espacial del pulso / 2. Mejora con mayor frecuencia y pulsos cortos (material de amortiguación).</li>
<li><b>Lateral</b> (perpendicular al haz) = ancho del haz; es mejor en la <b>zona focal</b>. Siempre peor que la axial.</li>
<li><b>Temporal</b> = frecuencia de cuadros (frame rate). Disminuye con mayor profundidad, más zonas focales y sectores anchos.</li>
<li>Campo cercano = zona de Fresnel; campo lejano = zona de Fraunhofer (el haz diverge).</li>
</ul>`
        },
        {
          titulo: 'Modos de imagen y Doppler',
          html: `
<div class="tabla"><table><thead><tr><th>Modo</th><th>Qué muestra</th><th>Uso</th></tr></thead><tbody>
<tr><td>A (amplitud)</td><td>Picos de amplitud vs profundidad</td><td>Histórico; oftalmología (biometría)</td></tr>
<tr><td>B (brillo)</td><td>Imagen 2D en escala de grises</td><td>Base de toda la ecografía</td></tr>
<tr><td>M (movimiento)</td><td>Movimiento de una línea en el tiempo</td><td>Válvulas, FC fetal, deslizamiento pleural</td></tr>
<tr><td>Doppler color</td><td>Dirección y velocidad media del flujo sobre el modo B</td><td>Presencia y dirección de flujo</td></tr>
<tr><td>Doppler pulsado (PW)</td><td>Espectro de velocidades en un punto (volumen de muestra)</td><td>Velocidades, índices; sufre aliasing</td></tr>
<tr><td>Doppler continuo (CW)</td><td>Todas las velocidades a lo largo del haz</td><td>Altas velocidades (estenosis valvular); sin resolución de profundidad</td></tr>
<tr><td>Power Doppler</td><td>Amplitud (energía) de la señal</td><td>Flujo lento; muy sensible, casi independiente del ángulo, sin dirección</td></tr>
<tr><td>Armónicos tisulares</td><td>Recibe al doble de la frecuencia emitida</td><td>Menos artefactos, mejor contraste en obesos</td></tr>
<tr><td>Elastografía</td><td>Rigidez tisular</td><td>Fibrosis hepática, nódulos tiroideos y mamarios</td></tr>
<tr><td>Ecografía con contraste (CEUS)</td><td>Microburbujas intravasculares</td><td>Caracterización de lesiones focales hepáticas</td></tr>
</tbody></table></div>
<h4>Ecuación Doppler</h4>
<p><b>Δf = 2 · f₀ · v · cos θ / c</b>. El desplazamiento de frecuencia es proporcional a la velocidad y al coseno del ángulo de insonación. A 90°, cos θ = 0: <b>no hay señal</b>. Para medir velocidades, mantener el ángulo <b>≤ 60°</b>.</p>
<p>Convención color: <b>rojo</b> = hacia el transductor; <b>azul</b> = alejándose («BART»: <i>Blue Away, Red Toward</i>). El color indica dirección respecto al transductor, no arteria o vena.</p>
<h4>Aliasing</h4>
<p>Aparece cuando el desplazamiento Doppler supera el <b>límite de Nyquist</b> (PRF/2). Para corregirlo: aumentar la escala/PRF, bajar la línea de base, usar menor frecuencia, reducir la profundidad o usar Doppler continuo.</p>
<h4>Bioefectos y seguridad</h4>
<ul><li><b>Índice térmico (TI)</b>: calentamiento tisular (TIS tejido blando, TIB hueso, TIC craneal).</li><li><b>Índice mecánico (MI)</b>: riesgo de cavitación.</li><li>Principio <b>ALARA</b>: tan bajo como sea razonablemente posible. Precaución especial con Doppler en el primer trimestre del embarazo.</li></ul>`
        }
      ]
    },
    {
      id: 'b3', peso: 10, titulo: 'Técnica de exploración y manejo del ecógrafo',
      descripcion: 'Identifica las diferentes técnicas de exploración ecográfica, ajustes y manejo del ecógrafo, de acuerdo con la situación clínica del paciente.',
      temas: [
        {
          titulo: 'Perillas que hay que dominar',
          html: `
<div class="tabla"><table><thead><tr><th>Control</th><th>Qué hace</th><th>Error típico</th></tr></thead><tbody>
<tr><td>Preset</td><td>Carga parámetros por órgano (abdomen, vascular, tiroides…)</td><td>Explorar todo con el preset de otro órgano</td></tr>
<tr><td>Profundidad</td><td>Campo de visión en cm</td><td>Demasiada: la estructura queda pequeña y baja el frame rate</td></tr>
<tr><td>Ganancia global</td><td>Amplifica todos los ecos <b>recibidos</b> (no aumenta la potencia emitida)</td><td>Exceso: líquidos con falsos ecos; defecto: se pierden lesiones</td></tr>
<tr><td>TGC (compensación ganancia–tiempo)</td><td>Ajusta la ganancia por profundidad para compensar la atenuación</td><td>Bandas horizontales claras/oscuras</td></tr>
<tr><td>Foco</td><td>Estrecha el haz en una profundidad: mejor resolución lateral</td><td>Foco lejos de la zona de interés</td></tr>
<tr><td>Frecuencia</td><td>Resolución vs penetración</td><td>Alta frecuencia en paciente obeso</td></tr>
<tr><td>Rango dinámico</td><td>Número de grises (contraste)</td><td>Muy bajo: imagen «dura», en blanco y negro</td></tr>
<tr><td>Potencia acústica (output)</td><td>Energía emitida; afecta MI/TI</td><td>Subir potencia en lugar de ganancia (ALARA)</td></tr>
<tr><td>Escala/PRF, filtro de pared, ángulo</td><td>Ajustes Doppler</td><td>Escala alta para flujo lento: «no hay flujo»</td></tr>
</tbody></table></div>
<div class="perla"><b>Secuencia práctica</b>Preset → profundidad (que la estructura ocupe ⅔ de la pantalla) → foco a nivel o justo por debajo de la estructura → ganancia y TGC (líquido negro, parénquima homogéneo) → zoom si hace falta → congelar y medir.</div>`
        },
        {
          titulo: 'Movimientos del transductor, ventanas y preparación',
          html: `
<ul>
<li><b>Deslizar</b> (sliding): desplazar el transductor sobre la piel para recorrer el órgano.</li>
<li><b>Rotar</b>: girar sobre su eje (de longitudinal a transversal).</li>
<li><b>Angular / abanicar</b> (fanning, tilting): inclinar sin mover el punto de contacto para barrer el órgano.</li>
<li><b>Balancear</b> (rocking): inclinar en el plano de la imagen para centrar una estructura.</li>
<li><b>Comprimir</b>: desplaza gas intestinal, valora compresibilidad (venas en TVP, apéndice).</li>
</ul>
<h4>Preparación y posición</h4>
<ul>
<li>Abdomen superior: <b>ayuno de 6–8 h</b> (vesícula distendida, menos gas).</li>
<li>Pelvis transabdominal: <b>vejiga llena</b> (ventana acústica).</li>
<li>Decúbito supino, decúbitos laterales, inspiración profunda sostenida (baja hígado y bazo), ventanas subcostal e intercostal.</li>
<li>Ergonomía: altura de la camilla, brazo apoyado, evitar abducción del hombro &gt; 30°.</li>
</ul>
<p>En urgencias (POCUS) la técnica se adapta: protocolos cortos, enfocados en una pregunta binaria (¿hay líquido libre? ¿hay derrame pericárdico?).</p>`
        }
      ]
    },
    {
      id: 'b4', peso: 20, titulo: 'Transductores',
      descripcion: 'Distingue los diferentes tipos de transductores utilizados en ecografía, para obtener mejores imágenes y optimizarlas.',
      temas: [
        {
          titulo: 'Tipos de transductor y su uso',
          html: `
<figure class="fig"><svg viewBox="0 0 540 170" role="img" aria-label="Formas de imagen de los transductores lineal, convexo y sectorial">
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="30" y="20" width="120" height="110" fill="#8d9ea8" fill-opacity="0.18"/>
<path d="M210 40 A90 90 0 0 1 330 40 L360 130 L180 130 Z" fill="#8d9ea8" fill-opacity="0.18"/>
<path d="M455 20 L395 130 L515 130 Z" fill="#8d9ea8" fill-opacity="0.18"/></g>
<g fill="#f0b84a"><rect x="30" y="14" width="120" height="6"/><path d="M210 40 A90 90 0 0 1 330 40 L326 34 A84 84 0 0 0 214 34 Z"/><rect x="445" y="14" width="20" height="6"/></g>
<g font-family="JetBrains Mono, monospace" font-size="12" fill="currentColor" text-anchor="middle">
<text x="90" y="152">Lineal 5–15 MHz</text><text x="270" y="152">Convexo 2–5 MHz</text><text x="455" y="152">Sectorial 1–5 MHz</text></g></svg>
<figcaption>Huella (ámbar) y forma del campo de visión de cada transductor.</figcaption></figure>
<div class="tabla"><table><thead><tr><th>Transductor</th><th>Frecuencia</th><th>Imagen</th><th>Usos</th></tr></thead><tbody>
<tr><td><b>Lineal</b></td><td class="mono">5–15 MHz</td><td>Rectangular, campo cercano ancho</td><td>Tiroides, mama, partes blandas, músculo-esquelético, vascular periférico, accesos vasculares, pleura, apéndice, pared abdominal</td></tr>
<tr><td><b>Convexo (curvo)</b></td><td class="mono">2–5 MHz</td><td>Abanico ancho en profundidad</td><td>Abdomen, obstetricia, pelvis transabdominal, FAST</td></tr>
<tr><td><b>Sectorial (phased array)</b></td><td class="mono">1–5 MHz</td><td>Abanico desde un punto, huella pequeña</td><td>Ecocardiografía, ventanas intercostales, FAST cardíaco</td></tr>
<tr><td><b>Endocavitario (microconvexo)</b></td><td class="mono">5–9 MHz</td><td>Abanico amplio, alta resolución cercana</td><td>Transvaginal, transrectal (próstata)</td></tr>
<tr><td>Microconvexo</td><td class="mono">4–10 MHz</td><td>Abanico con huella pequeña</td><td>Pediatría, neonatos, espacios reducidos</td></tr>
<tr><td>Otros</td><td>—</td><td>—</td><td>Transesofágico, intraoperatorio, «palo de hockey», volumétrico 3D/4D</td></tr>
</tbody></table></div>`
        },
        {
          titulo: 'Anatomía del transductor y optimización',
          html: `
<ul>
<li><b>Elementos piezoeléctricos</b> (PZT o compuestos): generan y reciben el ultrasonido. En arreglos, cientos de elementos disparados en secuencia.</li>
<li><b>Capa de acoplamiento (matching layer)</b>: impedancia intermedia entre cristal y piel; mejora la transmisión. Su grosor ideal es ¼ de λ.</li>
<li><b>Material de respaldo (backing / amortiguación)</b>: acorta el pulso → mejora la <b>resolución axial</b> (a costa de sensibilidad).</li>
<li><b>Lente acústica</b>: enfoca en el plano de elevación (grosor de corte).</li>
<li>La frecuencia del transductor depende del <b>grosor del cristal</b>: más delgado = mayor frecuencia.</li>
<li>Arreglo <b>lineal secuencial</b>: dispara grupos de elementos en línea. Arreglo <b>fásico (phased)</b>: dispara todos con retrasos electrónicos para dirigir y enfocar el haz.</li>
</ul>
<div class="perla"><b>Regla de elección</b>Usa la <b>mayor frecuencia que alcance la profundidad</b> de interés. Superficial (&lt; 4–5 cm) → lineal. Profundo → convexo. Ventana pequeña entre costillas → sectorial.</div>
<p>Cuidado: no golpear el transductor (se dañan los cristales), desinfección según el nivel de riesgo (alto nivel para endocavitarios, con funda), revisar el cable.</p>`
        }
      ]
    },
    {
      id: 'b5', peso: 20, titulo: 'Aplicaciones clínicas, alcances y limitaciones',
      descripcion: 'Comprende las aplicaciones clínicas de la ecografía, sus indicaciones, alcances y limitaciones.',
      temas: [
        {
          titulo: 'Ventajas, limitaciones e indicaciones',
          html: `
<div class="tabla"><table><thead><tr><th>Ventajas</th><th>Limitaciones</th></tr></thead><tbody>
<tr><td>Sin radiación ionizante (embarazo, niños, controles seriados)</td><td>Operador-dependiente</td></tr>
<tr><td>Tiempo real, dinámica (peristalsis, compresión, Valsalva)</td><td>El gas y el hueso bloquean el haz</td></tr>
<tr><td>Portátil, a pie de cama, bajo costo</td><td>Obesidad: atenuación, menor calidad</td></tr>
<tr><td>Doppler: flujo sin contraste</td><td>Campo de visión limitado; difícil estadificar</td></tr>
<tr><td>Guía de procedimientos (punciones, accesos, drenajes)</td><td>Artefactos que simulan o esconden lesiones</td></tr>
<tr><td>Repetible, interacción con el paciente (Murphy ecográfico)</td><td>Retroperitoneo y páncreas a menudo parcialmente visibles</td></tr>
</tbody></table></div>
<h4>Indicaciones frecuentes</h4>
<ul>
<li>Abdomen: dolor en hipocondrio derecho, ictericia (¿obstructiva o no?), masa palpable, elevación de enzimas hepáticas, insuficiencia renal (tamaño, hidronefrosis), cólico renal.</li>
<li>Pelvis y obstetricia; tiroides; mama; partes blandas; escroto.</li>
<li>Vascular: TVP, carótidas, aneurisma de aorta.</li>
<li>Procedimientos guiados: paracentesis, toracocentesis, biopsias, catéteres venosos centrales.</li>
</ul>
<p>Cuándo pasar a otro estudio: estadificación oncológica, trauma grave estable (TC), litiasis ureteral distal no visible (TC sin contraste), vía biliar distal (colangio-RM, ecoendoscopia).</p>`
        },
        {
          titulo: 'Ecografía en el punto de atención (POCUS): FAST y eFAST',
          html: `
<p><b>FAST</b> (<i>Focused Assessment with Sonography for Trauma</i>) busca líquido libre (sangre) y derrame pericárdico en el trauma.</p>
<ol>
<li><b>Hepatorrenal (Morison)</b>: el espacio supramesocólico más declive en decúbito supino; incluir el polo inferior del riñón y la gotera parietocólica derecha.</li>
<li><b>Esplenorrenal / perisplénico</b>: el líquido suele acumularse primero <b>entre diafragma y bazo</b>.</li>
<li><b>Pélvica</b>: rectovesical (hombre) o fondo de saco de Douglas (mujer); vejiga llena ayuda.</li>
<li><b>Subxifoidea</b>: derrame pericárdico / taponamiento.</li>
</ol>
<p><b>eFAST</b> agrega ambos hemitórax: <b>neumotórax</b> (ausencia de deslizamiento pleural, ausencia de líneas B, signo del «código de barras» en modo M, <b>punto pulmón</b> = diagnóstico) y hemotórax.</p>
<div class="perla"><b>Alcance</b>FAST positivo en paciente <b>inestable</b> → quirófano. FAST negativo <b>no descarta</b> lesión de víscera sólida, retroperitoneal ni de víscera hueca; repetir y/o TC si el paciente lo permite. Se necesitan unos 200 ml de líquido para que la ventana de Morison sea positiva con fiabilidad.</div>`
        }
      ]
    }
  ],

  tarjetas: [
    ['b1', '¿Qué significa «anecoico»? Da 3 ejemplos.', 'Ausencia de ecos internos (negro). Líquido simple: vesícula, vejiga, quiste simple.'],
    ['b1', '¿Con respecto a qué se describe la ecogenicidad?', 'Siempre de forma relativa, comparando con un tejido de referencia (habitualmente el parénquima vecino).'],
    ['b1', 'Sombra acústica «limpia» vs «sucia»', 'Limpia (anecoica, nítida): cálculo o calcio. Sucia (con reverberaciones): gas.'],
    ['b1', '¿Qué produce el refuerzo acústico posterior?', 'Una estructura que atenúa menos que el tejido vecino (líquido): los ecos detrás de ella se ven más brillantes. Típico de quistes.'],
    ['b1', 'Artefacto en cola de cometa en la pared vesicular: ¿qué sugiere?', 'Adenomiomatosis (cristales de colesterol en los senos de Rokitansky-Aschoff).'],
    ['b1', 'Orientación del marcador en un corte transversal abdominal', 'Hacia la derecha del paciente; la derecha del paciente aparece a la izquierda de la pantalla (como en TC).'],
    ['b1', '¿Qué es la imagen en espejo?', 'Duplicación de una estructura al otro lado de un reflector muy especular (p. ej. hígado sobre el diafragma).'],
    ['b2', 'Velocidad media del sonido en tejido blando', '1540 m/s.'],
    ['b2', 'Ecuación de la onda', 'c = f × λ (velocidad = frecuencia × longitud de onda).'],
    ['b2', 'Regla de los 13 µs', 'Cada cm de profundidad equivale a 13 µs de tiempo de ida y vuelta del pulso en tejido blando.'],
    ['b2', 'Fórmula de la impedancia acústica', 'Z = densidad × velocidad de propagación (rayls). Los ecos nacen en interfaces con diferente impedancia.'],
    ['b2', 'Atenuación en tejido blando', '≈ 0,5 dB/cm/MHz. Aumenta con la frecuencia y la profundidad.'],
    ['b2', '¿De qué depende la resolución axial?', 'De la longitud espacial del pulso (resolución = SPL/2). Mejora con mayor frecuencia y pulsos cortos.'],
    ['b2', '¿De qué depende la resolución lateral?', 'Del ancho del haz; es óptima en la zona focal.'],
    ['b2', 'Efecto piezoeléctrico directo vs inverso', 'Inverso: electricidad → vibración (emisión). Directo: presión del eco → voltaje (recepción).'],
    ['b2', 'Ecuación Doppler', 'Δf = 2·f₀·v·cos θ / c. A 90° no hay señal; medir con ángulo ≤ 60°.'],
    ['b2', 'Límite de Nyquist', 'PRF/2. Si el desplazamiento Doppler lo supera → aliasing.'],
    ['b2', '5 maneras de corregir el aliasing', 'Subir escala/PRF, bajar línea de base, bajar frecuencia, reducir profundidad, usar Doppler continuo.'],
    ['b2', 'Ventajas del Power Doppler', 'Más sensible para flujo lento, casi independiente del ángulo, sin aliasing. No da dirección ni velocidad.'],
    ['b2', 'Qué miden MI y TI', 'MI: riesgo de efectos mecánicos (cavitación). TI: riesgo de calentamiento tisular. Principio ALARA.'],
    ['b3', '¿La ganancia aumenta la energía emitida?', 'No. Amplifica los ecos recibidos. La energía emitida es la potencia acústica (output).'],
    ['b3', '¿Para qué sirve el TGC?', 'Compensa la atenuación con la profundidad, ajustando la ganancia por niveles para lograr una imagen uniforme.'],
    ['b3', '¿Dónde colocar el foco?', 'A nivel o ligeramente por debajo de la estructura de interés.'],
    ['b3', 'Preparación para ecografía de abdomen superior', 'Ayuno de 6–8 h: vesícula distendida y menos gas intestinal.'],
    ['b3', 'Movimiento del transductor para barrer un órgano sin mover el punto de contacto', 'Angular / abanicar (fanning, tilting).'],
    ['b4', 'Transductor de elección para tiroides o accesos vasculares', 'Lineal de alta frecuencia (5–15 MHz).'],
    ['b4', 'Transductor de elección para abdomen', 'Convexo de 2–5 MHz.'],
    ['b4', 'Transductor para ventanas intercostales y corazón', 'Sectorial (phased array) 1–5 MHz: huella pequeña.'],
    ['b4', 'Función del material de respaldo (backing)', 'Amortigua la vibración y acorta el pulso → mejora la resolución axial.'],
    ['b4', 'Función de la capa de acoplamiento', 'Impedancia intermedia entre cristal y piel que mejora la transmisión del sonido (grosor ¼ λ).'],
    ['b4', 'Grosor del cristal y frecuencia', 'Cristal más delgado → mayor frecuencia.'],
    ['b5', 'Ventanas del FAST', 'Hepatorrenal (Morison), perisplénica/esplenorrenal, pélvica y subxifoidea pericárdica. eFAST agrega ambos tórax.'],
    ['b5', 'Signo diagnóstico de neumotórax en ecografía', 'El punto pulmón (lung point). Además: ausencia de deslizamiento y «código de barras» en modo M.'],
    ['b5', 'FAST negativo en trauma estable: ¿qué significa?', 'No descarta lesión de víscera sólida, retroperitoneo o víscera hueca. Repetir y/o TC.'],
    ['b5', '3 limitaciones físicas de la ecografía', 'Gas, hueso y obesidad (atenuación). Además es operador-dependiente.']
  ],

  preguntas: [
    { c: 'b1', q: 'Una lesión hepática presenta menos ecos que el parénquima hepático circundante. ¿Cómo se describe?', o: ['Anecoica', 'Hipoecoica', 'Isoecoica', 'Hiperecoica'], a: 1, e: 'La ecogenicidad es relativa: menos ecos que la referencia es hipoecoica. Anecoica significa ausencia total de ecos.' },
    { c: 'b1', q: '¿Qué artefacto se observa típicamente detrás de un quiste simple?', o: ['Sombra acústica', 'Refuerzo acústico posterior', 'Imagen en espejo', 'Aliasing'], a: 1, e: 'El líquido atenúa menos que el tejido vecino, por lo que los ecos posteriores se ven más brillantes.' },
    { c: 'b1', q: 'Un foco hiperecoico intestinal produce una sombra posterior con ecos de reverberación. Lo más probable es:', o: ['Cálculo', 'Calcificación', 'Gas', 'Hueso'], a: 2, e: 'El gas produce una sombra «sucia» con reverberaciones; los cálculos y el calcio producen sombra «limpia».' },
    { c: 'b1', q: 'En un corte transversal con convención radiológica, la derecha del paciente aparece:', o: ['A la derecha de la pantalla', 'A la izquierda de la pantalla', 'Arriba', 'Depende del transductor'], a: 1, e: 'Igual que en la TC: el marcador apunta a la derecha del paciente, que se muestra a la izquierda de la pantalla.' },
    { c: 'b1', q: 'El artefacto en cola de cometa en la pared de la vesícula biliar sugiere:', o: ['Colecistitis enfisematosa', 'Adenomiomatosis', 'Pólipo adenomatoso', 'Barro biliar'], a: 1, e: 'Los cristales de colesterol en los senos de Rokitansky-Aschoff generan reverberación en cola de cometa.' },
    { c: 'b2', q: 'La velocidad de propagación del ultrasonido en un medio depende de:', o: ['La frecuencia del transductor', 'La potencia emitida', 'La rigidez y la densidad del medio', 'La ganancia'], a: 2, e: 'La velocidad es una propiedad del medio. El equipo asume 1540 m/s para tejido blando.' },
    { c: 'b2', q: 'Si se aumenta la frecuencia del transductor, ¿qué ocurre?', o: ['Mejor resolución y mayor penetración', 'Mejor resolución y menor penetración', 'Peor resolución y mayor penetración', 'No cambia la atenuación'], a: 1, e: 'La atenuación aumenta con la frecuencia: más resolución a costa de penetración.' },
    { c: 'b2', q: 'Un eco regresa al transductor 65 µs después de emitido el pulso. ¿A qué profundidad está el reflector?', o: ['2,5 cm', '5 cm', '10 cm', '6,5 cm'], a: 1, e: 'Regla de 13 µs por cm: 65 / 13 = 5 cm.' },
    { c: 'b2', q: 'La razón principal para usar gel acústico es:', o: ['Lubricar la piel', 'Eliminar la interfaz aire-piel, de muy alta diferencia de impedancia', 'Enfriar el transductor', 'Aumentar la frecuencia'], a: 1, e: 'El aire refleja casi el 100 % del haz; el gel elimina el aire entre transductor y piel.' },
    { c: 'b2', q: 'Al medir velocidad con Doppler pulsado, el ángulo de insonación debe ser:', o: ['90°', '≤ 60°', 'Exactamente 0°', 'Indiferente'], a: 1, e: 'Por el coseno: a 90° no hay desplazamiento Doppler y por encima de 60° el error de cálculo aumenta mucho.' },
    { c: 'b2', q: 'En una estenosis arterial aparece un mosaico de colores con inversión aparente del flujo. ¿Cuál es la primera medida?', o: ['Bajar la escala (PRF)', 'Subir la escala (PRF) o bajar la línea de base', 'Aumentar la frecuencia', 'Aumentar la profundidad'], a: 1, e: 'Es aliasing: el desplazamiento supera PRF/2. Subir la escala, bajar la línea de base, bajar la frecuencia o reducir profundidad.' },
    { c: 'b2', q: '¿Qué modo es más sensible para flujo lento, aunque no indica dirección?', o: ['Doppler color', 'Power Doppler', 'Doppler continuo', 'Modo M'], a: 1, e: 'El Power Doppler codifica la amplitud de la señal: sensible, casi independiente del ángulo, sin dirección.' },
    { c: 'b2', q: 'La resolución lateral es mejor:', o: ['En el campo lejano', 'En la zona focal', 'Con mayor profundidad', 'Con pulsos largos'], a: 1, e: 'Depende del ancho del haz, que es mínimo en la zona focal.' },
    { c: 'b3', q: 'El parénquima profundo se ve oscuro y el superficial bien. ¿Qué ajuste corrige mejor esto?', o: ['Disminuir la ganancia global', 'Aumentar el TGC de los niveles profundos', 'Bajar la frecuencia a 1 MHz siempre', 'Activar Doppler color'], a: 1, e: 'El TGC compensa la atenuación con la profundidad ajustando la ganancia por niveles.' },
    { c: 'b3', q: 'Según el principio ALARA, para ver mejor una imagen débil conviene primero:', o: ['Aumentar la potencia acústica', 'Aumentar la ganancia', 'Aumentar el tiempo de examen', 'Usar Doppler pulsado'], a: 1, e: 'La ganancia amplifica la señal recibida sin aumentar la exposición del paciente.' },
    { c: 'b3', q: 'Paciente para ecografía de vesícula biliar. Indicación de preparación:', o: ['Vejiga llena', 'Ayuno de 6–8 horas', 'Comida grasa 1 h antes', 'Enema evacuante'], a: 1, e: 'El ayuno mantiene la vesícula distendida y reduce el gas.' },
    { c: 'b4', q: 'Para canalizar una vena yugular interna bajo guía ecográfica, el transductor ideal es:', o: ['Convexo 3,5 MHz', 'Lineal 7–12 MHz', 'Sectorial 2 MHz', 'Endocavitario'], a: 1, e: 'Estructura superficial: se necesita alta frecuencia y campo cercano amplio.' },
    { c: 'b4', q: 'El componente del transductor que acorta el pulso y mejora la resolución axial es:', o: ['La lente acústica', 'La capa de acoplamiento', 'El material de respaldo (backing)', 'El cable coaxial'], a: 2, e: 'El backing amortigua la vibración del cristal y acorta la longitud del pulso.' },
    { c: 'b4', q: 'Para evaluar el corazón a través de los espacios intercostales se prefiere:', o: ['Lineal', 'Convexo', 'Sectorial (phased array)', 'Microconvexo endocavitario'], a: 2, e: 'Su huella pequeña cabe entre las costillas y el haz se abre en profundidad.' },
    { c: 'b4', q: 'Paciente obeso, se busca evaluar el hígado. ¿Qué cambio mejora la penetración?', o: ['Transductor lineal de 12 MHz', 'Transductor convexo de menor frecuencia y armónicos', 'Aumentar la frecuencia', 'Disminuir la profundidad'], a: 1, e: 'Menor frecuencia penetra más; los armónicos reducen artefactos en pacientes difíciles.' },
    { c: 'b5', q: 'Paciente politraumatizado, hipotenso, con FAST positivo en la ventana de Morison. Conducta:', o: ['TC de abdomen urgente', 'Repetir FAST en 6 horas', 'Laparotomía exploradora', 'Observación'], a: 2, caso: true, e: 'Trauma inestable con FAST positivo indica hemoperitoneo: quirófano. La TC se reserva para pacientes estables.' },
    { c: 'b5', q: '¿En qué ventana del FAST se acumula líquido con más frecuencia en decúbito supino (abdomen superior)?', o: ['Perisplénica', 'Hepatorrenal (Morison)', 'Subxifoidea', 'Paracólica izquierda'], a: 1, e: 'El espacio de Morison es el más declive del compartimento supramesocólico.' },
    { c: 'b5', q: 'Un hallazgo ecográfico que confirma neumotórax es:', o: ['Líneas B', 'Signo de la orilla del mar en modo M', 'Punto pulmón', 'Deslizamiento pleural presente'], a: 2, e: 'El punto pulmón marca la transición entre pulmón que se desliza y aire: 100 % específico.' },
    { c: 'b5', q: '¿Cuál NO es una limitación de la ecografía?', o: ['Gas intestinal', 'Dependencia del operador', 'Radiación ionizante', 'Obesidad'], a: 2, e: 'La ecografía no usa radiación ionizante; es una de sus principales ventajas.' }
  ],

  glosario: [
    ['ALARA', 'As Low As Reasonably Achievable: usar la menor exposición acústica que permita el diagnóstico.'],
    ['Aliasing', 'Artefacto Doppler cuando el desplazamiento de frecuencia supera el límite de Nyquist (PRF/2).'],
    ['Anecoico', 'Sin ecos internos (negro). Típico del líquido simple.'],
    ['Atenuación', 'Pérdida de energía del haz al atravesar tejidos (absorción, reflexión, dispersión). ≈ 0,5 dB/cm/MHz.'],
    ['Impedancia acústica', 'Densidad × velocidad. Las diferencias de impedancia entre tejidos generan los ecos.'],
    ['Piezoeléctrico', 'Material que convierte energía eléctrica en mecánica y viceversa (cristales PZT).'],
    ['PRF', 'Frecuencia de repetición de pulsos. Determina la escala Doppler y el límite de Nyquist.'],
    ['Refuerzo acústico', 'Aumento de brillo detrás de una estructura de baja atenuación (líquido).'],
    ['Reverberación', 'Ecos repetidos y equidistantes entre dos interfaces muy reflectantes.'],
    ['Sombra acústica', 'Zona sin ecos detrás de una estructura que refleja o absorbe casi todo el haz.'],
    ['TGC', 'Compensación ganancia–tiempo: ajuste de ganancia por profundidad.'],
    ['Zona focal', 'Región donde el haz es más estrecho y la resolución lateral es óptima.'],
    ['Índice mecánico (MI)', 'Estimación del riesgo de cavitación por el ultrasonido.'],
    ['Índice térmico (TI)', 'Estimación del aumento de temperatura tisular.'],
    ['Armónicos tisulares', 'Imagen formada con el doble de la frecuencia emitida; reduce artefactos.'],
    ['FAST', 'Ecografía focalizada en trauma para detectar líquido libre y derrame pericárdico.']
  ]
});
