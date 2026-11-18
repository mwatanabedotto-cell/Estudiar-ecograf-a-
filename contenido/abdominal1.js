ECO.curso({
  id: 'abd1',
  codigo: '749948A',
  titulo: 'Ecografía Abdominal I',
  corto: 'Abdominal I',
  resumen: 'Hígado, vesícula, vías biliares y páncreas: técnica, anatomía normal, patrones patológicos y correlación clínica.',
  criterios: [
    {
      id: 'a1', peso: 10, pesoEstimado: true, titulo: 'Técnica y programación del equipo',
      descripcion: 'Aplica la técnica, programación y manejo correcto del equipo de acuerdo con el órgano evaluado y sus características propias.',
      temas: [
        {
          titulo: 'Protocolo de exploración hepatobiliar y pancreática',
          html: `
<ul>
<li><b>Preparación</b>: ayuno de 6–8 h. Transductor <b>convexo 2–5 MHz</b>, preset abdomen; armónicos en pacientes difíciles.</li>
<li><b>Hígado</b>: subcostal oblicuo con inspiración profunda (barrido «en abanico» de cúpula a borde inferior), longitudinal en línea medioclavicular (medida del lóbulo derecho) e intercostal para segmentos posteriores. Incluir el diafragma para comparar con riñón derecho.</li>
<li><b>Vesícula</b>: longitudinal y transversal completos, en <b>supino y decúbito lateral izquierdo</b> (movilidad de cálculos, descubre el cuello y la bolsa de Hartmann). Buscar Murphy ecográfico presionando con el transductor sobre la vesícula.</li>
<li><b>Vía biliar</b>: colédoco en oblicuo subcostal derecho, anterior a la vena porta; medir de pared interna a pared interna. Decúbito lateral izquierdo o semisentado para ver la porción distal.</li>
<li><b>Páncreas</b>: transversal epigástrico siguiendo la <b>vena esplénica</b>; compresión suave para desplazar gas. Si el estómago molesta: dar 300–500 ml de agua y explorar sentado o en decúbito lateral.</li>
<li><b>Doppler</b>: porta (dirección hepatópeta, velocidad), venas hepáticas (trifásicas), arteria hepática.</li>
</ul>
<div class="perla"><b>Perla</b>Si el cuello vesicular no se ve bien, gira al paciente a decúbito lateral izquierdo: es donde se esconden los cálculos impactados.</div>`
        }
      ]
    },
    {
      id: 'a2', peso: 20, pesoEstimado: true, titulo: 'Anatomía ecográfica normal',
      descripcion: 'Evalúa la anatomía normal del hígado, vías biliares y del páncreas, de acuerdo con patrones ecográficos estándares.',
      temas: [
        {
          titulo: 'Hígado: segmentación, vasos y medidas',
          html: `
<ul>
<li><b>Ecogenicidad normal</b>: homogénea; <b>igual o ligeramente mayor</b> que la corteza renal derecha y <b>igual o menor</b> que el bazo.</li>
<li><b>Tamaño</b>: lóbulo derecho en línea medioclavicular longitudinal &lt; 15–16 cm. El borde inferior es agudo; redondeado en hepatomegalia o esteatosis. Variante: <b>lóbulo de Riedel</b> (prolongación inferior del lóbulo derecho, más frecuente en mujeres).</li>
<li><b>Segmentación de Couinaud</b> (8 segmentos): las <b>venas hepáticas</b> dividen el hígado en sentido vertical (sectores); la <b>vena porta</b> lo divide en superior e inferior. El segmento I (caudado) drena directamente a la VCI.</li>
<li>Referencias: ligamento redondo y fisura del ligamento venoso (separa el caudado del lóbulo izquierdo), vesícula y VCI (línea de Cantlie: lóbulo derecho vs izquierdo).</li>
</ul>
<div class="tabla"><table><thead><tr><th>Vaso</th><th>Aspecto en modo B</th><th>Doppler normal</th></tr></thead><tbody>
<tr><td>Vena porta</td><td>Paredes <b>hiperecoicas</b> (tejido fibroso de la tríada portal); calibre &lt; 13 mm</td><td>Hepatópeto, continuo, ondulado; 15–40 cm/s</td></tr>
<tr><td>Venas hepáticas</td><td>Paredes finas, casi imperceptibles; convergen a la VCI</td><td><b>Trifásico</b> (refleja el ciclo cardíaco)</td></tr>
<tr><td>Arteria hepática</td><td>Pequeña, junto a la porta</td><td>Baja resistencia; IR 0,55–0,7</td></tr>
</tbody></table></div>`
        },
        {
          titulo: 'Vesícula y vía biliar',
          html: `
<ul>
<li><b>Vesícula</b>: piriforme, anecoica; longitud 7–10 cm, transversal &lt; 4 cm; <b>pared ≤ 3 mm</b> en ayunas. Partes: fondo, cuerpo, cuello y bolsa de Hartmann. Variantes: <b>gorro frigio</b> (pliegue del fondo), pliegues de unión, vesícula doble (rara).</li>
<li>Posprandial: vesícula contraída con pared aparentemente gruesa → <b>no valorable</b>, no es patológico.</li>
<li><b>Colédoco</b>: ≤ 6 mm en adultos. Con la edad se acepta ~1 mm adicional por década por encima de los 60. Poscolecistectomía, hasta 8–10 mm sin significado patológico si no hay clínica.</li>
<li><b>Vías intrahepáticas</b>: ≤ 2 mm o &lt; 40 % del diámetro de la rama portal acompañante.</li>
<li>En el hilio, corte transversal: signo de «<b>Mickey Mouse</b>»: la porta es la cabeza, el colédoco (anterolateral) y la arteria hepática (anteromedial) son las orejas.</li>
</ul>
<div class="perla"><b>Perla</b>Para distinguir vía biliar de vaso: activa Doppler color. Los conductos biliares no tienen flujo.</div>`
        },
        {
          titulo: 'Páncreas: referencias vasculares',
          html: `
<ul>
<li>Partes: <b>cabeza</b> (con el proceso uncinado), cuello, cuerpo y cola.</li>
<li><b>Vena esplénica</b>: corre por detrás del cuerpo y la cola; es la principal referencia para encontrar el páncreas.</li>
<li><b>Confluente esplenoportal</b>: detrás del cuello.</li>
<li>Cabeza: a la derecha de la vena mesentérica superior; el proceso uncinado pasa por detrás de la VMS. El <b>colédoco</b> distal está en la cara posterolateral de la cabeza y la <b>arteria gastroduodenal</b> en la anterolateral.</li>
<li>La AMS sale de la aorta, rodeada de grasa ecogénica, por detrás de la vena esplénica.</li>
<li><b>Ecogenicidad</b>: igual o mayor que el hígado; aumenta con la edad (infiltración grasa).</li>
<li><b>Medidas</b> aproximadas (AP): cabeza ≤ 3 cm, cuerpo ≤ 2,5 cm, cola ≤ 2–2,5 cm. <b>Wirsung ≤ 3 mm</b> (≤ 2 mm en el cuerpo).</li>
</ul>`
        }
      ]
    },
    {
      id: 'a3', peso: 40, pesoEstimado: true, titulo: 'Patrones ecográficos de enfermedad',
      descripcion: 'Identifica patrones ecográficos que se presentan en enfermedades de hígado, vesícula biliar y páncreas.',
      temas: [
        {
          titulo: 'Hígado difuso: esteatosis, hepatitis, cirrosis, congestión',
          html: `
<h4>Esteatosis hepática</h4>
<ul>
<li>Hígado <b>hiperecoico</b> («brillante») respecto al riñón derecho, con <b>atenuación posterior</b>.</li>
<li>Grado I: aumento leve de ecogenicidad, diafragma y paredes portales visibles. Grado II: paredes portales borrosas. Grado III: no se ve el diafragma ni la porción posterior del hígado.</li>
<li><b>Preservación focal</b> (área hipoecoica junto a la vesícula o en el segmento IV) e <b>infiltración focal</b>: geográficas, sin efecto de masa, los vasos las atraviesan sin desplazarse.</li>
</ul>
<h4>Hepatitis aguda</h4>
<p>A menudo normal. Puede haber hígado hipoecoico con paredes portales resaltadas («<b>cielo estrellado</b>»), hepatomegalia y engrosamiento de la pared vesicular. Hallazgos inespecíficos: el diagnóstico es clínico y de laboratorio.</p>
<h4>Cirrosis</h4>
<ul>
<li><b>Superficie nodular</b> (mejor vista con transductor lineal en la cara anterior), ecotextura gruesa y heterogénea.</li>
<li>Atrofia del lóbulo derecho y del segmento IV, <b>hipertrofia del caudado</b> y del lateral izquierdo (relación caudado / lóbulo derecho &gt; 0,65).</li>
<li><b>Hipertensión portal</b>: porta &gt; 13 mm, velocidad portal baja (&lt; 15–16 cm/s), pérdida de la variación respiratoria, <b>flujo hepatófugo</b>, esplenomegalia, ascitis y colaterales (vena paraumbilical recanalizada, gástrica izquierda, esplenorrenal).</li>
<li>Todo nódulo nuevo en un cirrótico es un <b>carcinoma hepatocelular</b> hasta demostrar lo contrario.</li>
</ul>
<h4>Congestión y Budd-Chiari</h4>
<p>Insuficiencia cardíaca derecha: VCI y venas hepáticas <b>dilatadas</b>, pérdida de colapso respiratorio, flujo portal pulsátil. Budd-Chiari: venas hepáticas trombosadas o no visibles, colaterales intrahepáticas, <b>caudado hipertrofiado</b> (drena directamente a la VCI), ascitis.</p>`
        },
        {
          titulo: 'Lesiones focales hepáticas',
          html: `
<div class="tabla"><table><thead><tr><th>Lesión</th><th>Patrón típico</th><th>Claves</th></tr></thead><tbody>
<tr><td>Quiste simple</td><td>Anecoico, pared fina, refuerzo posterior</td><td>Sin flujo; no requiere seguimiento</td></tr>
<tr><td>Hemangioma</td><td><b>Hiperecoico homogéneo</b>, bien definido, &lt; 3 cm</td><td>Tumor benigno más frecuente; sin flujo central; en CEUS realce globular periférico centrípeto</td></tr>
<tr><td>Hiperplasia nodular focal</td><td>Iso o levemente hipoecoica («lesión fantasma»), cicatriz central</td><td>Doppler en <b>rueda de carro</b>; mujer joven</td></tr>
<tr><td>Adenoma</td><td>Variable, puede tener hemorragia</td><td>Mujer con anticonceptivos orales; riesgo de sangrado</td></tr>
<tr><td>Absceso piógeno</td><td>Hipoecoico/complejo, pared irregular, detritos, a veces gas</td><td>Fiebre; origen biliar frecuente; drenaje guiado</td></tr>
<tr><td>Absceso amebiano</td><td>Redondo, hipoecoico homogéneo con ecos finos, periférico, subcapsular, lóbulo derecho</td><td>Antecedente epidemiológico; responde a metronidazol</td></tr>
<tr><td>Quiste hidatídico</td><td>Signo del <b>nenúfar</b> (membranas desprendidas), quistes hijos en «panal», arena hidatídica, calcificación</td><td><i>Echinococcus granulosus</i>; clasificación OMS CE1–CE5; zona endémica andina</td></tr>
<tr><td>Carcinoma hepatocelular</td><td>Pequeño: hipoecoico; grande: heterogéneo «en mosaico», halo</td><td>Cirrosis; trombosis portal tumoral (con flujo arterial dentro del trombo); AFP</td></tr>
<tr><td>Metástasis</td><td>Múltiples; patrón en <b>diana / ojo de buey</b> (halo hipoecoico)</td><td>Hiperecoicas: colon, neuroendocrinas, renal. Hipoecoicas: mama, pulmón, linfoma. Calcificadas: colon mucinoso</td></tr>
</tbody></table></div>
<div class="perla"><b>Vigilancia</b>En pacientes con cirrosis se recomienda ecografía cada 6 meses (con o sin AFP) para detección precoz de carcinoma hepatocelular.</div>`
        },
        {
          titulo: 'Vesícula y vías biliares',
          html: `
<h4>Colelitiasis</h4>
<ul>
<li>Foco <b>hiperecoico</b>, <b>sombra acústica posterior limpia</b> y <b>móvil</b> con el cambio de posición.</li>
<li>Vesícula llena de cálculos y contraída: signo <b>WES</b> (<i>wall – echo – shadow</i>: pared, eco del cálculo, sombra).</li>
<li><b>Barro biliar</b>: ecos de baja amplitud, declives, sin sombra, forman nivel; puede formar «pseudotumor» (sin flujo).</li>
<li><b>Pólipo</b>: ecogénico, adherido a la pared, <b>no móvil, sin sombra</b>. ≥ 10 mm → colecistectomía; 6–9 mm con factores de riesgo → considerar cirugía; resto → seguimiento.</li>
</ul>
<h4>Colecistitis aguda litiásica</h4>
<ul>
<li>Cálculos (sobre todo <b>impactados en el cuello</b>) + <b>Murphy ecográfico positivo</b>: valor predictivo positivo &gt; 90 %.</li>
<li>Pared &gt; 3 mm, edematosa (estratificada, «doble halo»), líquido pericolecístico, distensión (&gt; 4 cm transversal), hiperemia en Doppler.</li>
<li><b>Complicaciones</b>: gangrenosa (membranas intraluminales, pared irregular, el Murphy puede desaparecer), enfisematosa (gas en la pared, diabéticos), perforación (defecto de pared, colección pericolecística).</li>
<li><b>Alitiásica</b>: paciente crítico (UCI, quemados, nutrición parenteral).</li>
</ul>
<h4>Dilatación de la vía biliar</h4>
<ul>
<li>Intrahepática: «<b>demasiados tubos</b>» (estructuras tubulares paralelas a la porta, sin flujo Doppler).</li>
<li>Extrahepática: signo del «<b>doble cañón de escopeta</b>»: colédoco dilatado del mismo calibre que la porta.</li>
<li><b>Coledocolitiasis</b>: la ecografía detecta bien la dilatación pero tiene sensibilidad limitada (≈ 50–75 %) para el cálculo distal por el gas duodenal → colangio-RM o ecoendoscopia.</li>
<li>Nivel de la obstrucción: dilatación intrahepática con colédoco normal → hiliar (Klatskin, Mirizzi). Colédoco + Wirsung dilatados → ampular o cabeza de páncreas (<b>signo del doble conducto</b>).</li>
<li><b>Síndrome de Mirizzi</b>: cálculo en el cuello o el cístico comprime el conducto hepático común.</li>
<li><b>Neumobilia</b>: focos lineales hiperecoicos con reverberación, en zonas no declives; tras CPRE con esfinterotomía o fístula biliodigestiva.</li>
</ul>
<h4>Tumores</h4>
<p><b>Cáncer de vesícula</b>: masa que reemplaza la vesícula o engrosamiento focal irregular; factores de riesgo: litiasis grande, vesícula en porcelana. <b>Colangiocarcinoma hiliar (Klatskin)</b>: dilatación intrahepática bilateral, vesícula colapsada, colédoco normal.</p>`
        },
        {
          titulo: 'Páncreas',
          html: `
<h4>Pancreatitis aguda</h4>
<ul>
<li>El diagnóstico es <b>clínico y bioquímico</b>. El papel principal de la ecografía es buscar <b>litiasis biliar</b> (causa más frecuente).</li>
<li>Puede ser normal o mostrar páncreas aumentado, hipoecoico, de bordes borrosos, con líquido peripancreático.</li>
<li>Complicaciones: colecciones líquidas agudas, <b>pseudoquiste</b> (&gt; 4 semanas, pared definida), necrosis encapsulada, <b>pseudoaneurisma</b> (Doppler en «yin-yang»), trombosis de la vena esplénica.</li>
<li>TC con contraste a las 72–96 h para valorar necrosis (no al ingreso salvo duda diagnóstica).</li>
</ul>
<h4>Pancreatitis crónica</h4>
<p><b>Calcificaciones</b> (focos hiperecoicos con sombra), Wirsung dilatado e irregular («arrosariado»), atrofia, pseudoquistes.</p>
<h4>Adenocarcinoma</h4>
<p>Masa <b>hipoecoica mal definida</b>, 60–70 % en la cabeza; <b>doble conducto</b> (colédoco y Wirsung dilatados), vesícula distendida (signo de <b>Courvoisier-Terrier</b>: vesícula palpable no dolorosa con ictericia), metástasis hepáticas, invasión de AMS, VMS o eje esplenoportal.</p>
<h4>Neoplasias quísticas</h4>
<ul>
<li>Cistoadenoma seroso: microquístico «en panal», cicatriz central calcificada, mujer mayor.</li>
<li>Mucinoso: macroquístico, cola, mujer de mediana edad, potencial maligno.</li>
<li>NMPI (IPMN): comunica con el conducto pancreático, varón mayor.</li>
<li>Sólido pseudopapilar: mujer joven.</li>
</ul>`
        }
      ]
    },
    {
      id: 'a4', peso: 30, pesoEstimado: true, titulo: 'Interpretación con correlación clínica',
      descripcion: 'Interpreta los hallazgos ecográficos patológicos, haciendo una correlación clínica.',
      temas: [
        {
          titulo: 'Razonamiento: de la clínica al hallazgo',
          html: `
<div class="tabla"><table><thead><tr><th>Escenario clínico</th><th>Qué buscar</th><th>Interpretación</th></tr></thead><tbody>
<tr><td>Dolor en HCD + fiebre + leucocitosis</td><td>Cálculos, Murphy, pared, líquido</td><td>Colecistitis aguda (criterios de Tokio: clínica + laboratorio + imagen)</td></tr>
<tr><td>Ictericia + dolor + fiebre (tríada de Charcot)</td><td>Dilatación de la vía biliar, coledocolitiasis</td><td>Colangitis: drenaje biliar urgente (CPRE)</td></tr>
<tr><td>Ictericia indolora + pérdida de peso</td><td>Vía biliar dilatada, doble conducto, masa cefálica, vesícula distendida</td><td>Neoplasia periampular / cabeza de páncreas</td></tr>
<tr><td>Ictericia sin dilatación de la vía biliar</td><td>Ecotextura hepática, signos de cirrosis</td><td>Causa hepatocelular o hemolítica (no obstructiva)</td></tr>
<tr><td>Cirrótico con descompensación</td><td>Nódulo nuevo, trombosis portal, ascitis</td><td>Descartar CHC y trombosis portal</td></tr>
<tr><td>Fiebre + lesión hepática compleja</td><td>Pared, contenido, gas, origen biliar</td><td>Absceso piógeno vs amebiano: correlación epidemiológica y serológica</td></tr>
<tr><td>Dolor epigástrico + lipasa elevada</td><td>Litiasis biliar, colecciones</td><td>Pancreatitis aguda biliar → colecistectomía en el mismo ingreso si es leve</td></tr>
</tbody></table></div>
<div class="perla"><b>Informe útil</b>Responde la pregunta clínica primero («Vía biliar dilatada hasta la cabeza del páncreas, sin causa visible»), luego describe, y termina con una recomendación concreta (colangio-RM, TC, control).</div>`
        }
      ]
    }
  ],

  tarjetas: [
    ['a1', 'Posición para movilizar cálculos y ver el cuello vesicular', 'Decúbito lateral izquierdo (también semisentado).'],
    ['a1', 'Truco para ver el páncreas cuando el estómago tiene gas', 'Dar 300–500 ml de agua y explorar sentado o en decúbito lateral; compresión suave.'],
    ['a1', 'Cómo se mide el colédoco', 'Pared interna a pared interna, en oblicuo subcostal, anterior a la porta.'],
    ['a2', 'Ecogenicidad normal del hígado respecto al riñón y al bazo', 'Igual o ligeramente mayor que la corteza renal derecha; igual o menor que el bazo.'],
    ['a2', 'Tamaño normal del lóbulo hepático derecho', '< 15–16 cm en línea medioclavicular longitudinal.'],
    ['a2', 'Porta vs venas hepáticas en modo B', 'Porta: paredes hiperecoicas. Venas hepáticas: paredes casi imperceptibles que convergen a la VCI.'],
    ['a2', 'Doppler normal de la vena porta', 'Hepatópeto, continuo y ondulado; 15–40 cm/s; calibre < 13 mm.'],
    ['a2', 'Patrón Doppler de las venas hepáticas', 'Trifásico.'],
    ['a2', 'Grosor normal de la pared vesicular', '≤ 3 mm en ayunas.'],
    ['a2', 'Calibre normal del colédoco', '≤ 6 mm (≈ +1 mm por década después de los 60; hasta 8–10 mm poscolecistectomía).'],
    ['a2', 'Signo de Mickey Mouse', 'Corte transversal del hilio: porta (cabeza), colédoco anterolateral y arteria hepática anteromedial (orejas).'],
    ['a2', 'Principal referencia vascular para encontrar el páncreas', 'La vena esplénica, que pasa por detrás del cuerpo y la cola.'],
    ['a2', 'Calibre normal del Wirsung', '≤ 3 mm (≤ 2 mm en el cuerpo).'],
    ['a2', 'Segmentación de Couinaud: ¿qué estructuras dividen los segmentos?', 'Venas hepáticas (planos verticales) y vena porta (plano horizontal). 8 segmentos; el I es el caudado.'],
    ['a3', 'Tríada ecográfica del cálculo vesicular', 'Foco hiperecoico + sombra acústica limpia + movilidad.'],
    ['a3', '¿Qué es el signo WES?', 'Wall–Echo–Shadow: vesícula contraída llena de cálculos (pared, eco del cálculo, sombra).'],
    ['a3', 'Pólipo vs cálculo', 'Pólipo: fijo, sin sombra. Cálculo: móvil, con sombra.'],
    ['a3', 'Tamaño de pólipo vesicular con indicación de colecistectomía', '≥ 10 mm (6–9 mm si hay factores de riesgo).'],
    ['a3', 'Signos de colecistitis aguda', 'Cálculo impactado, Murphy ecográfico +, pared > 3 mm edematosa, líquido pericolecístico, distensión, hiperemia.'],
    ['a3', 'Colecistitis gangrenosa: hallazgos', 'Membranas intraluminales, pared irregular/asimétrica; el Murphy puede ser negativo.'],
    ['a3', 'Signo del doble cañón de escopeta', 'Colédoco dilatado paralelo a la porta, de calibre similar.'],
    ['a3', 'Signo del doble conducto', 'Colédoco y Wirsung dilatados: obstrucción ampular o de cabeza de páncreas.'],
    ['a3', 'Síndrome de Mirizzi', 'Cálculo en cuello vesicular/cístico que comprime el conducto hepático común.'],
    ['a3', 'Esteatosis: 3 signos', 'Hígado hiperecoico vs riñón, atenuación posterior, borramiento de paredes portales y del diafragma.'],
    ['a3', 'Signos ecográficos de cirrosis', 'Superficie nodular, ecotextura gruesa, hipertrofia del caudado, atrofia del lóbulo derecho, signos de hipertensión portal.'],
    ['a3', 'Signos de hipertensión portal', 'Porta > 13 mm, velocidad baja, flujo hepatófugo, esplenomegalia, ascitis, colaterales (paraumbilical, gástrica izquierda, esplenorrenal).'],
    ['a3', 'Hemangioma hepático típico', 'Hiperecoico homogéneo, bien definido, < 3 cm, sin flujo central.'],
    ['a3', 'Hiperplasia nodular focal: signo Doppler', 'Flujo en rueda de carro desde una cicatriz central.'],
    ['a3', 'Metástasis en diana u ojo de buey', 'Lesión con halo hipoecoico periférico; sugiere metástasis.'],
    ['a3', 'Signo del nenúfar', 'Membranas desprendidas flotando en un quiste hidatídico.'],
    ['a3', 'Absceso amebiano: localización y aspecto', 'Lóbulo derecho, periférico/subcapsular, redondo, hipoecoico con ecos finos.'],
    ['a3', 'Trombo portal tumoral vs blando', 'El tumoral expande la vena y tiene flujo arterial dentro (CHC).'],
    ['a3', 'Neumobilia: aspecto', 'Focos lineales hiperecoicos con reverberación en conductos, en zonas no declives.'],
    ['a3', 'Adenocarcinoma de páncreas en ecografía', 'Masa hipoecoica mal definida (cabeza 60–70 %), doble conducto, vesícula distendida.'],
    ['a3', 'Papel de la ecografía en pancreatitis aguda', 'Buscar etiología biliar (litiasis) y complicaciones; el páncreas puede verse normal.'],
    ['a3', 'Pancreatitis crónica: hallazgos', 'Calcificaciones con sombra, Wirsung dilatado e irregular, atrofia, pseudoquistes.'],
    ['a4', 'Signo de Courvoisier-Terrier', 'Vesícula palpable, distendida y no dolorosa con ictericia: obstrucción maligna distal.'],
    ['a4', 'Tríada de Charcot', 'Fiebre, ictericia y dolor en HCD: colangitis aguda.'],
    ['a4', 'Ictericia con vía biliar no dilatada: ¿qué sugiere?', 'Causa no obstructiva (hepatocelular, hemolítica, colestasis intrahepática).'],
    ['a4', 'Dilatación intrahepática con colédoco normal y vesícula colapsada', 'Obstrucción hiliar: colangiocarcinoma de Klatskin (o Mirizzi).']
  ],

  preguntas: [
    { c: 'a1', q: 'Para valorar la movilidad de un foco ecogénico en la vesícula, la maniobra más útil es:', o: ['Valsalva', 'Cambio a decúbito lateral izquierdo', 'Doppler color', 'Aumentar la frecuencia'], a: 1, e: 'El cálculo se desplaza a la zona declive con el cambio de posición; el pólipo no se mueve.' },
    { c: 'a1', q: 'La principal referencia anatómica para localizar el cuerpo del páncreas es:', o: ['La arteria renal', 'La vena esplénica', 'La vena cava inferior', 'La vesícula biliar'], a: 1, e: 'La vena esplénica corre por detrás del cuerpo y la cola del páncreas.' },
    { c: 'a2', q: 'En un hígado normal, la ecogenicidad del parénquima comparada con la corteza renal derecha es:', o: ['Marcadamente menor', 'Igual o ligeramente mayor', 'Marcadamente mayor con atenuación', 'Anecoica'], a: 1, e: 'Hígado igual o ligeramente más ecogénico que la corteza renal. Mucho más ecogénico con atenuación sugiere esteatosis.' },
    { c: 'a2', q: '¿Qué vaso intrahepático tiene paredes hiperecoicas en modo B?', o: ['Venas hepáticas', 'Vena porta', 'Vena cava inferior', 'Arteria renal'], a: 1, e: 'Las ramas portales están rodeadas por el tejido fibroso de la tríada portal, que es ecogénico.' },
    { c: 'a2', q: 'Diámetro máximo normal del colédoco en un adulto de 40 años sin colecistectomía:', o: ['3 mm', '6 mm', '10 mm', '13 mm'], a: 1, e: 'Hasta 6 mm. Se acepta algo más en ancianos y tras colecistectomía.' },
    { c: 'a2', q: 'Patrón Doppler normal de las venas hepáticas:', o: ['Monofásico continuo', 'Trifásico', 'Ausente', 'Alta resistencia con flujo diastólico invertido'], a: 1, e: 'Las venas hepáticas reflejan el ciclo cardíaco derecho: onda trifásica.' },
    { c: 'a2', q: 'Una vesícula examinada 30 minutos después del almuerzo muestra pared de 5 mm y luz pequeña. Interpretación:', o: ['Colecistitis aguda', 'Hallazgo no valorable por contracción posprandial', 'Adenomiomatosis', 'Cáncer de vesícula'], a: 1, e: 'La vesícula contraída simula engrosamiento: repetir en ayunas.' },
    { c: 'a2', q: 'El segmento hepático que drena directamente a la vena cava inferior es:', o: ['Segmento IV', 'Segmento I (caudado)', 'Segmento VII', 'Segmento II'], a: 1, e: 'Por eso el caudado se hipertrofia en el Budd-Chiari: su drenaje está preservado.' },
    { c: 'a3', q: 'Foco hiperecoico en la vesícula, de 6 mm, fijo a la pared, sin sombra acústica. Diagnóstico más probable:', o: ['Cálculo', 'Pólipo', 'Barro biliar', 'Gas'], a: 1, e: 'Fijo y sin sombra es pólipo. El cálculo es móvil y produce sombra.' },
    { c: 'a3', q: 'El hallazgo con mayor valor predictivo positivo para colecistitis aguda es:', o: ['Pared de 4 mm aislada', 'Cálculos + Murphy ecográfico positivo', 'Barro biliar', 'Vesícula de 9 cm'], a: 1, e: 'La combinación de cálculos y Murphy ecográfico tiene VPP > 90 %. El engrosamiento aislado es inespecífico (ascitis, hepatitis, ICC, hipoalbuminemia).' },
    { c: 'a3', q: 'Hígado brillante con atenuación del haz que impide ver el diafragma. Grado de esteatosis:', o: ['Grado I', 'Grado II', 'Grado III', 'No es esteatosis'], a: 2, e: 'Grado III: no se visualiza el diafragma ni el hígado posterior.' },
    { c: 'a3', q: 'Lesión hepática hiperecoica, homogénea, de 2 cm, bien definida, en paciente asintomático. Lo más probable:', o: ['Metástasis', 'Hemangioma', 'Absceso', 'Carcinoma hepatocelular'], a: 1, e: 'Es el tumor benigno hepático más frecuente y su aspecto típico.' },
    { c: 'a3', q: 'Quiste hepático con membranas onduladas flotando en su interior en un paciente de zona rural ganadera:', o: ['Quiste simple', 'Quiste hidatídico (signo del nenúfar)', 'Absceso amebiano', 'Cistoadenoma'], a: 1, e: 'Las membranas desprendidas son el signo del nenúfar de la hidatidosis (CE3a de la OMS).' },
    { c: 'a3', q: '¿Cuál de estos hallazgos NO es un signo de hipertensión portal?', o: ['Flujo portal hepatófugo', 'Esplenomegalia', 'Vena paraumbilical recanalizada', 'Flujo trifásico en venas hepáticas'], a: 3, e: 'El flujo trifásico de las venas hepáticas es normal.' },
    { c: 'a3', q: 'Múltiples lesiones hepáticas con halo hipoecoico periférico (en diana) sugieren:', o: ['Hemangiomas', 'Metástasis', 'Quistes simples', 'Esteatosis focal'], a: 1, e: 'El patrón en ojo de buey es característico de metástasis.' },
    { c: 'a3', q: 'Focos ecogénicos lineales en conductos biliares, en zona no declive, con reverberación, tras una CPRE con esfinterotomía:', o: ['Coledocolitiasis', 'Neumobilia', 'Calcificaciones portales', 'Hemobilia'], a: 1, e: 'El aire en la vía biliar es esperable después de la esfinterotomía.' },
    { c: 'a3', q: 'Signo del doble conducto en ecografía:', o: ['Dilatación de venas hepáticas y porta', 'Dilatación del colédoco y del Wirsung', 'Duplicación vesicular', 'Porta y arteria hepática paralelas'], a: 1, e: 'Indica obstrucción a nivel de la ampolla o la cabeza del páncreas.' },
    { c: 'a3', q: 'Área hipoecoica geográfica junto a la fosa vesicular en un hígado esteatósico, sin efecto de masa y atravesada por vasos:', o: ['Metástasis', 'Preservación focal de grasa', 'Hepatocarcinoma', 'Absceso'], a: 1, e: 'Las áreas de preservación focal típicas están en el segmento IV y junto a la vesícula.' },
    { c: 'a3', q: 'Paciente con pancreatitis aguda hace 6 semanas. Colección anecoica con pared bien definida junto al páncreas:', o: ['Colección líquida aguda', 'Pseudoquiste', 'Absceso hepático', 'Cistoadenoma seroso'], a: 1, e: 'Después de 4 semanas, una colección encapsulada sin necrosis es un pseudoquiste.' },
    { c: 'a4', caso: true, q: 'Mujer de 45 años, dolor en HCD de 24 h, fiebre 38,5 °C, leucocitosis. Ecografía: cálculo impactado en el cuello, pared de 6 mm estratificada, líquido pericolecístico y Murphy ecográfico positivo. Diagnóstico:', o: ['Cólico biliar simple', 'Colecistitis aguda litiásica', 'Hepatitis aguda', 'Pancreatitis aguda'], a: 1, e: 'Cumple criterios clínicos, de laboratorio y de imagen (Tokio).' },
    { c: 'a4', caso: true, q: 'Varón de 68 años con ictericia indolora, prurito y pérdida de 8 kg. Ecografía: vía biliar intra y extrahepática dilatada, Wirsung de 5 mm, vesícula distendida no dolorosa. Sospecha principal:', o: ['Coledocolitiasis', 'Neoplasia de cabeza de páncreas o periampular', 'Hepatitis viral', 'Colangiocarcinoma hiliar'], a: 1, e: 'Doble conducto + Courvoisier + ictericia indolora con pérdida de peso → neoplasia distal. Siguiente paso: TC con protocolo de páncreas.' },
    { c: 'a4', caso: true, q: 'Paciente con fiebre, ictericia y dolor en HCD. Ecografía: colédoco de 11 mm con imagen ecogénica con sombra distal. Conducta prioritaria:', o: ['Alta con analgesia', 'Antibióticos y drenaje biliar (CPRE)', 'Colecistectomía electiva en 3 meses', 'Biopsia hepática'], a: 1, e: 'Tríada de Charcot con coledocolitiasis: colangitis aguda. Requiere antibióticos y descompresión biliar.' },
    { c: 'a4', caso: true, q: 'Paciente con ictericia, bilirrubina indirecta elevada y anemia. Ecografía: vía biliar no dilatada, esplenomegalia leve. Interpretación:', o: ['Obstrucción biliar distal', 'Ictericia no obstructiva, probable hemólisis', 'Colangiocarcinoma', 'Síndrome de Mirizzi'], a: 1, e: 'Sin dilatación de la vía biliar y con hiperbilirrubinemia indirecta, la causa es prehepática.' },
    { c: 'a4', caso: true, q: 'Cirrótico por VHC en seguimiento. Aparece un nódulo hipoecoico nuevo de 2,5 cm y la porta derecha tiene material ecogénico con flujo arterial en su interior. Interpretación:', o: ['Nódulo de regeneración y trombo blando', 'Carcinoma hepatocelular con trombosis tumoral portal', 'Hemangioma', 'Esteatosis focal'], a: 1, e: 'Nódulo nuevo en cirrosis + trombo con flujo arterial = CHC con invasión portal.' },
    { c: 'a4', caso: true, q: 'Joven de zona endémica con fiebre y dolor en HCD tras diarrea. Lesión redonda, hipoecoica homogénea con ecos finos, subcapsular en el lóbulo derecho. Diagnóstico más probable:', o: ['Absceso amebiano', 'Quiste hidatídico CE1', 'Hemangioma', 'Metástasis'], a: 0, e: 'Localización y aspecto típicos del absceso amebiano; correlacionar con serología.' }
  ],

  glosario: [
    ['Signo WES', 'Wall–Echo–Shadow: vesícula contraída llena de cálculos.'],
    ['Murphy ecográfico', 'Dolor máximo al presionar con el transductor directamente sobre la vesícula.'],
    ['Barro biliar', 'Ecos de baja amplitud, declives, sin sombra acústica, dentro de la vesícula.'],
    ['Courvoisier-Terrier', 'Vesícula distendida, palpable y no dolorosa con ictericia: sugiere obstrucción maligna distal.'],
    ['Doble conducto', 'Dilatación simultánea del colédoco y del Wirsung.'],
    ['Flujo hepatófugo', 'Flujo portal que se aleja del hígado; signo de hipertensión portal avanzada.'],
    ['Hepatópeto', 'Flujo portal normal, dirigido hacia el hígado.'],
    ['Signo del nenúfar', 'Membranas desprendidas flotando dentro de un quiste hidatídico.'],
    ['Neumobilia', 'Aire en la vía biliar.'],
    ['Síndrome de Mirizzi', 'Compresión del conducto hepático común por un cálculo en el cuello vesicular o el cístico.'],
    ['Couinaud', 'Clasificación del hígado en 8 segmentos según la anatomía portal y venosa hepática.'],
    ['Gorro frigio', 'Variante normal: pliegue del fondo de la vesícula.'],
    ['Lóbulo de Riedel', 'Prolongación inferior del lóbulo hepático derecho; variante normal.'],
    ['Pseudoquiste pancreático', 'Colección encapsulada sin necrosis, de más de 4 semanas de evolución tras una pancreatitis.']
  ]
});
