ECO.curso({
  id: 'abd1',
  codigo: '749948A',
  titulo: 'Ecografía Abdominal I',
  corto: 'Abdominal I',
  resumen: 'Hígado y sistema porta, vesícula y vías biliares, y páncreas: técnica, anatomía normal, patrones patológicos y correlación clínica.',
  criterios: [
    {
      id: 'a1', peso: 10, pesoEstimado: true, titulo: 'Técnica y programación del equipo',
      descripcion: 'Aplica la técnica, programación y manejo correcto del equipo de acuerdo con el órgano evaluado y sus características propias.',
      temas: [
        {
          titulo: 'Reglas generales del abdomen superior',
          fuente: 'Bates, cap. 2, pp. 21–22 (Cuadro 2.1)',
          html: `
<ul>
<li>Explorar de forma <b>sistemática</b> todo el abdomen superior (hígado, vesícula, vía biliar, páncreas, bazo, riñones, retroperitoneo): muchos hallazgos importantes son fortuitos (carcinoma renal, aneurisma de aorta).</li>
<li>Cada órgano en <b>al menos dos planos</b>, preferiblemente perpendiculares: reduce omisiones y ayuda a separar artefacto de patología.</li>
<li>Al menos <b>dos posiciones</b> del paciente (decúbitos, de pie): órganos inaccesibles se aclaran y el intestino se aparta.</li>
<li>Combinar abordaje <b>subcostal e intercostal</b>; usar planos oblicuos y seguir conductos y vasos «como si el transductor fueran tus ojos».</li>
<li>La inspiración profunda ayuda a veces, pero puede llenar el estómago de aire; muchas veces rinde más el abordaje intercostal con respiración suave.</li>
<li>Un paciente cómodo (cabecera elevada si está disneico) se explora mejor. Primero barrer el órgano completo, luego tomar las imágenes.</li>
</ul>
<div class="perla"><b>Cuadro 2.1</b>«Si no ha usado la mano izquierda en toda la exploración, no ha realizado un examen óptimo»: hay que manejar los controles mientras se explora.</div>`
        },
        {
          titulo: 'Vesícula y colédoco: cómo explorarlos',
          fuente: 'Bates, cap. 2, pp. 34–43; ABC, p. 20',
          html: `
<h4>Vesícula</h4>
<ul>
<li><b>Ayuno de al menos 6 h</b>: al comer, la vesícula se vacía y no se valora. Transductor bajo el reborde costal derecho, cortes longitudinales y transversales; intercostal o <b>decúbito lateral izquierdo</b> cuando haga falta (ABC).</li>
<li>Frecuencia lo más alta posible (≥ 5 MHz en vesículas anteriores), alta densidad lineal, <b>zona focal en la pared posterior</b>, TGC para quitar reverberaciones del campo cercano y armónicas.</li>
<li>Siempre <b>dos planos y dos posiciones</b>. Desplegar el «gorro frigio» en decúbito con el lado derecho elevado, casi prono o de pie.</li>
<li>Medir la pared en <b>corte longitudinal</b> y perpendicular a ella: un corte transversal oblicuo la sobrestima.</li>
</ul>
<h4>Si no encuentras la vesícula</h4>
<p>Pregunta por cirugía previa (las cicatrices laparoscópicas no se ven en la sala oscura), confirma el ayuno, busca una vesícula ectópica (incluso pélvica), descarta artefacto de campo cercano y explora en transversal justo por debajo de la porta hepatis: una sombra fuerte en la fosa vesicular sugiere vesícula contraída llena de cálculos. La agenesia es rara.</p>
<h4>Colédoco</h4>
<ul>
<li>Porción proximal: anterior y algo a la derecha de la vena porta; supino con abordaje intercostal derecho u oblicuo con el lado derecho elevado.</li>
<li>Porción distal (la difícil, oculta por el duodeno): oblicuo derecho o decúbito, presión suave, <b>agua en el estómago</b>, o localizarlo en la cabeza del páncreas y seguirlo hacia el hígado.</li>
<li>Medir el <b>diámetro interno en su punto más ancho en corte longitudinal</b>; nunca en transversal (sobrestima).</li>
<li>Ante la duda entre conducto y vaso, Doppler color; pero no lo uses de rutina para buscar el colédoco: baja la densidad lineal y el vaso perpendicular puede no colorear.</li>
</ul>`
        },
        {
          titulo: 'Páncreas y Doppler hepático: técnica',
          fuente: 'Bates, cap. 5, pp. 155–158; cap. 2, pp. 32–34; ABC, p. 25',
          html: `
<h4>Páncreas</h4>
<ul>
<li>Transversal en epigastrio usando el <b>lóbulo hepático izquierdo como ventana</b>, angulando un poco caudal. Marcador: la <b>vena esplénica</b>; el páncreas se apoya sobre ella y la AMS (con vaina fibrosa hiperecoica) queda detrás.</li>
<li>La cola es algo más cefálica que la cabeza: transductor <b>oblicuo</b>. La cola también se ve por el <b>bazo</b> en corte coronal.</li>
<li>Cabeza oculta por gas: girar al paciente con el <b>lado izquierdo elevado</b> (el gas duodenal sube hacia la cola). Para la cola, lado derecho elevado.</li>
<li>Si aún no se ve: <b>Valsalva con protrusión del abdomen</b>, explorar de pie, comprimir el epigastrio, inspiración o espiración forzada, o dar <b>agua (≈ 300 ml)</b> para usar el estómago como ventana.</li>
</ul>
<h4>Doppler hepático</h4>
<ul>
<li>Porta y ramas: abordaje <b>oblicuo derecho intercostal</b> para que el vaso vaya hacia el transductor (ángulo &lt; 60°).</li>
<li>Arteria hepática: usar la vena porta principal como guía y explorar por un espacio intercostal derecho; si no se ve, Doppler energía.</li>
<li>El Doppler se interpreta siempre junto con la imagen en tiempo real y la clínica: solo, induce a error.</li>
</ul>`
        }
      ]
    },
    {
      id: 'a2', peso: 20, pesoEstimado: true, titulo: 'Anatomía ecográfica normal',
      descripcion: 'Evalúa la anatomía normal del hígado, vías biliares y del páncreas, de acuerdo con patrones ecográficos estándares.',
      temas: [
        {
          titulo: 'Referencias anatómicas: cortes estándar del abdomen superior',
          fuente: 'Bates, cap. 2, pp. 22–34 y apéndice 2A (figs. 2A.1–2A.7, pp. 47–50); ABC, pp. 12–13, 25',
          html: `
<p>Bates resume la anatomía del abdomen superior en siete cortes estándar (apéndice 2A). Aprenderlos de memoria permite reconocer cualquier estructura por su relación con las vecinas.</p>
<div class="tabla"><table><thead><tr><th>Corte</th><th>Qué se ve</th><th>Para qué</th></tr></thead><tbody>
<tr><td>2A.1 Longitudinal del lóbulo derecho</td><td>Lóbulo derecho, vesícula, riñón derecho, cuadrado lumbar</td><td>Tamaño hepático, comparar ecogenicidad hígado–riñón, espacio de Morison</td></tr>
<tr><td>2A.2 Longitudinal por la VCI</td><td>VCI, caudado, ligamento venoso, cabeza del páncreas, VMS, proceso uncinado, suprarrenal y pilar derechos</td><td>Caudado (por delante de la VCI), cabeza del páncreas</td></tr>
<tr><td>2A.3 Longitudinal en la línea media (aorta)</td><td>Lóbulo izquierdo, aorta, tronco celíaco, AMS, cuerpo del páncreas, vena esplénica, vena renal izquierda, esófago</td><td>Ramas de la aorta; páncreas sobre la vena esplénica</td></tr>
<tr><td>2A.4 Oblicuo por el colédoco</td><td>Colédoco por delante de la porta, arteria hepática entre ambos, cabeza del páncreas, gastroduodenal</td><td>Medir el colédoco y seguirlo hasta la ampolla</td></tr>
<tr><td>2A.5 Transversal oblicuo subcostal</td><td>Venas hepáticas derecha, media e izquierda entrando en la VCI («conejito»), aorta, pilar</td><td>Segmentos hepáticos superiores (VII, VIII, IV, II)</td></tr>
<tr><td>2A.6 Transversal en la porta hepatis</td><td>Ligamento redondo, ramas portales derecha e izquierda, VCI, aorta, bazo, suprarrenal</td><td>Plano portal: separa segmentos superiores de inferiores</td></tr>
<tr><td>2A.7 Transversal a la altura del páncreas</td><td>Cabeza, cuerpo y cola, colédoco, gastroduodenal, VMS, AMS, vena esplénica, VRI, aorta, VCI, riñones</td><td>Páncreas y sus referencias vasculares</td></tr>
</tbody></table></div>
<h4>Reglas para no confundirse</h4>
<ul>
<li><b>Porta vs vena hepática</b>: la porta tiene <b>paredes brillantes</b> (vaina fibrosa de la tríada portal) y va hacia el hilio en horizontal; las hepáticas tienen paredes casi invisibles y convergen hacia la VCI en vertical. Un corte que muestra una de ellas a lo largo suele mostrar la otra en sección.</li>
<li><b>Colédoco vs arteria</b>: en el hilio, el colédoco va por delante y a la derecha de la porta; la arteria hepática cruza entre ambos. Si hay duda, <b>Doppler</b>: el conducto no tiene flujo.</li>
<li><b>Caudado</b>: está entre la VCI (detrás) y el ligamento venoso (delante). Drena directamente a la VCI.</li>
<li><b>Ligamento redondo y falciforme</b>: estructuras lineales hiperecoicas en el lóbulo izquierdo; el redondo puede simular una lesión en transversal (no tiene efecto de masa).</li>
<li><b>Páncreas</b>: siempre por delante de la <b>vena esplénica</b>; la <b>AMS</b>, rodeada de grasa brillante, por detrás de ella; la <b>VMS</b> a la derecha de la AMS; la cabeza, a la derecha de la VMS.</li>
</ul>`
        },
        {
          titulo: 'Hígado: aspecto, tamaño y segmentos',
          fuente: 'ABC, pp. 12–14; Bates, cap. 2, pp. 22–28',
          html: `
<ul>
<li>Órgano macizo más grande (≈ 1,5 kg). El <b>ligamento falciforme</b> separa los lóbulos anatómicos; rodea la vena porta izquierda y desciende como <b>ligamento redondo</b>. El <b>ligamento venoso</b> separa el caudado.</li>
<li>Parénquima <b>homogéneo, de grano fino</b>; ecogenicidad <b>igual o ligeramente mayor que la corteza renal</b> y ligeramente <b>menor que el bazo</b>. Cápsula fina hiperecoica (mejor a 7,5 MHz).</li>
<li><b>Tamaño</b>: diámetro longitudinal del lóbulo derecho en línea medioclavicular <b>&lt; 15 cm</b> (ABC). El borde inferior termina <b>en punta</b>, anterior al polo inferior del riñón derecho. Bates advierte que las medidas son inexactas y que el tamaño se valora mucho de forma subjetiva.</li>
<li><b>Caudado</b>: no debe superar el <b>35 % del lóbulo izquierdo</b> (ABC); si lo supera, pensar en cirrosis.</li>
<li><b>Lóbulo de Riedel</b>: prolongación en lengua del lóbulo derecho (segmento VI) por debajo del riñón; no es hepatomegalia. Para diferenciarlos mira el <b>lóbulo izquierdo</b>: si también está abultado y redondeado, es hepatomegalia (Bates).</li>
</ul>
<h4>Segmentos de Couinaud (ABC)</h4>
<div class="tabla"><table><thead><tr><th>Segmento</th><th>Cómo reconocerlo</th></tr></thead><tbody>
<tr><td>I (caudado)</td><td>Posterior, entre la VCI y el ligamento venoso</td></tr>
<tr><td>II</td><td>Lóbulo izquierdo superior, cerca de la cúpula</td></tr>
<tr><td>III</td><td>Lóbulo izquierdo inferior, medial y anterior</td></tr>
<tr><td>IV (IVa/IVb)</td><td>Entre la fosa vesicular y el ligamento falciforme</td></tr>
<tr><td>V</td><td>Justo debajo de la vesícula</td></tr>
<tr><td>VI</td><td>Posteroinferior derecho, en relación con el polo superior del riñón derecho</td></tr>
<tr><td>VII</td><td>Superior y posterior al VI</td></tr>
<tr><td>VIII</td><td>Anterosuperior derecho, junto al diafragma</td></tr>
</tbody></table></div>
<p>Las <b>venas hepáticas</b> separan arriba los segmentos VII, VIII, IV y II; bajando aparece la <b>vena porta</b>, por debajo de la cual están V y VI. Un ecografista experto localiza lesiones por segmentos con exactitud comparable a la RM (Bates).</p>`
        },
        {
          titulo: 'Vasos hepáticos y Doppler normal',
          fuente: 'Bates, cap. 2, pp. 28–34; ABC, p. 13',
          html: `
<div class="tabla"><table><thead><tr><th>Vaso</th><th>Modo B</th><th>Doppler normal</th></tr></thead><tbody>
<tr><td><b>Vena porta</b></td><td>Paredes <b>gruesas e hiperecoicas</b> (vaina fibrosa de la tríada portal). Diámetro variable, en general <b>≤ 16 mm</b> en reposo (Bates); aumenta con la inspiración y tras comer</td><td><b>Hepatópeto</b>, monofásico con ondulaciones respiratorias y cardíacas; <b>12–20 cm/s</b></td></tr>
<tr><td><b>Venas hepáticas</b> (derecha, media, izquierda)</td><td>Paredes finas, casi imperceptibles (brillan solo si el haz es perpendicular); convergen en la VCI</td><td><b>Trifásico</b>: azul con breve rojo en la sístole auricular</td></tr>
<tr><td><b>Arteria hepática</b></td><td>Pequeña y tortuosa, anterior a la porta principal</td><td>Baja resistencia, flujo diastólico continuo; en color, rojo más pálido (más rápido)</td></tr>
</tbody></table></div>
<ul>
<li>En la porta hepatis la arteria hepática suele cruzar por delante de la porta y el conducto común va por delante de ambas (variante común: arteria delante del conducto).</li>
<li>La vena hepática media y la izquierda suelen formar tronco común; están separadas en el 15–35 %.</li>
<li>La <b>ausencia de aumento posprandial</b> del diámetro portal sugiere hipertensión portal.</li>
</ul>`
        },
        {
          titulo: 'Vesícula y vía biliar normales',
          fuente: 'ABC, pp. 20, 24; Bates, cap. 2, pp. 34–43',
          html: `
<ul>
<li>Vesícula en ayunas: estructura <b>anecoica</b> ovalada o en pera, en la fosa vesicular (cara inferior del lóbulo derecho). Siempre debe ser anecoica.</li>
<li><b>Pared</b>: fina e hiperecoica, <b>&lt; 3 mm</b> (ABC); Bates da <b>&lt; 2 mm</b>. Tamaño: no más de <b>10 cm</b> longitudinal y <b>4 cm</b> transversal (ABC). Bates: la forma es demasiado variable para medir; una vesícula <b>redonda y tensa</b> sugiere dilatación patológica.</li>
<li>Variantes: <b>gorro frigio</b> (fondo plegado; algunos cirujanos operan sintomáticos aun sin cálculos), posición muy variable (incluso «intrahepática» o pélvica), tabique verdadero raro (un pliegue lo simula), vesícula doble rara, agenesia rara.</li>
<li>Trampas: el <b>duodeno</b> invagina la pared posterior y simula cálculos; reexplorar con ajustes óptimos y cambiando de posición.</li>
</ul>
<h4>Conductos biliares</h4>
<div class="tabla"><table><thead><tr><th>Situación</th><th>Calibre del colédoco</th></tr></thead><tbody>
<tr><td>Adulto</td><td class="mono">≤ 6 mm (dilatado &gt; 7 mm, ABC)</td></tr>
<tr><td>Anciano</td><td class="mono">hasta 8–9 mm por pérdida de fibras elásticas (Bates); descartar obstrucción incipiente</td></tr>
<tr><td>Colecistectomizado</td><td class="mono">hasta 10 mm normal (ABC); sospechar si ≥ 10 mm (Bates)</td></tr>
<tr><td>Vía intrahepática</td><td class="mono">normalmente casi invisible; dilatada si &gt; 2 mm</td></tr>
</tbody></table></div>
<p>El conducto que se ve anterior a la porta en el hilio puede ser en realidad el hepático común: no sabemos dónde se une el cístico. Visualizar solo la porción intrahepática no basta: puede haber obstrucción incipiente con el extremo distal dilatado.</p>`
        },
        {
          titulo: 'Páncreas normal',
          fuente: 'ABC, p. 25; Bates, cap. 5, pp. 155–159',
          html: `
<ul>
<li>Órgano retroperitoneal detrás del estómago: <b>cabeza, cuerpo y cola</b> (más el proceso uncinado). No tiene cápsula: márgenes algo mal definidos.</li>
<li>Referencias (ABC, fig. 47): cabeza, cuerpo, cola, <b>confluencia esplenoportal</b>, <b>vena esplénica</b>, <b>AMS</b>, VCI y aorta. En la cabeza: colédoco en la porción lateral y <b>arteria gastroduodenal</b> anterolateral.</li>
<li><b>Ecogenicidad</b>: igual o algo mayor que el hígado (ABC). Cambia con la edad (Bates): en niños y jóvenes voluminoso e <b>hipoecoico</b>; en el adulto hiperecoico; en el anciano mucho más hiperecoico y atrófico por grasa. Lo normal en un anciano sería anormal (inflamación crónica) en un joven, y un páncreas hipoecoico en un anciano puede ser una pancreatitis aguda.</li>
<li><b>Tamaño</b> (diámetro AP, ABC): cabeza <b>≤ 3 cm</b>, cuerpo <b>≤ 2,5 cm</b>, cola <b>≤ 2 cm</b>.</li>
<li><b>Conducto pancreático</b>: puede no verse; si se ve, <b>&lt; 3 mm</b> (ABC); Bates: ≤ 2 mm en el cuerpo, donde sus paredes son perpendiculares al haz.</li>
<li>Variantes: <b>páncreas divisum</b> (hasta 10 %, predispone a pancreatitis), páncreas anular (obstrucción duodenal en la infancia), <b>ausencia focal de grasa</b> en el uncinado y la cabeza ventral (zona hipoecoica sin efecto de masa: no es tumor).</li>
<li>Trampas: estómago o duodeno con líquido simulan seudoquistes (dar un trago de agua); adenopatías epigástricas simulan masa pancreática.</li>
</ul>`
        }
      ]
    },
    {
      id: 'a3', peso: 40, pesoEstimado: true, titulo: 'Patrones ecográficos de enfermedad',
      descripcion: 'Identifica patrones ecográficos que se presentan en enfermedades de hígado, vesícula biliar y páncreas.',
      temas: [
        {
          titulo: 'Hepatopatía difusa: hepatomegalia, hepatitis, esteatosis',
          fuente: 'ABC, pp. 13–15; Bates, cap. 4, pp. 123–125, 136–139',
          html: `
<h4>Hepatomegalia (ABC)</h4>
<p>No es una enfermedad sino un signo. LHD &gt; 15 cm más signos indirectos: <b>bordes redondeados</b>, el lóbulo derecho <b>sobrepasa claramente el polo inferior del riñón derecho</b>, caudado aumentado respecto al izquierdo.</p>
<h4>Hepatitis viral aguda</h4>
<ul>
<li>Diagnóstico <b>clínico-analítico</b>; la ecografía sirve sobre todo para <b>excluir patología biliar y pancreática</b>.</li>
<li>Tres signos (ABC, fig. 16): <b>hepatomegalia</b>, <b>ecogenicidad disminuida</b> con tríadas portales brillantes («<b>cielo estrellado</b>») y <b>engrosamiento de la pared vesicular</b>. Puede ser normal.</li>
<li>Bates: esta imagen de «hígado oscuro» es inespecífica (leucemia, insuficiencia cardíaca, sida); puede haber adenopatías portales; si cronifica, hígado pequeño y nodular. VHC: hasta 20 años hasta la cirrosis y 30 hasta el CHC.</li>
</ul>
<h4>Esteatosis (hígado graso)</h4>
<ul>
<li>Causas más frecuentes: <b>obesidad, alcohol y diabetes</b>.</li>
<li><b>Leve</b>: aumento difuso de ecogenicidad respecto a la corteza renal. <b>Moderada</b>: cuesta ver los vasos intrahepáticos y el diafragma. <b>Severa</b>: vasos, región posterior del lóbulo derecho y diafragma mal visibles o ausentes (ABC).</li>
<li>Bates: la grasa aumenta la <b>ecogenicidad y la atenuación</b> (mala penetración al campo lejano, como un TGC mal puesto); la <b>fibrosis</b> aumenta la ecogenicidad pero <b>no la atenuación</b>. Es una clave para diferenciarlas.</li>
<li><b>Esteatosis focal y zonas libres de grasa</b>: formas geográficas de bordes rectos, <b>sin efecto de masa</b>, los vasos las atraviesan sin desplazarse. Sitios típicos: <b>segmento IV delante de la porta o de la vesícula</b>, caudado y lóbulo izquierdo posterior. La ecografía con contraste muestra captación idéntica al resto del hígado.</li>
<li>La <b>esteatohepatitis no alcohólica</b> (inflamación + fibrosis) puede evolucionar a cirrosis.</li>
</ul>`
        },
        {
          titulo: 'Cirrosis e hipertensión portal',
          fuente: 'ABC, p. 15; Bates, cap. 4, pp. 125–136',
          html: `
<h4>Cirrosis: hallazgos (ABC + Bates, tabla 4.4)</h4>
<ul>
<li>Puede verse <b>normal</b> en fases iniciales.</li>
<li><b>Redistribución del volumen</b>: al inicio puede crecer; después hígado <b>pequeño y retraído</b> con <b>caudado relativamente aumentado</b> (&gt; 35 % del lóbulo izquierdo) o lóbulo izquierdo hipertrófico.</li>
<li><b>Superficie nodular</b> (mejor con ascitis o con transductor de alta frecuencia), fisuras profundas. Micronodular: textura basta; macronodular: nódulos ≥ 1 cm.</li>
<li><b>Ecoestructura grosera</b> y heterogénea; la fibrosis da un hígado «brillante».</li>
<li><b>Nódulos</b>: regenerativos, displásicos (de bajo a alto grado, premalignos). Un nódulo <b>≥ 2 cm en un cirrótico es maligno en más del 90 %</b>.</li>
<li>Doppler: venas hepáticas <b>aplanadas y monofásicas</b> (inespecífico; no confundir con porta invertida), aumento compensador del flujo de la arteria hepática.</li>
<li>Otros: ascitis, esplenomegalia, adenopatías (hasta 80 % en la cirrosis biliar primaria).</li>
<li>Vigilancia: <b>ecografía + AFP cada 6 meses</b> para detectar CHC. La elastografía se investiga como alternativa a la biopsia.</li>
</ul>
<h4>Hipertensión portal</h4>
<ul>
<li>ABC: porta en el hilio <b>&gt; 13 mm</b> con velocidad disminuida o invertida; <b>esplenomegalia &gt; 13 cm</b> con vena esplénica <b>&gt; 9 mm</b>; ascitis.</li>
<li>Flujo portal posible (Bates): normal; <b>lento</b> (&lt; 10 cm/s, con solapamiento); <b>amortiguado</b> (sin variación respiratoria); <b>invertido (hepatófugo)</b>: enfermedad seria, curiosamente menos sangrado varicoso; <b>«equilibrado»</b> bidireccional de baja velocidad (precede a trombosis o inversión); <b>trombosado</b>.</li>
<li><b>Colaterales</b>: esofágicas (difíciles de ver), <b>esplenorrenal</b> (vaso tortuoso en el borde inferior del bazo), <b>paraumbilical</b> por el ligamento redondo hasta el ombligo («cabeza de medusa»; 1–2 mm puede ser normal), porta hepatis, pared vesicular, vena coronaria. Una búsqueda sistemática muestra hasta el 90 %.</li>
<li>Porta principal hepatópeta con ramas periféricas hepatófugas: buscar un <b>CHC</b>.</li>
</ul>
<h4>Trombosis portal</h4>
<ul>
<li>Trombo fresco puede ser <b>anecoico</b>: la ausencia de flujo en Doppler energía (bien ajustado) es mejor indicador que la escala de grises.</li>
<li>Falsos positivos por técnica (ángulo, FRP alta); falsos negativos por flujo en una colateral. La ecografía con contraste confirma permeabilidad.</li>
<li><b>Transformación cavernosa</b>: red de colaterales en la porta hepatis.</li>
<li>Causas: hepatopatía crónica, pancreatitis, colecistitis, tumores de páncreas o estómago, trastornos de coagulación.</li>
</ul>
<h4>TIPS</h4>
<p>Shunt de porta a vena hepática derecha. Velocidad normal en el stent <b>1–2 m/s</b>, constante. Sugiere disfunción: &lt; 50 cm/s, cambio ≥ 50 cm/s respecto al control, pico focal &gt; 220 cm/s. La estenosis suele estar en el extremo portal.</p>`
        },
        {
          titulo: 'Budd-Chiari, congestión y otras',
          fuente: 'Bates, cap. 4, pp. 140–143',
          html: `
<ul>
<li><b>Budd-Chiari</b>: oclusión de venas hepáticas por trastornos de coagulación (policitemia), tumor (CHC, carcinoma renal que asciende por la VCI), membrana en la VCI o inflamación. Agudo: hígado grande. Después: <b>hipertrofia del caudado</b> (drena por debajo de las venas principales), venas hepáticas difíciles o imposibles de ver, <b>colaterales</b> serpiginosas, flujo invertido, ondas aplanadas, esplenomegalia y ascitis.</li>
<li><b>Cardiopatía congestiva</b>: venas suprahepáticas y VCI <b>dilatadas</b>. Valvulopatía mitral: onda hepática muy pulsátil. <b>Insuficiencia tricuspídea</b>: porta bidireccional, pulsátil y de velocidad alta (el flujo «equilibrado» de la hipertensión portal es de velocidad baja).</li>
<li><b>Fibrosis quística</b>: esteatosis, fibrosis, cirrosis, hipertensión portal.</li>
<li><b>Embarazo</b>: esteatosis aguda del tercer trimestre; síndrome <b>HELLP</b> (hemólisis, enzimas elevadas, plaquetas bajas), con hematoma subcapsular o hemorragias intrahepáticas: indicación de cesárea.</li>
</ul>`
        },
        {
          titulo: 'Lesiones focales benignas',
          fuente: 'ABC, pp. 16–17; Bates, cap. 4, pp. 100–113',
          html: `
<div class="tabla"><table><thead><tr><th>Lesión</th><th>Patrón ecográfico</th><th>Claves</th></tr></thead><tbody>
<tr><td><b>Quiste simple</b></td><td>Tres criterios: <b>anecoico, bordes bien definidos, refuerzo posterior</b></td><td>La lesión focal más frecuente; patognomónico; sin seguimiento. Sin Doppler (las lesiones vasculares tienen flujo)</td></tr>
<tr><td>Quiste complejo</td><td>Ecos, tabiques, componente sólido, pared gruesa</td><td>Hematoma, absceso, metástasis, tumor; cistoadenoma (proyecciones papilares → cirugía)</td></tr>
<tr><td><b>Hemangioma</b></td><td>Redondeado, <b>hiperecoico</b>, bordes definidos, refuerzo posterior leve; <b>sin flujo</b> Doppler</td><td>Tumor benigno más frecuente; mujeres 5:1. En hígado graso se ve hipoecoico. Atípicos: grandes, mixtos, calcificados. Contraste: realce globular periférico con llenado centrípeto</td></tr>
<tr><td><b>Hiperplasia nodular focal</b></td><td>Iso o levemente hipoecoica, bordes definidos, &lt; 5 cm, <b>cicatriz central hiperecoica</b></td><td>2.º tumor benigno; mujeres 8:1. Doppler: <b>rueda de radios</b>. No suele requerir tratamiento</td></tr>
<tr><td>Adenoma</td><td>Heterogéneo (hemorragia, necrosis) o similar al hígado</td><td>Mujer joven con <b>anticonceptivos orales</b>; glucogenosis, hemocromatosis. Sangra y crece en el embarazo → cirugía</td></tr>
<tr><td><b>Absceso</b></td><td>Ecogenicidad variable, casi siempre <b>refuerzo posterior</b>, paredes gruesas irregulares, detritus, tabiques, niveles; <b>gas en el 20 %</b>; sin flujo central</td><td>Al inicio parece sólido. Piógeno (vía portal: apendicitis, diverticulitis; o biliar): suele ser múltiple, pared gruesa, heterogéneo. Amebiano: único, pared fina, contenido homogéneo. Candidiásico: pequeños y múltiples en inmunodeprimidos</td></tr>
<tr><td><b>Quiste hidatídico</b></td><td>Cápsula de dos capas engrosada o <b>desprendida</b>, <b>quistes hijos</b> en panal o rueda de carro, membranas flotantes, arena hidatídica</td><td><i>Echinococcus granulosus</i> (zonas de cría de ovejas). Corteza calcificada = lesión inactiva. <b>No puncionar sin conocer el diagnóstico</b> (siembra)</td></tr>
<tr><td>Hematoma</td><td>Fresco: líquido; se coagula (hiperecoico); se licúa</td><td>Trauma o biopsia. Subcapsular delinea la superficie</td></tr>
<tr><td>Granuloma / calcificación</td><td>Pequeño, a veces en diana o calcificado con sombra</td><td>TB, sarcoidosis, CBP; calcificación lineal portal: TB antigua, esquistosomiasis</td></tr>
</tbody></table></div>
<div class="perla"><b>Efecto masa</b>Desplazar o invadir estructuras distingue una masa real de una infiltración (esteatosis) o un artefacto; es la principal pista de una lesión isoecoica. No dice si es benigna o maligna.</div>`
        },
        {
          titulo: 'Lesiones focales malignas',
          fuente: 'ABC, pp. 18–19; Bates, cap. 4, pp. 114–122',
          html: `
<h4>Metástasis</h4>
<ul>
<li>Las lesiones malignas hepáticas <b>más frecuentes</b>; primarios más comunes: digestivo, pulmón, mama. Suelen ser <b>múltiples</b> y de ecogenicidad variable.</li>
<li>Patrones (ABC): <b>hiperecoicas</b> → origen digestivo, sobre todo <b>colon</b>; <b>hipoecoicas</b> → mama o pulmón no tratados (también estómago, páncreas, esófago); <b>en diana u ojo de toro</b> (halo hipoecoico) → frecuente en carcinoma broncógeno; <b>calcificadas</b> con sombra → adenocarcinoma mucinoso de colon y de mama.</li>
<li>Bates: el aspecto <b>no permite deducir el primario</b>. Diseminación peritoneal (ovario) → periféricas subcapsulares, fáciles de pasar por alto. Necrosis central, mucina, o textura basta difusa (linfoma). El Doppler no ayuda.</li>
<li>Con contraste no captan en la <b>fase sinusoidal</b>: se detectan lesiones &lt; 1 cm y aumenta la confianza en un estudio negativo.</li>
<li>Buscar adenopatías (paraaórticas, paracava, portales), ascitis y lesiones en bazo, riñones, suprarrenales, epiplón.</li>
</ul>
<h4>Carcinoma hepatocelular (CHC)</h4>
<ul>
<li>Tumor <b>primario maligno más frecuente</b>; &gt; 80 % sobre hígado enfermo (cirrosis, hepatitis B y C). Eleva la <b>AFP</b>.</li>
<li>Formas: solitario, multinodular o infiltrante difuso. Pequeño: <b>hipoecoico bien delimitado con halo</b>; grande: <b>heterogéneo</b> con necrosis que <b>infiltra vasos</b>. Doppler: neovascularización con señales de alta velocidad (ABC).</li>
<li>Contraste: realce arterial con <b>lavado</b> en fase sinusoidal; el trombo tumoral portal capta en fase arterial.</li>
<li>Difícil de ver en un hígado nodular: RM para caracterizar nódulos pequeños.</li>
</ul>
<h4>Colangiocarcinoma intrahepático</h4>
<p>Masa sólida, a veces multifocal; la pista es la <b>dilatación focal de los conductos proximales</b>. Asociado a colangitis esclerosante primaria.</p>`
        },
        {
          titulo: 'Litiasis, barro, pólipos y pared vesicular',
          fuente: 'ABC, pp. 20–23; Bates, cap. 3, pp. 52–70, 88–90',
          html: `
<h4>Colelitiasis</h4>
<ul>
<li>Tres propiedades clásicas: <b>muy reflectantes, móviles y con sombra acústica posterior</b>.</li>
<li>Muy frecuente (&gt; 10 % de la población en Reino Unido) y a menudo asintomática: <b>no asumir que los cálculos explican el dolor</b>; buscar otras patologías. Hasta el 35 % necesitará cirugía.</li>
<li>Factores: obesidad, diabetes, embarazo, estrógenos, edad; cirrosis → cálculos pigmentarios.</li>
<li>La sombra depende del tamaño del cálculo respecto al ancho del haz: un cálculo pequeño solo da sombra si está <b>en la zona focal</b>. Si los ecos detrás de la vesícula se saturan, la sombra fina desaparece → <b>bajar la ganancia</b>.</li>
<li>Algunos cálculos <b>flotan</b> bajo la pared anterior. Un cálculo impactado en el cuello no se mueve.</li>
<li>Vesícula contraída llena de cálculos: sombra fuerte desde la fosa vesicular; se ve la pared anterior delante (signo WES).</li>
</ul>
<h4>Barro biliar</h4>
<p>Contenido con <b>ecos internos</b> que se depositan en la zona declive formando <b>nivel líquido-líquido</b> y se movilizan lentamente al cambiar de posición (ABC). Bates: por ayuno prolongado, nutrición parenteral (4–6 semanas), trasplante de médula ósea; las «bolas de barro» simulan pólipos: mover al paciente o reexplorar tras comer. Los microlitos se asocian a pancreatitis aguda «idiopática».</p>
<h4>Pólipos vesiculares</h4>
<ul>
<li>≈ 5 % de la población; la mayoría <b>de colesterol</b> (≈ 60 %): ovales, a veces pediculados, ecogénicos, <b>sin sombra, inmóviles</b>, 2–10 mm.</li>
<li>Criterios de benignidad: <b>múltiples, &lt; 10 mm, sin crecimiento</b>. De malignidad: <b>único, &gt; 10 mm, crecimiento rápido, sésil</b> (ABC). Riesgo mayor en &gt; 50 años y en colangitis esclerosante primaria (40–60 % malignos).</li>
<li>Manejo (ABC): <b>&lt; 10 mm</b> → control ecográfico semestral o anual; <b>≥ 10 mm</b> → cirugía; <b>cualquier tamaño con síntomas biliares o cálculos</b> → colecistectomía.</li>
</ul>
<h4>Enfermedades de la pared</h4>
<ul>
<li><b>Adenomiomatosis</b>: senos de Rokitansky-Aschoff en la pared engrosada, artefacto en <b>cola de cometa</b>; la forma localizada (fondo) puede simular carcinoma.</li>
<li><b>Colesterolosis</b> («vesícula en frambuesa»): múltiples pólipos minúsculos.</li>
<li><b>Vesícula de porcelana</b>: pared calcificada «en cáscara de huevo» con sombra; riesgo de carcinoma → <b>colecistectomía profiláctica</b>.</li>
</ul>
<h4>El engrosamiento de pared no es sinónimo de colecistitis</h4>
<p>Causas <b>extrínsecas</b>: hepatitis aguda, pancreatitis, lupus, cirrosis, <b>ascitis</b>, hipoalbuminemia, insuficiencia cardíaca, varices. <b>Intrínsecas</b>: colecistitis aguda o crónica, adenomiomatosis, carcinoma. Y la causa más común: la vesícula <b>posprandial</b> contraída.</p>`
        },
        {
          titulo: 'Colecistitis y sus complicaciones',
          fuente: 'ABC, p. 22; Bates, cap. 3, pp. 70–77',
          html: `
<h4>Colecistitis aguda</h4>
<ul>
<li>90–95 % por cálculos que obstruyen el cístico; 5–10 % <b>alitiásica</b> (pacientes críticos).</li>
<li>Hallazgos (ABC): <b>pared &gt; 3 mm</b> (difusa), <b>distensión &gt; 4 cm</b> transversal, <b>colelitiasis</b> (cálculo impactado en cuello o cístico), <b>líquido pericolecístico</b>, <b>Murphy ecográfico</b> (difícil en pacientes sedados o intubados).</li>
<li>Bates: el engrosamiento típico es <b>simétrico, de toda la pared, con halo anecoico</b> por edema; el Murphy es útil pero no específico.</li>
<li>Tratamiento: colecistectomía laparoscópica precoz; si no es operable, antibióticos y <b>colecistostomía o drenaje guiado por ecografía</b>.</li>
</ul>
<div class="tabla"><table><thead><tr><th>Forma</th><th>Hallazgos</th></tr></thead><tbody>
<tr><td>Crónica</td><td>Pared fibrosa, irregular, hiperecoica; vesícula retraída con cálculos</td></tr>
<tr><td>Alitiásica</td><td>Hospitalizados en ayunas, trauma, posoperatorio, diabéticos; pared que se engrosa progresivamente, barro; más perforaciones por retraso diagnóstico</td></tr>
<tr><td><b>Gangrenosa</b></td><td>Pared asimétrica con necrosis y abscesos intramurales, <b>membranas intraluminales</b> (mucosa desprendida); ancianos y diabéticos; cirugía inmediata</td></tr>
<tr><td><b>Enfisematosa</b></td><td>Gas en luz y pared (diabéticos): sombra «ruidosa» que imita intestino</td></tr>
<tr><td>Empiema</td><td>Ecos finos por pus; puede perforarse</td></tr>
<tr><td>Perforación</td><td>Solución de continuidad en la pared, colección pericolecística</td></tr>
</tbody></table></div>
<p><b>Mucocele</b>: obstrucción crónica del cístico; la bilis se reemplaza por moco; vesícula dilatada con conductos normales: buscar el cálculo en el cuello.</p>`
        },
        {
          titulo: 'Vía biliar: dilatación, obstrucción y otras',
          fuente: 'ABC, p. 24; Bates, cap. 3, pp. 56–64, 77–93',
          html: `
<h4>Dilatación (ABC)</h4>
<ul>
<li>Intrahepática visible (&gt; 2 mm): signo del <b>doble cañón de escopeta</b> o doble canal: conducto paralelo a la rama portal, de diámetro similar, <b>uno con Doppler y otro sin él</b>. Avanzada: «<b>en estrella</b>» o «brazos de pulpo».</li>
<li>Extrahepática: colédoco &gt; 7 mm. Causas comunes: <b>coledocolitiasis, tumor de cabeza de páncreas, pancreatitis crónica</b>. No obstructivas: Caroli, colecistectomía.</li>
</ul>
<h4>Localizar el nivel (Bates, fig. 3.32)</h4>
<ul>
<li>Colédoco dilatado → obstrucción en su <b>extremo inferior</b>.</li>
<li>Colédoco + Wirsung dilatados (<b>doble conducto</b>) → <b>cabeza de páncreas o ampolla</b>: carcinoma o pancreatitis más que cálculo.</li>
<li>Solo vesícula dilatada → obstrucción del <b>cuello o del cístico</b>.</li>
<li>Una vesícula fibrosada por colecistitis crónica puede no dilatarse aunque los conductos estén muy dilatados.</li>
</ul>
<h4>Coledocolitiasis</h4>
<ul>
<li>Hasta el <b>20 %</b> de los pacientes con cálculos. Puede haber cálculo <b>sin dilatación</b> o conducto dilatado y vacío (cálculo ya expulsado); obstrucción intermitente «en válvula».</li>
<li>La ecografía <b>no es fiable</b> para cálculos del colédoco distal (gas duodenal): <b>colangio-RM</b>; la ecoendoscopia es comparable a la CPRE. La CPRE (complicaciones hasta 8 %, mortalidad hasta 0,5 %) se reserva para tratar.</li>
<li>Puede haber cálculo en el colédoco sin cálculos en la vesícula, incluso tras colecistectomía.</li>
</ul>
<h4>Obstrucción sin dilatación y falsos positivos</h4>
<p>Obstrucción muy reciente o intermitente, conductos fibrosos (colangitis esclerosante, cirrosis). En la cirrosis las <b>arterias hepáticas dilatadas simulan conductos</b>: Doppler. El engrosamiento de la pared del conducto puede ser el único signo.</p>
<h4>Otras</h4>
<ul>
<li><b>Mirizzi</b>: cálculo en cuello o cístico que comprime el hepático común: vesícula contraída, dilatación intrahepática con colédoco inferior normal. Difícil de diferenciar de un carcinoma.</li>
<li><b>Quiste del colédoco</b>: niños; unión anómala biliopancreática; riesgo de colangitis, cálculos y cáncer.</li>
<li><b>Colangitis esclerosante primaria</b>: varones jóvenes (2:1), 70 % con colitis ulcerosa; estenosis y dilataciones en rosario, pared del colédoco engrosada; riesgo de colangiocarcinoma.</li>
<li><b>Caroli</b>: dilataciones saculares intrahepáticas congénitas que comunican con la vía biliar (no confundir con poliquistosis).</li>
<li><b>Parásitos</b> (<i>Ascaris</i>, trematodos): causa común de cólico biliar en Sudamérica; estructuras lineales hiperecoicas en la vesícula o en conductos dilatados.</li>
<li><b>Neumobilia</b>: ecos lineales muy reflectantes que siguen los conductos con sombra reverberante; tras CPRE, esfinterotomía o cirugía; puede persistir meses.</li>
<li>Hemobilia: ecos finos (sangre fresca) o coágulos sin sombra; antecedente de trauma o procedimiento.</li>
</ul>
<h4>Cáncer biliar</h4>
<ul>
<li><b>Carcinoma de vesícula</b>: raro y agresivo (&lt; 5 % a 5 años), mujeres y ancianos; factores: colecistitis crónica, cálculos grandes, pólipos &gt; 1 cm, porcelana, quiste del colédoco. Engrosamiento focal irregular o masa polipoide con flujo que infiltra el hígado.</li>
<li><b>Colangiocarcinoma</b>: fácil de ver si obstruye el colédoco; el <b>Klatskin</b> (confluencia hepática) suele verse solo por la dilatación proximal bilateral.</li>
</ul>`
        },
        {
          titulo: 'Páncreas: pancreatitis y tumores',
          fuente: 'ABC, pp. 25–28; Bates, cap. 5, pp. 160–172',
          html: `
<h4>Esteatosis pancreática</h4>
<p>Aumento de ecogenicidad respecto al hígado o al bazo; obesidad y síndrome metabólico (ABC). Recordar que el páncreas se vuelve más ecogénico con la edad.</p>
<h4>Pancreatitis aguda</h4>
<ul>
<li>Diagnóstico con <b>2 de 3</b>: dolor típico, amilasa o lipasa &gt; 3 veces lo normal, imagen característica (ABC). Causas: <b>cálculos biliares</b> (la más común) y <b>alcohol</b>; también trauma, fármacos, infecciones, anomalías congénitas.</li>
<li>La forma leve puede tener <b>ecografía normal</b>. El papel principal de la ecografía es mostrar la <b>causa</b>: cálculos, barro, microlitiasis (Bates).</li>
<li>Hallazgos: páncreas <b>aumentado</b> (en general &gt; 3,5 cm), <b>hipoecoico y heterogéneo</b> por edema, colecciones peripancreáticas, Wirsung dilatado, pérdida de definición con la vena esplénica en formas graves.</li>
<li>Complicaciones: colecciones y <b>seudoquistes</b> (sobre todo en el saco menor, cerca de la cola, pero pueden aparecer en cualquier lugar del abdomen: explorar todo), <b>trombosis de la vena esplénica o porta</b>, aneurisma de la arteria esplénica, absceso. La TC con contraste valora la necrosis.</li>
<li>Pancreatitis <b>focal</b>: indistinguible de un tumor; a favor: antecedentes y CA 19-9 normal.</li>
<li>Sin colecistectomía, hasta un tercio de las pancreatitis biliares recurre.</li>
</ul>
<h4>Seudoquiste</h4>
<p>Complica el 10–20 % de las pancreatitis agudas; sin epitelio, pared de tejido fibroso o de granulación; <b>anecoico, de paredes lisas con refuerzo</b>, a veces con ecos o tabiques; de 1 a más de 8 cm (ABC). Drenaje percutáneo o endoscópico transgástrico si no se resuelve.</p>
<h4>Pancreatitis crónica</h4>
<p><b>Calcificaciones</b> (focos hiperecoicos con o sin sombra), parénquima heterogéneo, <b>conducto dilatado e irregular («arrosariado»)</b>, cálculos intraductales, seudoquistes y <b>atrofia</b>. Causa más común: alcohol.</p>
<h4>Adenocarcinoma ductal</h4>
<ul>
<li>Neoplasia pancreática más frecuente (80–90 %). Localización: <b>cabeza ≈ 60–70 %</b>, cuerpo 20 %, cola 10 %.</li>
<li><b>Masa hipoecoica mal definida</b>, habitualmente &gt; 2 cm al diagnóstico, con borde irregular; puede tener flujo arterial.</li>
<li>La pista principal es la <b>dilatación biliar</b> (69 %); Wirsung dilatado 37 %; <b>doble conducto</b> 34 % (serie de Bates). Seguir el colédoco hasta la cabeza.</li>
<li>Cuerpo y cola: sin ictericia, diagnóstico tardío con metástasis.</li>
<li>Pronóstico malo (&lt; 5 % a 5 años); solo ≈ 20 % resecable (Whipple). El Doppler de invasión vascular predice irresecabilidad (sensibilidad 79 %, especificidad 89 %). Estadificar con TC; biopsia por ecoendoscopia.</li>
</ul>
<h4>Otros tumores y lesiones</h4>
<ul>
<li><b>Endocrinos</b>: insulinoma (benigno), gastrinoma (maligno, múltiple); pequeños, hipoecoicos y bien definidos; hasta el 40 % no se ven en ecografía ni TC (mejor ecoendoscopia).</li>
<li><b>Quísticos</b> (serosos, mucinosos, NPMI): cuerpo y cola, mejor pronóstico. Un quiste pancreático sin pancreatitis previa debe hacer sospechar neoplasia.</li>
<li>Quistes benignos raros: poliquistosis, fibrosis quística, Von Hippel-Lindau.</li>
<li><b>Trauma</b>: golpe contra el cinturón de seguridad, laceración de la cabeza; la TC es de elección.</li>
</ul>`
        }
      ]
    },
    {
      id: 'a4', peso: 30, pesoEstimado: true, titulo: 'Interpretación con correlación clínica',
      descripcion: 'Interpreta los hallazgos ecográficos patológicos, haciendo una correlación clínica.',
      temas: [
        {
          titulo: 'Ictericia y pruebas hepáticas',
          fuente: 'Bates, cap. 2, pp. 43–46 (tablas 2.1–2.2, Cuadro 2.2); cap. 3, pp. 77–82; cap. 4, p. 123',
          html: `
<p>La ictericia es una de las causas más frecuentes de solicitud. La ecografía distingue de inmediato la <b>obstructiva</b> (hay dilatación biliar) de la <b>no obstructiva</b> (no la hay).</p>
<div class="tabla"><table><thead><tr><th>Tipo</th><th>Bilirrubina</th><th>Causas</th></tr></thead><tbody>
<tr><td>No obstructiva (prehepática o hepática)</td><td>No conjugada o mixta</td><td>Hemólisis, hematoma, Gilbert, hepatitis, hepatopatía alcohólica, cirrosis, metástasis múltiples, fármacos</td></tr>
<tr><td>Obstructiva (posthepática)</td><td>Conjugada</td><td>Cálculos en el colédoco, carcinoma del conducto, de la cabeza del páncreas o de la ampolla, pancreatitis aguda, adenopatías en la porta, atresia biliar</td></tr>
</tbody></table></div>
<ul>
<li>Pruebas: <b>fosfatasa alcalina y GGT</b> (obstrucción; la FA sube antes que la bilirrubina), ALT/AST (hepatocelular, hígado graso), <b>AFP</b> (CHC), albúmina baja (ascitis, hipertensión portal), tiempo de protrombina.</li>
<li><b>Ley de Courvoisier</b>: vesícula dilatada con ictericia → no es un cálculo del colédoco (la vesícula con cálculos suele estar fibrosada). Tiene muchas excepciones.</li>
<li>No supongas que un paciente con cálculos tiene ictericia por un cálculo en el colédoco; ni que no puede tenerlo porque la vesícula no tenga cálculos.</li>
<li>Si el colédoco está dilatado, refinar con TC, colangio-RM o ecoendoscopia; idealmente evaluar la causa antes de colocar un stent (que dificulta las imágenes posteriores).</li>
</ul>
<div class="perla"><b>Cuadro 2.2: siempre</b>Haz una historia oral al paciente (no te fíes solo de la solicitud), consigue estudios previos y piensa en la posibilidad de varias patologías.</div>`
        },
        {
          titulo: 'Dolor, masa y urgencias hepatobiliares',
          fuente: 'Bates, cap. 2, pp. 45–46; cap. 10, pp. 302–304',
          html: `
<div class="tabla"><table><thead><tr><th>Escenario</th><th>Qué buscar</th><th>Interpretación</th></tr></thead><tbody>
<tr><td>Dolor localizado en hipocondrio derecho, fiebre</td><td>Cálculos, pared, Murphy, líquido</td><td>Colecistitis aguda; si el paciente no es operable, colecistostomía guiada</td></tr>
<tr><td>Dolor con intolerancia a las grasas</td><td>Cálculos, barro, pólipos</td><td>Origen biliar</td></tr>
<tr><td>Fiebre + ictericia + dolor</td><td>Dilatación, cálculos, paredes de conductos engrosadas</td><td>Colangitis: drenaje biliar urgente (endoscópico)</td></tr>
<tr><td>Fiebre + lesión hepática compleja</td><td>Refuerzo posterior, gas, origen biliar o intestinal</td><td>Absceso: aspiración/drenaje guiado + antibiótico</td></tr>
<tr><td>Dolor epigástrico + amilasa elevada</td><td>Cálculos, barro, colecciones, trombosis venosa</td><td>Pancreatitis aguda; el páncreas puede verse normal</td></tr>
<tr><td>Hígado doloroso</td><td>Venas hepáticas y VCI dilatadas</td><td>Congestión por insuficiencia cardíaca; hepatitis; absceso</td></tr>
<tr><td>Masa palpable en hipocondrio derecho</td><td>Palpar con el transductor</td><td>Lóbulo de Riedel, vesícula, carcinoma de colon, retención fecal, riñón; si hay borde hepático palpable sin patología, mira el tórax (derrame pleural que desplaza el hígado)</td></tr>
</tbody></table></div>
<p>Pregunta siempre: ¿el dolor es localizado?, ¿se relaciona con algo (comidas grasas, micción)?, ¿hay fiebre?, ¿hábitos intestinales?, ¿cirugías previas?</p>`
        }
      ]
    }
  ],

  tarjetas: [
    ['a1', 'Regla de planos y posiciones en el abdomen superior', 'Cada órgano en al menos 2 planos perpendiculares y con el paciente en al menos 2 posiciones.', 'Bates, cap. 2, p. 22'],
    ['a1', 'Dónde colocar la zona focal al buscar cálculos pequeños', 'En la pared posterior de la vesícula.', 'Bates, cap. 2, p. 35; cap. 3, fig. 3.5'],
    ['a1', 'Cómo medir la pared vesicular', 'En corte longitudinal, con calibres perpendiculares a la pared (el transversal la sobrestima).', 'Bates, cap. 2, p. 34'],
    ['a1', 'Cómo medir el colédoco', 'Diámetro interno, en su punto más ancho, en corte longitudinal; nunca en transversal.', 'Bates, cap. 2, p. 42'],
    ['a1', 'Posición para desplegar el gorro frigio', 'Decúbito con el lado derecho elevado, casi prono o de pie.', 'Bates, cap. 2, p. 36'],
    ['a1', 'Cinco maniobras para ver el páncreas', 'Compresión del epigastrio, inspiración/espiración forzada, cambiar de posición, abombar el abdomen (Valsalva), 300 ml de agua.', 'ABC, p. 25; Bates, cap. 5, p. 158'],
    ['a1', 'Cabeza del páncreas tapada por gas duodenal: ¿qué posición?', 'Lado izquierdo elevado: el gas sube hacia la cola.', 'Bates, cap. 5, p. 155'],
    ['a1', 'Abordaje para Doppler de la vena porta', 'Oblicuo derecho intercostal, con el vaso hacia el transductor (< 60°).', 'Bates, cap. 2, p. 32'],
    ['a2', 'Ecogenicidad normal del hígado', 'Homogénea, grano fino; igual o algo mayor que la corteza renal y algo menor que el bazo.', 'ABC, p. 12'],
    ['a2', 'Tamaño normal del lóbulo hepático derecho', '< 15 cm (longitudinal en línea medioclavicular).', 'ABC, p. 13'],
    ['a2', 'Proporción normal del caudado', 'No debe superar el 35 % del lóbulo izquierdo.', 'ABC, p. 13'],
    ['a2', 'Riedel vs hepatomegalia', 'Mirar el lóbulo izquierdo: si también está abultado y redondeado, es hepatomegalia.', 'Bates, cap. 2, p. 23'],
    ['a2', 'Segmento I: localización', 'Caudado, posterior, entre la VCI y el ligamento venoso.', 'ABC, p. 12'],
    ['a2', 'Segmento IV: localización', 'Entre la fosa vesicular y el ligamento falciforme (IVa superior, IVb inferior).', 'ABC, p. 12'],
    ['a2', 'Segmento VI: referencia', 'Posteroinferior derecho, en relación con el polo superior del riñón derecho.', 'ABC, p. 12'],
    ['a2', 'Porta vs venas hepáticas en modo B', 'Porta: paredes gruesas y ecogénicas (tríada portal). Hepáticas: paredes finas, casi imperceptibles.', 'ABC, p. 13'],
    ['a2', 'Diámetro y velocidad normales de la porta (Bates)', 'En general ≤ 16 mm en reposo; 12–20 cm/s; monofásica ondulada, hepatópeta.', 'Bates, cap. 2, p. 32'],
    ['a2', 'Onda normal de las venas hepáticas', 'Trifásica (breve flujo hacia el hígado en la sístole auricular).', 'Bates, cap. 2, p. 34'],
    ['a2', 'Onda normal de la arteria hepática', 'Baja resistencia con buen flujo diastólico anterógrado.', 'Bates, cap. 2, p. 34'],
    ['a2', 'Pared y medidas normales de la vesícula (ABC)', 'Pared < 3 mm; ≤ 10 cm longitudinal y ≤ 4 cm transversal.', 'ABC, p. 20'],
    ['a2', 'Colédoco normal y dilatado (ABC)', 'Normal < 6 mm; dilatado > 7 mm; hasta 10 mm normal tras colecistectomía.', 'ABC, p. 24'],
    ['a2', 'Colédoco en el anciano (Bates)', 'Hasta 8–9 mm por degeneración elástica; descartar obstrucción incipiente.', 'Bates, cap. 2, p. 42'],
    ['a2', 'Medidas AP normales del páncreas', 'Cabeza ≤ 3 cm, cuerpo ≤ 2,5 cm, cola ≤ 2 cm; conducto < 3 mm.', 'ABC, p. 25'],
    ['a2', 'Ecogenicidad del páncreas según la edad', 'Joven: voluminoso e hipoecoico. Adulto: algo más ecogénico que el hígado. Anciano: muy ecogénico y atrófico.', 'Bates, cap. 5, p. 158'],
    ['a2', 'Ausencia focal de grasa en el páncreas', 'Uncinado/cabeza ventral hipoecoicos, sin efecto de masa: variante normal.', 'Bates, cap. 5, p. 170'],
    ['a3', 'Tres signos de hepatitis viral aguda (ABC)', 'Hepatomegalia, ecogenicidad disminuida con «cielo estrellado», pared vesicular engrosada.', 'ABC, p. 14'],
    ['a3', 'Grados de esteatosis (ABC)', 'Leve: ↑ecogenicidad vs riñón. Moderada: cuesta ver vasos y diafragma. Severa: no se ven vasos, LHD posterior ni diafragma.', 'ABC, pp. 14–15'],
    ['a3', 'Grasa vs fibrosis en el hígado', 'Ambas aumentan la ecogenicidad; solo la grasa aumenta además la atenuación.', 'Bates, cap. 4, p. 125'],
    ['a3', 'Sitios típicos de esteatosis focal o zona libre de grasa', 'Segmento IV delante de la porta o de la vesícula, caudado, lóbulo izquierdo posterior.', 'Bates, cap. 4, pp. 109–111'],
    ['a3', 'Signos ecográficos de cirrosis', 'Hígado atrófico con caudado > 35 % LHI, superficie nodular, ecoestructura grosera, signos de hipertensión portal.', 'ABC, p. 15'],
    ['a3', 'Nódulo de 2 cm en un hígado cirrótico', 'Más del 90 % de probabilidad de malignidad (CHC).', 'Bates, cap. 4, p. 125'],
    ['a3', 'Hipertensión portal según el ABC', 'Porta > 13 mm con velocidad baja o invertida; bazo > 13 cm con vena esplénica > 9 mm; ascitis.', 'ABC, p. 15'],
    ['a3', 'Cinco patrones de flujo portal en la hipertensión portal', 'Lento (< 10 cm/s), amortiguado, invertido (hepatófugo), equilibrado (bidireccional) y trombosado.', 'Bates, cap. 4, p. 129'],
    ['a3', 'Colateral portosistémica en el borde inferior del bazo', 'Shunt esplenorrenal.', 'Bates, cap. 4, p. 135'],
    ['a3', 'Mejor signo de trombosis portal fresca', 'Ausencia de flujo en Doppler energía bien ajustado (el trombo fresco puede ser anecoico).', 'Bates, cap. 4, p. 129'],
    ['a3', 'Velocidad normal en un TIPS', '1–2 m/s, constante; < 50 cm/s sugiere estenosis.', 'Bates, cap. 4, p. 136'],
    ['a3', 'Budd-Chiari: tres hallazgos', 'Venas hepáticas no visibles o trombosadas, hipertrofia del caudado, colaterales (más ascitis).', 'Bates, cap. 4, p. 140'],
    ['a3', 'Quiste hepático simple: tres criterios', 'Anecoico, bordes bien definidos, refuerzo acústico posterior.', 'ABC, p. 16'],
    ['a3', 'Hemangioma hepático típico', 'Redondeado, hiperecoico, bien definido, refuerzo leve, sin flujo Doppler. Mujeres 5:1.', 'ABC, p. 16'],
    ['a3', 'Hiperplasia nodular focal', 'Iso/levemente hipoecoica, < 5 cm, cicatriz central hiperecoica, rueda de radios. Mujeres 8:1.', 'ABC, p. 16'],
    ['a3', 'Absceso piógeno vs amebiano (ABC)', 'Amebiano: único, pared fina, contenido homogéneo. Piógeno: múltiple, pared gruesa, heterogéneo.', 'ABC, p. 17'],
    ['a3', 'Porcentaje de abscesos hepáticos con gas', '≈ 20 %: focos hiperecoicos con reverberación.', 'ABC, p. 17'],
    ['a3', 'Quiste hidatídico: hallazgos', 'Cápsula de dos capas desprendida, quistes hijos (panal/rueda de carro), membranas, arena; calcificado = inactivo.', 'Bates, cap. 4, p. 103'],
    ['a3', 'Metástasis hiperecoicas: origen típico', 'Digestivo, sobre todo colon.', 'ABC, p. 19'],
    ['a3', 'Metástasis hipoecoicas: origen típico', 'Mama o pulmón no tratados (también estómago, páncreas, esófago).', 'ABC, p. 19'],
    ['a3', 'Metástasis calcificadas: origen típico', 'Adenocarcinoma mucinoso de colon y adenocarcinoma de mama.', 'ABC, p. 19'],
    ['a3', 'CHC en ecografía', 'Pequeño: hipoecoico con halo. Grande: heterogéneo con necrosis que infiltra vasos; neovascularización de alta velocidad.', 'ABC, p. 18'],
    ['a3', 'Patrón del CHC con contraste', 'Realce arterial y lavado en fase sinusoidal.', 'Bates, cap. 4, p. 121'],
    ['a3', 'Tres propiedades del cálculo vesicular', 'Muy reflectante, móvil y con sombra acústica posterior.', 'Bates, cap. 3, p. 52'],
    ['a3', 'Cálculo sin sombra: tres ajustes', 'Foco en la pared posterior, mayor frecuencia, bajar la ganancia (evitar saturación).', 'Bates, cap. 3, p. 53'],
    ['a3', 'Barro biliar', 'Ecos internos declives con nivel líquido-líquido que se movilizan lentamente.', 'ABC, p. 20'],
    ['a3', 'Pólipo: criterios de malignidad', 'Único, > 10 mm, crecimiento rápido, sésil.', 'ABC, p. 21'],
    ['a3', 'Manejo de pólipos vesiculares (ABC)', '< 10 mm: control semestral/anual. ≥ 10 mm: cirugía. Con síntomas o cálculos: colecistectomía.', 'ABC, p. 22'],
    ['a3', 'Hallazgos de colecistitis aguda (ABC)', 'Pared > 3 mm, distensión > 4 cm, cálculo impactado, líquido pericolecístico, Murphy ecográfico.', 'ABC, p. 22'],
    ['a3', 'Colecistitis gangrenosa', 'Pared asimétrica con abscesos intramurales y membranas intraluminales; cirugía inmediata.', 'Bates, cap. 3, p. 73'],
    ['a3', 'Colecistitis enfisematosa', 'Gas en luz y pared (diabéticos), sombra «ruidosa» que imita intestino.', 'Bates, cap. 3, p. 74'],
    ['a3', 'Vesícula de porcelana', 'Pared calcificada en cáscara de huevo con sombra; riesgo de carcinoma → colecistectomía profiláctica.', 'ABC, p. 23'],
    ['a3', 'Causas extrínsecas de pared vesicular engrosada', 'Hepatitis, pancreatitis, LES, cirrosis, ascitis, hipoalbuminemia, insuficiencia cardíaca.', 'ABC, p. 23'],
    ['a3', 'Signo del doble cañón de escopeta', 'Conducto biliar dilatado paralelo a la porta, de diámetro similar; uno con Doppler y otro no.', 'ABC, p. 24'],
    ['a3', 'Nivel de obstrucción con doble conducto', 'Cabeza de páncreas o ampolla (más probable carcinoma o pancreatitis que cálculo).', 'Bates, cap. 3, p. 77'],
    ['a3', 'Fiabilidad de la ecografía para cálculos del colédoco distal', 'Baja (gas duodenal): colangio-RM o ecoendoscopia.', 'Bates, cap. 3, p. 79'],
    ['a3', 'Síndrome de Mirizzi en ecografía', 'Vesícula contraída, cálculo en el cuello, dilatación intrahepática con colédoco inferior normal.', 'Bates, cap. 3, p. 64'],
    ['a3', 'Neumobilia', 'Ecos lineales muy reflectantes que siguen los conductos, con sombra reverberante; tras CPRE o esfinterotomía.', 'Bates, cap. 3, p. 91'],
    ['a3', 'Parásitos biliares en Sudamérica', 'Ascaris y trematodos: estructuras lineales hiperecoicas en vesícula o conductos dilatados.', 'Bates, cap. 3, p. 87'],
    ['a3', 'Criterios diagnósticos de pancreatitis aguda', '2 de 3: dolor típico, amilasa/lipasa > 3 veces, imagen característica.', 'ABC, p. 26'],
    ['a3', 'Papel principal de la ecografía en la pancreatitis aguda', 'Buscar la causa (cálculos, barro, microlitiasis) y complicaciones; el páncreas puede verse normal.', 'Bates, cap. 5, p. 160'],
    ['a3', 'Seudoquiste pancreático', 'Colección sin epitelio (10–20 % de PA): anecoica, paredes lisas, refuerzo; 1 a > 8 cm.', 'ABC, p. 26'],
    ['a3', 'Pancreatitis crónica: hallazgos', 'Calcificaciones, parénquima heterogéneo, Wirsung dilatado irregular, seudoquistes, atrofia.', 'ABC, p. 27'],
    ['a3', 'Distribución del adenocarcinoma de páncreas (ABC)', 'Cabeza 70 %, cuerpo 20 %, cola 10 %; masa hipoecoica mal definida > 2 cm.', 'ABC, p. 28'],
    ['a3', 'Frecuencia de hallazgos secundarios en el cáncer de páncreas (Bates)', 'Dilatación biliar 69 %, Wirsung 37 %, doble conducto 34 %.', 'Bates, cap. 5, p. 169'],
    ['a4', 'Ictericia obstructiva vs no obstructiva en ecografía', 'Obstructiva: hay dilatación de la vía biliar. No obstructiva: no la hay.', 'Bates, cap. 2, p. 44'],
    ['a4', 'Enzima que se eleva antes en la obstrucción biliar incipiente', 'Fosfatasa alcalina.', 'Bates, cap. 3, p. 82'],
    ['a4', 'Ley de Courvoisier', 'Vesícula dilatada con ictericia: no es cálculo del colédoco (tiene muchas excepciones).', 'Bates, cap. 3, p. 79'],
    ['a4', 'Cuadro 2.2: tres cosas que hacer siempre', 'Historia oral del paciente, estudios previos, pensar en varias patologías.', 'Bates, cap. 2, p. 45'],
    ['a4', 'Borde hepático palpable sin patología hepática', 'Explorar el tórax: un derrame pleural puede desplazar el hígado.', 'Bates, cap. 2, p. 46']
  ],

  preguntas: [
    { c: 'a1', q: 'Un cálculo vesicular pequeño no muestra sombra. ¿Qué ajuste es más útil?', o: ['Subir la ganancia', 'Colocar la zona focal en la pared posterior de la vesícula', 'Bajar la frecuencia', 'Ampliar el sector'], a: 1, e: 'El cálculo debe estar en la zona más estrecha del haz para generar sombra; también ayuda bajar la ganancia y subir la frecuencia.', f: 'Bates, cap. 3, pp. 53–55' },
    { c: 'a1', q: 'El colédoco debe medirse:', o: ['En transversal a nivel de la cabeza del páncreas', 'En longitudinal, diámetro interno en su punto más ancho', 'En la porción intrahepática únicamente', 'Con Doppler color siempre'], a: 1, e: 'El corte transversal es oblicuo y sobrestima el diámetro.', f: 'Bates, cap. 2, p. 42' },
    { c: 'a1', q: 'La cabeza del páncreas está oculta por gas duodenal. Maniobra recomendada:', o: ['Lado derecho elevado', 'Lado izquierdo elevado', 'Trendelenburg', 'Ayuno de 24 h'], a: 1, e: 'Con el lado izquierdo elevado el gas del duodeno sube hacia la cola.', f: 'Bates, cap. 5, p. 155' },
    { c: 'a1', q: 'Un estudio con vesícula de pared aparentemente engrosada en corte transversal debe:', o: ['Informarse como colecistitis', 'Medirse en longitudinal perpendicular a la pared', 'Repetirse con Doppler', 'Ignorarse'], a: 1, e: 'Un corte no perpendicular sobrestima el grosor parietal (fig. 2.29).', f: 'Bates, cap. 2, p. 34' },
    { c: 'a2', q: 'Diámetro longitudinal máximo normal del lóbulo hepático derecho según el ABC:', o: ['10 cm', '15 cm', '20 cm', '25 cm'], a: 1, e: 'Medido en línea medioclavicular; > 15 cm sugiere hepatomegalia.', f: 'ABC, p. 13' },
    { c: 'a2', q: 'El segmento hepático que se relaciona con el polo superior del riñón derecho es el:', o: ['II', 'IV', 'VI', 'VIII'], a: 2, e: 'El segmento VI es posteroinferior derecho.', f: 'ABC, p. 12' },
    { c: 'a2', q: 'Prolongación en lengua del lóbulo derecho por debajo del riñón con lóbulo izquierdo pequeño:', o: ['Hepatomegalia', 'Lóbulo de Riedel', 'Cirrosis', 'Metástasis'], a: 1, e: 'Variante normal; en la hepatomegalia el lóbulo izquierdo también está abultado.', f: 'Bates, cap. 2, p. 23' },
    { c: 'a2', q: 'Patrón Doppler normal de la vena porta:', o: ['Trifásico', 'Monofásico hepatópeto con ondulaciones', 'Alta resistencia', 'Bidireccional'], a: 1, e: 'Velocidad 12–20 cm/s; la ondulación refleja un hígado flexible normal.', f: 'Bates, cap. 2, p. 32' },
    { c: 'a2', q: 'Colédoco normal en paciente colecistectomizado, según el ABC:', o: ['Hasta 4 mm', 'Hasta 6 mm', 'Hasta 10 mm', 'Hasta 15 mm'], a: 2, e: 'Tras colecistectomía se acepta hasta 10 mm; en el resto, > 7 mm es dilatado.', f: 'ABC, p. 24' },
    { c: 'a2', q: 'Páncreas hiperecoico y atrófico en un paciente de 80 años asintomático. Interpretación:', o: ['Pancreatitis crónica', 'Cambio normal con la edad', 'Adenocarcinoma', 'Pancreatitis aguda'], a: 1, e: 'El páncreas se infiltra de grasa con la edad; el mismo aspecto en un joven sería anormal.', f: 'Bates, cap. 5, p. 158' },
    { c: 'a2', q: 'Diámetro AP máximo normal de la cabeza del páncreas:', o: ['1,5 cm', '2 cm', '3 cm', '4,5 cm'], a: 2, e: 'Cabeza ≤ 3 cm, cuerpo ≤ 2,5 cm, cola ≤ 2 cm.', f: 'ABC, p. 25' },
    { c: 'a3', q: 'Hígado brillante con atenuación que impide ver el diafragma y la parte posterior del lóbulo derecho:', o: ['Esteatosis leve', 'Esteatosis moderada', 'Esteatosis severa', 'Fibrosis sin grasa'], a: 2, e: 'La fibrosis aumenta la ecogenicidad sin aumentar la atenuación.', f: 'ABC, p. 15; Bates, cap. 4, p. 125' },
    { c: 'a3', q: 'Zona hipoecoica de bordes rectos delante de la vesícula en un hígado graso, sin efecto de masa:', o: ['Metástasis', 'Zona libre de grasa', 'Absceso', 'CHC'], a: 1, e: 'Los vasos no se desplazan; el contraste muestra captación idéntica al hígado.', f: 'Bates, cap. 4, p. 111' },
    { c: 'a3', q: 'Hígado pequeño de contorno nodular, caudado mayor del 35 % del lóbulo izquierdo, ascitis y esplenomegalia:', o: ['Hepatitis aguda', 'Cirrosis', 'Esteatosis', 'Budd-Chiari agudo'], a: 1, e: 'Redistribución de volumen + superficie nodular + hipertensión portal.', f: 'ABC, p. 15' },
    { c: 'a3', q: 'Flujo portal bidireccional de baja velocidad en un cirrótico. Significado:', o: ['Normal', 'Flujo «equilibrado» que puede preceder a trombosis o inversión', 'Insuficiencia tricuspídea', 'Aliasing'], a: 1, e: 'La insuficiencia tricuspídea da un flujo bidireccional pulsátil de alta velocidad.', f: 'Bates, cap. 4, pp. 129, 141' },
    { c: 'a3', q: 'Vaso tortuoso en el borde inferior del bazo en un paciente con hipertensión portal:', o: ['Arteria esplénica normal', 'Shunt esplenorrenal', 'Vena paraumbilical', 'Vena coronaria'], a: 1, e: 'Estos pacientes tienen menos varices gástricas.', f: 'Bates, cap. 4, p. 135' },
    { c: 'a3', q: 'Lesión hepática redondeada, hiperecoica, bien definida, con refuerzo leve y sin flujo, en una mujer asintomática:', o: ['Metástasis', 'Hemangioma', 'HNF', 'Absceso'], a: 1, e: 'Patrón típico del tumor benigno hepático más frecuente.', f: 'ABC, p. 16' },
    { c: 'a3', q: 'Lesión isoecoica con cicatriz central hiperecoica y Doppler en rueda de radios:', o: ['Hemangioma', 'Hiperplasia nodular focal', 'Adenoma', 'CHC'], a: 1, e: 'Segundo tumor benigno; mujeres 8:1; no requiere tratamiento.', f: 'ABC, p. 16' },
    { c: 'a3', q: 'En un paciente con quiste hepático con membranas desprendidas y quistes hijos, lo que NO debe hacerse es:', o: ['Pedir serología', 'Puncionar sin conocer el diagnóstico', 'Valorar tratamiento percutáneo con escleroterapia', 'Hacer TC'], a: 1, e: 'Una aspiración sin saber que es hidatídico puede sembrar el parásito en el trayecto.', f: 'Bates, cap. 4, p. 103' },
    { c: 'a3', q: 'Múltiples metástasis hepáticas calcificadas con sombra. Origen más probable:', o: ['Pulmón', 'Adenocarcinoma mucinoso de colon o mama', 'Linfoma', 'Melanoma'], a: 1, e: 'Patrón calcificado clásico.', f: 'ABC, p. 19' },
    { c: 'a3', q: 'En un cirrótico, un nódulo nuevo de 2,5 cm tiene una probabilidad de malignidad de:', o: ['< 10 %', '≈ 50 %', '> 90 %', '0 %'], a: 2, e: 'Nódulo ≥ 2 cm en cirrosis: casi seguro CHC; estadificar.', f: 'Bates, cap. 4, p. 125' },
    { c: 'a3', q: 'Ecos internos declives en la vesícula, con nivel y movimiento lento al cambiar de posición, sin sombra:', o: ['Pólipos', 'Barro biliar', 'Cálculos', 'Adenomiomatosis'], a: 1, e: 'Sedimento biliar por bilis estancada.', f: 'ABC, p. 20' },
    { c: 'a3', q: 'Pólipo vesicular único, sésil, de 12 mm en un paciente de 60 años. Conducta según el ABC:', o: ['Control en 5 años', 'Interconsulta con cirugía para colecistectomía', 'Nada', 'Antibióticos'], a: 1, e: '≥ 10 mm → colecistectomía.', f: 'ABC, p. 22' },
    { c: 'a3', q: 'Pared vesicular engrosada en un paciente con hepatitis aguda y sin dolor a la presión:', o: ['Colecistitis aguda', 'Engrosamiento por causa extrínseca', 'Carcinoma', 'Adenomiomatosis'], a: 1, e: 'El engrosamiento de pared no es sinónimo de colecistitis.', f: 'ABC, p. 23; Bates, fig. 3.23' },
    { c: 'a3', q: 'Diabético con sepsis; en la vesícula, gas que asciende a la pared anterior con sombra «ruidosa» que oculta el contenido:', o: ['Neumobilia', 'Colecistitis enfisematosa', 'Vesícula de porcelana', 'Intestino normal'], a: 1, e: 'Gas en luz y pared por gérmenes formadores de gas.', f: 'Bates, cap. 3, p. 74' },
    { c: 'a3', q: 'Pared vesicular calcificada en cáscara de huevo con sombra completa:', o: ['Vesícula llena de cálculos', 'Vesícula de porcelana', 'Adenomiomatosis', 'Colecistitis aguda'], a: 1, e: 'Riesgo de carcinoma → colecistectomía profiláctica.', f: 'ABC, p. 23' },
    { c: 'a3', q: 'Vesícula contraída con cálculo en el cuello, dilatación intrahepática y colédoco inferior normal:', o: ['Coledocolitiasis distal', 'Síndrome de Mirizzi', 'Carcinoma de páncreas', 'Colangitis'], a: 1, e: 'El cálculo comprime el hepático común desde el cístico.', f: 'Bates, cap. 3, p. 64' },
    { c: 'a3', q: 'Colédoco y Wirsung dilatados con vesícula distendida. Nivel de la obstrucción:', o: ['Hilio hepático', 'Conducto cístico', 'Cabeza de páncreas o ampolla', 'Conductos intrahepáticos'], a: 2, e: 'Doble conducto → obstrucción distal.', f: 'Bates, cap. 3, p. 77' },
    { c: 'a3', q: 'Paciente con pancreatitis aguda clínica y ecografía de páncreas normal. Lo más importante a buscar es:', o: ['Metástasis', 'Cálculos o barro biliar', 'Aneurisma de aorta', 'Quistes renales'], a: 1, e: 'El páncreas puede verse normal; la ecografía busca la causa.', f: 'Bates, cap. 5, p. 160' },
    { c: 'a3', q: 'Páncreas pequeño, hiperecoico, con calcificaciones y Wirsung dilatado e irregular:', o: ['Pancreatitis aguda', 'Pancreatitis crónica', 'Esteatosis pancreática', 'Páncreas normal del anciano'], a: 1, e: 'Calcificaciones + conducto arrosariado + atrofia.', f: 'ABC, p. 27' },
    { c: 'a4', caso: true, q: 'Mujer de 45 años, fiebre y dolor en hipocondrio derecho. Ecografía: vesícula de 5 cm de diámetro transversal, pared de 6 mm, cálculo en el cuello, líquido pericolecístico y Murphy ecográfico. Diagnóstico:', o: ['Cólico biliar', 'Colecistitis aguda litiásica', 'Hepatitis', 'Adenomiomatosis'], a: 1, e: 'Cumple todos los criterios del ABC.', f: 'ABC, p. 22' },
    { c: 'a4', caso: true, q: 'Varón de 70 años con ictericia indolora y pérdida de peso. Ecografía: vía intra y extrahepática dilatada, Wirsung dilatado, vesícula distendida sin cálculos y masa hipoecoica mal definida en la cabeza del páncreas. Siguiente paso:', o: ['Colecistectomía', 'TC para estadificar', 'Alta', 'Elastografía'], a: 1, e: 'Sospecha de adenocarcinoma de cabeza de páncreas: estadificación por TC.', f: 'ABC, p. 28; Bates, cap. 5, p. 165' },
    { c: 'a4', caso: true, q: 'Paciente con bilirrubina indirecta elevada, anemia y vía biliar no dilatada. Interpretación:', o: ['Ictericia obstructiva', 'Ictericia no obstructiva, probable hemólisis', 'Coledocolitiasis', 'Mirizzi'], a: 1, e: 'Sin dilatación biliar y con bilirrubina no conjugada: causa prehepática.', f: 'Bates, cap. 2, tabla 2.1' },
    { c: 'a4', caso: true, q: 'Cirrótico por hepatitis C en control semestral. Nódulo nuevo de 3 cm que en el contraste realza en fase arterial y lava en fase sinusoidal. Diagnóstico:', o: ['Nódulo regenerativo', 'Carcinoma hepatocelular', 'Hemangioma', 'HNF'], a: 1, e: 'Patrón típico del CHC en ecografía con contraste.', f: 'Bates, cap. 4, p. 121' },
    { c: 'a4', caso: true, q: 'Paciente con fiebre y dolor en hipocondrio derecho tras una apendicitis. Lesión hepática compleja con refuerzo posterior, pared irregular y focos hiperecoicos con reverberación. Conducta:', o: ['Seguimiento en 1 año', 'Aspiración/drenaje guiado y antibióticos', 'Biopsia con aguja gruesa sin más', 'Elastografía'], a: 1, e: 'Absceso piógeno (vía portal) con gas: drenaje guiado y antibioterapia.', f: 'Bates, cap. 4, p. 104; ABC, p. 17' },
    { c: 'a4', caso: true, q: 'Joven de zona rural andina con dolor en hipocondrio derecho. Lesión quística con membranas flotantes y quistes hijos. Diagnóstico más probable:', o: ['Quiste simple', 'Quiste hidatídico', 'Absceso amebiano', 'Cistoadenoma'], a: 1, e: 'Signos de hidatidosis; no puncionar sin conocer el diagnóstico.', f: 'Bates, cap. 4, p. 103' },
    { c: 'a4', caso: true, q: 'Paciente con ascitis, hepatomegalia dolorosa y venas hepáticas no identificables con caudado hipertrofiado. Diagnóstico:', o: ['Insuficiencia cardíaca', 'Síndrome de Budd-Chiari', 'Hepatitis A', 'Esteatosis'], a: 1, e: 'En la insuficiencia cardíaca las venas hepáticas están dilatadas, no ausentes.', f: 'Bates, cap. 4, pp. 140–141' },
    { c: 'a4', caso: true, q: 'Paciente del altiplano con cólico biliar recurrente; en el colédoco dilatado se ven estructuras lineales hiperecoicas móviles. Sospecha:', o: ['Neumobilia', 'Parasitosis biliar (Ascaris)', 'Barro biliar', 'Colangiocarcinoma'], a: 1, e: 'Causa común de cólico biliar en Sudamérica; tratamiento endoscópico eficaz.', f: 'Bates, cap. 3, p. 87' }
  ],

  glosario: [
    ['Couinaud', 'División del hígado en 8 segmentos funcionales según las venas porta y hepáticas.'],
    ['Lóbulo de Riedel', 'Prolongación inferior del lóbulo derecho; variante normal.'],
    ['Cielo estrellado', 'Hígado hipoecoico con tríadas portales brillantes; hepatitis aguda.'],
    ['Hepatópeto', 'Flujo portal hacia el hígado (normal).'],
    ['Hepatófugo', 'Flujo portal que se aleja del hígado; hipertensión portal avanzada.'],
    ['Flujo equilibrado', 'Flujo portal bidireccional de baja velocidad; puede preceder a trombosis.'],
    ['Transformación cavernosa', 'Red de colaterales en la porta hepatis tras trombosis portal.'],
    ['TIPS', 'Shunt portosistémico intrahepático transyugular.'],
    ['Rueda de radios', 'Vascularización central radiada de la hiperplasia nodular focal.'],
    ['Signo WES', 'Pared–eco–sombra: vesícula contraída llena de cálculos.'],
    ['Murphy ecográfico', 'Dolor al comprimir la vesícula con el transductor.'],
    ['Gorro frigio', 'Fondo vesicular plegado; variante normal.'],
    ['Vesícula de porcelana', 'Pared vesicular calcificada; riesgo de carcinoma.'],
    ['Senos de Rokitansky-Aschoff', 'Divertículos intramurales de la adenomiomatosis.'],
    ['Doble cañón de escopeta', 'Conducto biliar dilatado paralelo a la porta.'],
    ['Doble conducto', 'Colédoco y Wirsung dilatados.'],
    ['Courvoisier', 'Vesícula distendida con ictericia: sugiere causa no litiásica.'],
    ['Mirizzi', 'Compresión del hepático común por un cálculo en el cuello o el cístico.'],
    ['Klatskin', 'Colangiocarcinoma de la confluencia de los hepáticos.'],
    ['Neumobilia', 'Aire en la vía biliar.'],
    ['Seudoquiste', 'Colección pancreática sin epitelio, rodeada de tejido fibroso.'],
    ['Páncreas divisum', 'Falta de fusión de los conductos dorsal y ventral.'],
    ['HELLP', 'Hemólisis, enzimas hepáticas elevadas y plaquetas bajas en el embarazo.']
  ]
});
