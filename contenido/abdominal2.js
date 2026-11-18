ECO.curso({
  id: 'abd2',
  codigo: '9329289',
  titulo: 'Ecografía Abdominal II',
  corto: 'Abdominal II',
  resumen: 'Riñón, vías urinarias, glándulas suprarrenales y bazo: técnica, anatomía normal, patrones patológicos y correlación clínica.',
  criterios: [
    {
      id: 'r1', peso: 10, titulo: 'Técnica y programación del equipo',
      descripcion: 'Aplica la técnica, programación y manejo correcto del equipo de acuerdo con el órgano evaluado y sus características propias.',
      temas: [
        {
          titulo: 'Protocolo renal, suprarrenal y esplénico',
          html: `
<ul>
<li>Transductor <b>convexo 2–5 MHz</b>; preset renal o abdomen. Doppler color/espectral para vasos renales e índices de resistencia.</li>
<li><b>Riñón derecho</b>: supino o decúbito lateral izquierdo, usando el <b>hígado como ventana</b>; inspiración profunda.</li>
<li><b>Riñón izquierdo</b>: decúbito lateral derecho, abordaje <b>posterolateral/coronal</b> e intercostal, usando el bazo como ventana (el gas del colon y el estómago molestan desde anterior).</li>
<li>Medir la longitud en el <b>eje mayor verdadero</b> (el corte donde el riñón es más largo); un corte oblicuo lo subestima.</li>
<li><b>Vejiga</b>: con repleción moderada; volumen = largo × ancho × AP × 0,52. Medir residuo posmiccional.</li>
<li><b>Suprarrenales</b>: derecha entre el polo superior renal, el pilar diafragmático y por detrás de la VCI; izquierda anteromedial al polo superior renal izquierdo, lateral a la aorta. Difíciles en adultos, fáciles en neonatos.</li>
<li><b>Bazo</b>: decúbito lateral derecho o supino, intercostal en línea axilar posterior izquierda, inspiración moderada; medir la longitud mayor (polo a polo) en coronal.</li>
</ul>
<div class="perla"><b>Perla</b>Si la hidronefrosis parece leve, pide que vacíe la vejiga y repite: una vejiga sobredistendida puede dilatar los sistemas colectores.</div>`
        }
      ]
    },
    {
      id: 'r2', peso: 20, titulo: 'Anatomía ecográfica normal',
      descripcion: 'Evalúa la anatomía normal del riñón, glándulas suprarrenales y bazo, de acuerdo con patrones ecográficos estándares.',
      temas: [
        {
          titulo: 'Riñón normal y variantes',
          html: `
<div class="tabla"><table><thead><tr><th>Parámetro</th><th>Valor normal adulto</th></tr></thead><tbody>
<tr><td>Longitud</td><td class="mono">10–12 cm (diferencia entre ambos &lt; 2 cm)</td></tr>
<tr><td>Ancho / grosor</td><td class="mono">5–7 cm / 3–5 cm</td></tr>
<tr><td>Grosor del parénquima</td><td class="mono">≥ 1,5 cm (cortical ≈ 7–10 mm)</td></tr>
<tr><td>Índice de resistencia intrarrenal</td><td class="mono">&lt; 0,70</td></tr>
</tbody></table></div>
<ul>
<li><b>Corteza</b>: hipoecoica o isoecoica respecto al hígado y al bazo.</li>
<li><b>Pirámides medulares</b>: triangulares hipoecoicas (muy marcadas en niños; no confundir con hidronefrosis ni quistes).</li>
<li><b>Seno renal</b>: central e hiperecoico (grasa, vasos, sistema colector).</li>
</ul>
<h4>Variantes que simulan patología</h4>
<ul>
<li><b>Columna de Bertin hipertrófica</b>: tejido cortical normal que protruye al seno; isoecoico con la corteza y con vasos normales en Doppler.</li>
<li><b>Joroba de dromedario</b>: abultamiento del borde lateral del riñón izquierdo por impresión del bazo.</li>
<li><b>Lobulación fetal</b>: contorno ondulado con muescas entre las pirámides (no sobre ellas, a diferencia de las cicatrices).</li>
<li><b>Defecto de unión parenquimatosa</b>: línea ecogénica triangular en el polo superior.</li>
<li><b>Pelvis extrarrenal</b>: pelvis fuera del seno que simula hidronefrosis, sin dilatación calicial.</li>
<li>Duplicación del sistema colector, riñón en <b>herradura</b> (fusión de polos inferiores, istmo anterior a la aorta, por debajo de la AMI), ectopia pélvica, agenesia.</li>
</ul>`
        },
        {
          titulo: 'Vejiga, suprarrenales y bazo',
          html: `
<h4>Vejiga</h4>
<ul><li>Pared ≤ 3 mm distendida (≤ 5 mm vacía). Contenido anecoico.</li><li><b>Chorros ureterales</b> (jets) en Doppler color: confirman permeabilidad ureteral.</li><li>Residuo posmiccional normal &lt; 50 ml (en ancianos se toleran hasta ~100 ml).</li><li>Próstata (transabdominal): volumen normal ≈ 20–25 ml.</li></ul>
<h4>Suprarrenales</h4>
<p>Forma de <b>V, Y o lambda (λ)</b>, ramas finas (≈ 2–6 mm) hipoecoicas. En el neonato son grandes, con corteza hipoecoica y médula ecogénica.</p>
<h4>Bazo</h4>
<ul>
<li>Longitud <b>≤ 12–13 cm</b>. Ecotextura homogénea, <b>igual o ligeramente más ecogénico que el hígado</b>.</li>
<li><b>Bazo accesorio</b> (esplenúnculo): 10–30 % de la población, nódulo redondo cerca del hilio, &lt; 2 cm, con la misma ecogenicidad del bazo.</li>
<li>Variantes: lobulaciones, hendiduras (no confundir con laceraciones), bazo errante.</li>
</ul>`
        }
      ]
    },
    {
      id: 'r3', peso: 40, titulo: 'Patrones ecográficos de enfermedad',
      descripcion: 'Identifica patrones ecográficos que se presentan en enfermedades del riñón, glándulas suprarrenales y bazo.',
      temas: [
        {
          titulo: 'Hidronefrosis y litiasis',
          html: `
<h4>Hidronefrosis</h4>
<p>Separación anecoica del seno renal con <b>estructuras que se comunican</b> (pelvis y cálices).</p>
<div class="tabla"><table><thead><tr><th>Grado</th><th>Hallazgos</th></tr></thead><tbody>
<tr><td>Leve (I)</td><td>Dilatación de la pelvis, cálices apenas visibles</td></tr>
<tr><td>Moderada (II–III)</td><td>Cálices dilatados y redondeados («balonamiento»), parénquima conservado</td></tr>
<tr><td>Severa (IV)</td><td>Dilatación marcada con <b>adelgazamiento cortical</b></td></tr>
</tbody></table></div>
<p><b>Falsos positivos</b>: vejiga sobredistendida, pelvis extrarrenal, quistes parapiélicos (no comunican), vasos del seno (Doppler), embarazo, diuresis forzada.</p>
<p><b>Obstrucción aguda</b>: IR &gt; 0,70 o diferencia &gt; 0,1 con el riñón contralateral; jet ureteral ausente o disminuido del lado afectado.</p>
<h4>Litiasis</h4>
<ul>
<li>Foco <b>hiperecoico con sombra acústica</b>; el <b>artefacto de centelleo</b> (twinkling) en Doppler color ayuda en cálculos pequeños.</li>
<li>Los cálculos ureterales se impactan en los tres estrechamientos: <b>unión pieloureteral, cruce de los vasos ilíacos y unión ureterovesical</b>.</li>
<li>La TC sin contraste es el estándar para litiasis ureteral; la ecografía es primera línea en embarazadas, niños y para seguimiento.</li>
</ul>`
        },
        {
          titulo: 'Quistes y masas renales',
          html: `
<h4>Quiste simple</h4>
<p>Anecoico, redondo, pared fina y lisa, <b>refuerzo posterior</b>, sin flujo. Muy frecuente en mayores de 50 años; no requiere seguimiento.</p>
<h4>Clasificación de Bosniak (creada para TC, aplicada también a RM y CEUS)</h4>
<div class="tabla"><table><thead><tr><th>Categoría</th><th>Características</th><th>Conducta</th></tr></thead><tbody>
<tr><td>I</td><td>Quiste simple</td><td>Benigno, sin seguimiento</td></tr>
<tr><td>II</td><td>Pocos septos finos, calcificación fina, quiste hiperdenso &lt; 3 cm</td><td>Benigno</td></tr>
<tr><td>IIF</td><td>Más septos finos, leve engrosamiento, calcificación nodular</td><td>Seguimiento</td></tr>
<tr><td>III</td><td>Pared o septos engrosados e irregulares con realce</td><td>≈ 50 % malignos: cirugía o vigilancia activa</td></tr>
<tr><td>IV</td><td>Componente sólido con realce</td><td>Maligno: cirugía</td></tr>
</tbody></table></div>
<h4>Poliquistosis renal autosómica dominante</h4>
<p>Riñones <b>aumentados</b> con múltiples quistes bilaterales; quistes hepáticos asociados. Criterios de Pei-Ravine (con antecedente familiar): 15–39 años ≥ 3 quistes (uni o bilaterales); 40–59 años ≥ 2 en cada riñón; ≥ 60 años ≥ 4 en cada riñón. Asociación con aneurismas cerebrales.</p>
<h4>Masas sólidas</h4>
<ul>
<li><b>Angiomiolipoma</b>: <b>muy hiperecoico</b> (grasa), bien definido, puede tener sombra. Asociado a esclerosis tuberosa. Riesgo de sangrado si &gt; 4 cm.</li>
<li><b>Carcinoma de células renales</b>: masa sólida de ecogenicidad variable; los pequeños pueden ser hiperecoicos (simulan angiomiolipoma). A favor de carcinoma: <b>halo hipoecoico</b>, componentes quísticos, calcificaciones. Buscar <b>trombo tumoral en vena renal y VCI</b>.</li>
<li>Carcinoma urotelial: masa en el seno renal o engrosamiento urotelial.</li>
<li>Linfoma: masas hipoecoicas múltiples o infiltración difusa.</li>
</ul>`
        },
        {
          titulo: 'Enfermedad renal médica e infecciones',
          html: `
<h4>Enfermedad renal crónica</h4>
<p>Riñones <b>pequeños</b> (&lt; 9 cm), corteza <b>hiperecoica</b> (más que el hígado), adelgazamiento cortical, pérdida de la diferenciación corticomedular. Si son pequeños y ecogénicos, la biopsia aporta poco.</p>
<p><b>ERC con riñones de tamaño normal o grandes</b>: diabetes, amiloidosis, poliquistosis, nefropatía por VIH, mieloma.</p>
<h4>Nefropatía aguda</h4>
<p>Glomerulonefritis, necrosis tubular aguda: riñones normales o aumentados, corteza hiperecoica. Lo más importante en la insuficiencia renal aguda es <b>descartar obstrucción</b>.</p>
<h4>Infecciones</h4>
<ul>
<li><b>Pielonefritis aguda</b>: con frecuencia la ecografía es normal. Puede haber aumento de tamaño, áreas focales hipo/hiperecoicas, hipoperfusión en power Doppler, engrosamiento urotelial.</li>
<li><b>Absceso renal</b>: colección compleja con pared gruesa.</li>
<li><b>Pionefrosis</b>: hidronefrosis con <b>ecos internos o nivel líquido-detrito</b> → urgencia urológica (nefrostomía o catéter doble J).</li>
<li><b>Pielonefritis enfisematosa</b>: gas en el parénquima (focos ecogénicos con sombra sucia); diabéticos; alta mortalidad.</li>
</ul>
<h4>Vascular</h4>
<p><b>Estenosis de la arteria renal</b>: velocidad pico sistólica &gt; 180–200 cm/s, índice renoaórtico &gt; 3,5; intrarrenal: onda <b>parvus-tardus</b> (tiempo de aceleración &gt; 70 ms).</p>`
        },
        {
          titulo: 'Vejiga y suprarrenales',
          html: `
<h4>Vejiga</h4>
<ul>
<li><b>Litiasis vesical</b>: hiperecoica, con sombra, <b>móvil</b>.</li>
<li><b>Tumor vesical</b>: masa <b>fija</b> a la pared, con <b>flujo</b> en Doppler. Hematuria indolora en fumador.</li>
<li><b>Coágulo</b>: móvil, sin flujo, puede cambiar de forma.</li>
<li>Vejiga de esfuerzo: pared engrosada y trabeculada, divertículos; asociada a hiperplasia prostática.</li>
</ul>
<h4>Suprarrenales</h4>
<div class="tabla"><table><thead><tr><th>Lesión</th><th>Claves</th></tr></thead><tbody>
<tr><td>Adenoma</td><td>La más frecuente; &lt; 4 cm, homogénea, bien definida. Confirmar con TC (&lt; 10 UH) o RM</td></tr>
<tr><td>Mielolipoma</td><td>Muy hiperecoico (grasa macroscópica); benigno</td></tr>
<tr><td>Hemorragia suprarrenal</td><td>Neonatos (parto traumático, hipoxia) y adultos anticoagulados o sépticos; evoluciona de ecogénica a anecoica y disminuye; <b>sin flujo</b></td></tr>
<tr><td>Feocromocitoma</td><td>Masa &gt; 3 cm heterogénea, con áreas quísticas; HTA paroxística; metanefrinas</td></tr>
<tr><td>Carcinoma</td><td>&gt; 4–6 cm, heterogéneo, necrosis, invasión de VCI</td></tr>
<tr><td>Metástasis</td><td>Pulmón, mama, melanoma; a menudo bilaterales</td></tr>
<tr><td>Neuroblastoma (niños)</td><td>Masa sólida heterogénea con <b>calcificaciones y flujo</b>; a diferencia de la hemorragia</td></tr>
</tbody></table></div>
<p>Masa suprarrenal &gt; 4 cm o con características atípicas → TC/RM y estudio hormonal.</p>`
        },
        {
          titulo: 'Bazo',
          html: `
<h4>Esplenomegalia (&gt; 12–13 cm)</h4>
<ul>
<li>Causas: hipertensión portal, infecciones (mononucleosis, malaria, leishmaniasis), hematológicas (leucemias, linfomas, anemias hemolíticas), depósito.</li>
<li><b>Masiva</b> (&gt; 20 cm): leucemia mieloide crónica, mielofibrosis, malaria, leishmaniasis visceral.</li>
<li>Mononucleosis: riesgo de rotura; evitar deportes de contacto.</li>
</ul>
<h4>Lesiones focales</h4>
<ul>
<li><b>Infarto</b>: área hipoecoica <b>en cuña</b> con base en la cápsula, <b>sin flujo</b>. Causas: embolia (endocarditis, fibrilación auricular), anemia falciforme, esplenomegalia masiva.</li>
<li><b>Trauma</b>: el bazo es el órgano sólido más lesionado en el trauma abdominal cerrado. Hematoma subcapsular (semiluna que comprime el parénquima), laceración, hematoma intraparenquimatoso, líquido perisplénico. Rotura diferida posible.</li>
<li>Hematoma: ecogénico en fase aguda, luego hipoecoico/anecoico.</li>
<li><b>Abscesos</b>: hipoecoicos; microabscesos fúngicos en inmunodeprimidos (lesiones en «rueda dentro de rueda» u ojo de buey).</li>
<li><b>Linfoma</b>: nódulos hipoecoicos múltiples o infiltración difusa con esplenomegalia.</li>
<li><b>Hemangioma</b>: tumor benigno más frecuente del bazo; hiperecoico.</li>
<li>Calcificaciones puntiformes múltiples: granulomas antiguos (tuberculosis, histoplasmosis).</li>
<li>Quistes: epidermoide (verdadero), postraumático (pseudoquiste), hidatídico.</li>
</ul>`
        }
      ]
    },
    {
      id: 'r4', peso: 30, titulo: 'Interpretación con correlación clínica',
      descripcion: 'Interpreta los hallazgos ecográficos patológicos, haciendo una correlación clínica.',
      temas: [
        {
          titulo: 'Escenarios clínicos frecuentes',
          html: `
<div class="tabla"><table><thead><tr><th>Escenario</th><th>Qué buscar</th><th>Interpretación</th></tr></thead><tbody>
<tr><td>Cólico renal</td><td>Hidronefrosis, cálculo, jet ureteral, IR</td><td>Obstrucción litiásica; TC si duda o fiebre</td></tr>
<tr><td>Fiebre + dolor lumbar + hidronefrosis con ecos</td><td>Detritos en el sistema colector</td><td>Pionefrosis: <b>drenaje urgente</b></td></tr>
<tr><td>Creatinina elevada de inicio reciente</td><td>Tamaño renal, ecogenicidad, hidronefrosis, globo vesical</td><td>Descartar causa posrenal primero</td></tr>
<tr><td>Hematuria indolora en fumador</td><td>Masa renal o vesical</td><td>Neoplasia urotelial o renal hasta demostrar lo contrario</td></tr>
<tr><td>HTA en joven o refractaria</td><td>Asimetría renal, Doppler de arteria renal, masa suprarrenal</td><td>Estenosis de arteria renal, feocromocitoma</td></tr>
<tr><td>Trauma en flanco izquierdo, taquicardia</td><td>Líquido perisplénico, hematoma</td><td>Lesión esplénica; inestable → cirugía</td></tr>
<tr><td>Fiebre + soplo nuevo + dolor en HCI</td><td>Lesión en cuña sin flujo</td><td>Infarto esplénico embólico (endocarditis)</td></tr>
</tbody></table></div>`
        }
      ]
    }
  ],

  tarjetas: [
    ['r1', 'Ventana para el riñón derecho / izquierdo', 'Derecho: hígado (supino o DLI). Izquierdo: bazo, abordaje posterolateral/coronal en decúbito lateral derecho.'],
    ['r1', 'Fórmula del volumen vesical', 'Largo × ancho × AP × 0,52.'],
    ['r1', 'Error al medir la longitud renal', 'Cortes oblicuos que no pasan por el eje mayor: subestiman el tamaño.'],
    ['r2', 'Longitud renal normal en el adulto', '10–12 cm; diferencia entre ambos < 2 cm.'],
    ['r2', 'Ecogenicidad normal de la corteza renal', 'Hipoecoica o isoecoica respecto al hígado y al bazo.'],
    ['r2', 'Índice de resistencia renal normal', '< 0,70.'],
    ['r2', 'Columna de Bertin hipertrófica', 'Corteza normal que protruye al seno; isoecoica con la corteza y con vasos normales: no es tumor.'],
    ['r2', 'Joroba de dromedario', 'Abultamiento del borde lateral del riñón izquierdo por impresión esplénica. Variante normal.'],
    ['r2', 'Riñón en herradura', 'Fusión de los polos inferiores; el istmo pasa anterior a la aorta, debajo de la AMI.'],
    ['r2', 'Forma normal de las suprarrenales', 'V, Y o lambda (λ), con ramas finas hipoecoicas.'],
    ['r2', 'Longitud normal del bazo', '≤ 12–13 cm.'],
    ['r2', 'Esplenúnculo', 'Bazo accesorio: nódulo redondo cerca del hilio, < 2 cm, igual ecogenicidad que el bazo.'],
    ['r2', 'Residuo posmiccional normal', '< 50 ml (hasta ~100 ml en ancianos).'],
    ['r3', 'Grados de hidronefrosis', 'Leve: pelvis. Moderada: cálices redondeados. Severa: con adelgazamiento cortical.'],
    ['r3', 'Falsos positivos de hidronefrosis', 'Vejiga llena, pelvis extrarrenal, quistes parapiélicos, vasos del seno, embarazo, diuresis.'],
    ['r3', 'Tres sitios de impactación de cálculos ureterales', 'Unión pieloureteral, cruce de vasos ilíacos, unión ureterovesical.'],
    ['r3', 'Artefacto de centelleo (twinkling)', 'Señal Doppler color tras superficies rugosas; ayuda a detectar cálculos.'],
    ['r3', 'Criterios de quiste renal simple', 'Anecoico, redondo, pared fina lisa, refuerzo posterior, sin flujo.'],
    ['r3', 'Bosniak III y IV', 'III: pared/septos gruesos con realce (≈ 50 % maligno). IV: componente sólido con realce (maligno).'],
    ['r3', 'Angiomiolipoma', 'Masa muy hiperecoica (grasa), bien definida; esclerosis tuberosa; sangrado si > 4 cm.'],
    ['r3', 'Signos a favor de carcinoma renal frente a angiomiolipoma', 'Halo hipoecoico, componentes quísticos, calcificaciones; buscar trombo en vena renal/VCI.'],
    ['r3', 'ERC en ecografía', 'Riñones pequeños, hiperecoicos, corteza delgada, pérdida de diferenciación corticomedular.'],
    ['r3', 'ERC con riñones grandes: causas', 'Diabetes, amiloidosis, poliquistosis, VIH, mieloma.'],
    ['r3', 'Criterios de Pei-Ravine (15–39 años)', '≥ 3 quistes renales uni o bilaterales con antecedente familiar.'],
    ['r3', 'Pionefrosis', 'Hidronefrosis con ecos internos o nivel de detritos: infección; drenaje urgente.'],
    ['r3', 'Pielonefritis enfisematosa', 'Gas en el parénquima renal (sombra sucia) en diabéticos; grave.'],
    ['r3', 'Onda parvus-tardus', 'Ascenso sistólico lento y de baja amplitud distal a una estenosis (tiempo de aceleración > 70 ms).'],
    ['r3', 'Tumor vesical vs coágulo', 'Tumor: fijo y con flujo. Coágulo: móvil y sin flujo.'],
    ['r3', 'Hemorragia suprarrenal neonatal vs neuroblastoma', 'Hemorragia: sin flujo, evoluciona a anecoica y se reduce. Neuroblastoma: flujo y calcificaciones.'],
    ['r3', 'Mielolipoma suprarrenal', 'Masa muy hiperecoica con grasa macroscópica; benigna.'],
    ['r3', 'Infarto esplénico', 'Área hipoecoica en cuña, base capsular, sin flujo.'],
    ['r3', 'Causas de esplenomegalia masiva', 'LMC, mielofibrosis, malaria, leishmaniasis visceral.'],
    ['r3', 'Órgano sólido más lesionado en trauma cerrado', 'El bazo.'],
    ['r3', 'Tumor benigno más frecuente del bazo', 'Hemangioma.'],
    ['r4', 'IRA: primer objetivo de la ecografía', 'Descartar causa obstructiva (hidronefrosis, globo vesical).'],
    ['r4', 'Hematuria indolora en fumador', 'Buscar masa vesical o renal: neoplasia hasta demostrar lo contrario.']
  ],

  preguntas: [
    { c: 'r1', q: 'La mejor ventana acústica para evaluar el riñón izquierdo es:', o: ['Anterior, a través del estómago', 'Posterolateral/coronal usando el bazo', 'Subxifoidea', 'Suprapúbica'], a: 1, e: 'Desde anterior interfieren el estómago y el colon; el bazo sirve de ventana.' },
    { c: 'r1', q: 'Vejiga de 10 × 8 × 6 cm. Volumen aproximado:', o: ['250 ml', '480 ml', '150 ml', '700 ml'], a: 0, e: '10 × 8 × 6 × 0,52 ≈ 250 ml.' },
    { c: 'r2', q: 'Longitud normal del riñón adulto:', o: ['6–8 cm', '10–12 cm', '14–16 cm', '4–6 cm'], a: 1, e: 'Rango habitual 10–12 cm; asimetría > 2 cm es significativa.' },
    { c: 'r2', q: 'En un niño, estructuras triangulares hipoecoicas alrededor del seno renal corresponden a:', o: ['Hidronefrosis', 'Quistes corticales', 'Pirámides medulares normales', 'Abscesos'], a: 2, e: 'Las pirámides son prominentes en niños y no se comunican entre sí.' },
    { c: 'r2', q: 'Una «masa» renal isoecoica con la corteza, que protruye al seno y tiene vasos normales en Doppler, es:', o: ['Carcinoma renal', 'Columna de Bertin hipertrófica', 'Angiomiolipoma', 'Linfoma'], a: 1, e: 'Seudotumor: tejido cortical normal.' },
    { c: 'r2', q: 'Nódulo de 1,5 cm cerca del hilio esplénico, redondo, de igual ecogenicidad que el bazo:', o: ['Adenopatía', 'Bazo accesorio (esplenúnculo)', 'Metástasis', 'Quiste'], a: 1, e: 'Hallazgo frecuente y benigno.' },
    { c: 'r2', q: 'Ecogenicidad normal del bazo comparada con el hígado:', o: ['Marcadamente hipoecoico', 'Igual o ligeramente mayor', 'Anecoico', 'Mucho menor con refuerzo'], a: 1, e: 'El bazo normal es igual o algo más ecogénico que el hígado.' },
    { c: 'r3', q: 'Dilatación de pelvis y cálices con adelgazamiento de la cortical. Grado:', o: ['Leve', 'Moderado', 'Severo', 'No es hidronefrosis'], a: 2, e: 'El adelgazamiento cortical define la hidronefrosis severa.' },
    { c: 'r3', q: 'Estructuras anecoicas en el seno renal que NO se comunican entre sí. Lo más probable:', o: ['Hidronefrosis', 'Quistes parapiélicos', 'Pionefrosis', 'Pelvis extrarrenal'], a: 1, e: 'En la hidronefrosis los cálices dilatados se comunican con la pelvis.' },
    { c: 'r3', q: 'Masa renal de 2 cm muy hiperecoica, bien definida, con leve sombra, en mujer con esclerosis tuberosa:', o: ['Carcinoma de células renales', 'Angiomiolipoma', 'Quiste Bosniak II', 'Columna de Bertin'], a: 1, e: 'La grasa lo hace muy ecogénico; asociación clásica con esclerosis tuberosa.' },
    { c: 'r3', q: 'Lesión quística renal con septos gruesos e irregulares que realzan. Bosniak:', o: ['I', 'II', 'III', 'IIF'], a: 2, e: 'Bosniak III: pared o septos engrosados con realce, ≈ 50 % malignos.' },
    { c: 'r3', q: 'Riñones de 8 cm, corteza más ecogénica que el hígado, corteza delgada. Interpretación:', o: ['Nefropatía aguda', 'Enfermedad renal crónica', 'Normal', 'Poliquistosis'], a: 1, e: 'Riñones pequeños y ecogénicos = daño crónico.' },
    { c: 'r3', q: '¿Cuál de estas causas de ERC cursa con riñones de tamaño normal o aumentado?', o: ['Nefroangioesclerosis', 'Nefropatía diabética', 'Glomerulonefritis crónica', 'Pielonefritis crónica'], a: 1, e: 'Diabetes, amiloidosis, poliquistosis, VIH y mieloma pueden mantener el tamaño renal.' },
    { c: 'r3', q: 'Hidronefrosis con ecos internos y nivel líquido-detrito en paciente febril:', o: ['Hidronefrosis simple', 'Pionefrosis', 'Quiste complicado', 'Angiomiolipoma'], a: 1, e: 'Urgencia urológica: requiere drenaje.' },
    { c: 'r3', q: 'Masa vesical fija a la pared con flujo en Doppler color:', o: ['Coágulo', 'Cálculo', 'Tumor vesical', 'Ureterocele'], a: 2, e: 'El coágulo es móvil y avascular; el cálculo es móvil con sombra.' },
    { c: 'r3', q: 'Neonato tras parto traumático con masa suprarrenal que en controles se vuelve anecoica y disminuye de tamaño, sin flujo:', o: ['Neuroblastoma', 'Hemorragia suprarrenal', 'Feocromocitoma', 'Adenoma'], a: 1, e: 'La evolución temporal y la ausencia de flujo son típicas de la hemorragia.' },
    { c: 'r3', q: 'Lesión esplénica hipoecoica en cuña con base capsular y sin flujo:', o: ['Linfoma', 'Infarto esplénico', 'Hemangioma', 'Absceso'], a: 1, e: 'La forma en cuña sigue el territorio vascular.' },
    { c: 'r3', q: 'Bazo de 22 cm. Causa más probable entre estas:', o: ['Hepatitis A', 'Mielofibrosis', 'Insuficiencia cardíaca leve', 'Apendicitis'], a: 1, e: 'Esplenomegalia masiva: LMC, mielofibrosis, malaria, leishmaniasis.' },
    { c: 'r3', q: 'Espectro intrarrenal con ascenso sistólico lento y de baja amplitud sugiere:', o: ['Rechazo agudo', 'Estenosis de arteria renal proximal', 'Trombosis de vena renal', 'Normalidad'], a: 1, e: 'Onda parvus-tardus distal a una estenosis significativa.' },
    { c: 'r4', caso: true, q: 'Varón de 35 años con dolor lumbar derecho cólico irradiado a ingle y hematuria. Ecografía: hidronefrosis derecha moderada, sin jet ureteral derecho, foco ecogénico con sombra en la unión ureterovesical. Interpretación:', o: ['Pielonefritis', 'Litiasis ureteral distal obstructiva', 'Tumor vesical', 'Quiste parapiélico'], a: 1, e: 'Cálculo impactado en la unión ureterovesical con obstrucción.' },
    { c: 'r4', caso: true, q: 'Diabética con fiebre de 39 °C, dolor lumbar y sepsis. Ecografía: hidronefrosis izquierda con ecos internos en declive. Conducta:', o: ['Antibiótico oral y alta', 'Descompresión urgente (nefrostomía o catéter doble J) + antibióticos', 'Control ecográfico en 3 meses', 'Litotricia extracorpórea inmediata'], a: 1, e: 'Pionefrosis: riñón obstruido e infectado requiere drenaje urgente.' },
    { c: 'r4', caso: true, q: 'Varón de 72 años con creatinina en ascenso y dificultad miccional. Ecografía: hidronefrosis bilateral y vejiga de 900 ml. Causa más probable:', o: ['Glomerulonefritis', 'Obstrucción infravesical (hiperplasia prostática)', 'Necrosis tubular aguda', 'Estenosis de arteria renal'], a: 1, e: 'Hidronefrosis bilateral con globo vesical: causa posrenal; sondaje vesical.' },
    { c: 'r4', caso: true, q: 'Fumador de 60 años con hematuria macroscópica indolora. Ecografía renal normal; en la vejiga, lesión polipoide fija de 2 cm con flujo. Siguiente paso:', o: ['Repetir ecografía en 1 año', 'Cistoscopia', 'Antibióticos', 'Alta'], a: 1, e: 'Sospecha de carcinoma urotelial: cistoscopia y resección transuretral.' },
    { c: 'r4', caso: true, q: 'Motociclista con trauma en flanco izquierdo, PA 80/50, FC 130. FAST: líquido perisplénico y en Morison. Conducta:', o: ['TC con contraste', 'Laparotomía urgente', 'Observación con hemogramas seriados', 'Embolización programada'], a: 1, e: 'Hemoperitoneo en paciente inestable: cirugía.' },
    { c: 'r4', caso: true, q: 'Joven de 28 años con HTA severa resistente. Ecografía: riñón derecho de 8,5 cm y el izquierdo de 11 cm; Doppler con velocidad de 280 cm/s en la arteria renal derecha. Sospecha:', o: ['Feocromocitoma', 'Estenosis de arteria renal derecha (displasia fibromuscular)', 'Poliquistosis', 'Hiperaldosteronismo'], a: 1, e: 'Asimetría renal + velocidad elevada: estenosis significativa; en jóvenes, displasia fibromuscular.' }
  ],

  glosario: [
    ['Índice de resistencia (IR)', '(Velocidad sistólica − diastólica) / sistólica. Renal normal < 0,70.'],
    ['Columna de Bertin', 'Tejido cortical que se interpone entre pirámides; si es prominente simula masa.'],
    ['Hidronefrosis', 'Dilatación del sistema pielocalicial.'],
    ['Pionefrosis', 'Hidronefrosis infectada con contenido purulento.'],
    ['Bosniak', 'Clasificación de lesiones quísticas renales en categorías de riesgo de malignidad.'],
    ['Angiomiolipoma', 'Tumor renal benigno con grasa, vasos y músculo; muy hiperecoico.'],
    ['Parvus-tardus', 'Onda arterial de baja amplitud y ascenso lento, distal a una estenosis.'],
    ['Jet ureteral', 'Chorro de orina que entra a la vejiga, visible en Doppler color.'],
    ['Twinkling', 'Artefacto de centelleo en Doppler color tras superficies rugosas (cálculos).'],
    ['Esplenúnculo', 'Bazo accesorio.'],
    ['Joroba de dromedario', 'Abultamiento lateral del riñón izquierdo; variante normal.'],
    ['Pei-Ravine', 'Criterios ecográficos por edad para diagnosticar poliquistosis renal autosómica dominante.'],
    ['Mielolipoma', 'Tumor suprarrenal benigno con grasa y elementos hematopoyéticos.']
  ]
});
