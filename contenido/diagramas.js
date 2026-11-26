/* Diagramas anatómicos originales de Sonoaula (esquemas propios, no copias de los libros).
   Uso en un tema: {{dia:clave}}. Pensados para fondo oscuro. */
(function () {
  var T = 'font-family="Source Sans 3, sans-serif" font-size="13" fill="#dbe3e7"';
  var S = 'font-family="JetBrains Mono, monospace" font-size="11" fill="#9fb0b9"';
  var C = { higado: '#8b5e47', higadoB: '#a8735a', porta: '#8f7cf0', vena: '#4d8fe8', arteria: '#e5534b', bilis: '#4fbf83', pancreas: '#e2c15a', rinon: '#c9757d', seno: '#f0d9c8', grasa: '#e9e2c9', liq: '#0b1114', tejido: '#4a5961', hueso: '#d7dde0', acento: '#f0b84a' };
  function svg(vb, body, label) { return '<svg viewBox="' + vb + '" role="img" aria-label="' + label + '" xmlns="http://www.w3.org/2000/svg">' + body + '</svg>'; }
  function t(x, y, s, a) { return '<text x="' + x + '" y="' + y + '" ' + T + (a ? ' text-anchor="' + a + '"' : '') + '>' + s + '</text>'; }
  function m(x, y, s, a) { return '<text x="' + x + '" y="' + y + '" ' + S + (a ? ' text-anchor="' + a + '"' : '') + '>' + s + '</text>'; }
  function ln(x1, y1, x2, y2, c, w, d) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || '#9fb0b9') + '" stroke-width="' + (w || 1) + '"' + (d ? ' stroke-dasharray="' + d + '"' : '') + '/>'; }

  window.ECO = window.ECO || { cursos: [] };
  window.ECO.diagramas = {
    'orientacion': { pie: 'Orientación: la marca del transductor (ámbar) corresponde a la marca de la pantalla. Arriba siempre lo superficial.', svg: svg('0 0 560 230',
      '<rect x="20" y="40" width="240" height="170" rx="8" fill="#10181c" stroke="#33434c"/><rect x="300" y="40" width="240" height="170" rx="8" fill="#10181c" stroke="#33434c"/>' +
      '<circle cx="34" cy="54" r="5" fill="' + C.acento + '"/><circle cx="314" cy="54" r="5" fill="' + C.acento + '"/>' +
      t(140, 30, 'Transversal (marca → derecha del paciente)', 'middle') + t(420, 30, 'Longitudinal (marca → cabeza)', 'middle') +
      m(40, 120, 'DERECHA') + m(250, 120, 'IZQUIERDA', 'end') + m(320, 120, 'CRANEAL') + m(530, 120, 'CAUDAL', 'end') +
      m(140, 70, 'superficial', 'middle') + m(140, 200, 'profundo', 'middle') + m(420, 70, 'superficial', 'middle') + m(420, 200, 'profundo', 'middle') +
      '<path d="M140 80 v100" stroke="#5d6f78" stroke-dasharray="3 4"/><path d="M420 80 v100" stroke="#5d6f78" stroke-dasharray="3 4"/>', 'Orientación en cortes transversal y longitudinal') },

    'artefactos': { pie: 'Los tres artefactos esenciales: sombra detrás de lo muy reflectante, refuerzo detrás del líquido y reverberación entre interfaces paralelas.', svg: svg('0 0 600 220',
      '<defs><linearGradient id="dsp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7a82"/><stop offset="1" stop-color="#4a5961"/></linearGradient></defs>' +
      [0, 1, 2].map(function (i) { return '<rect x="' + (20 + i * 195) + '" y="30" width="175" height="170" fill="url(#dsp)" rx="6"/>'; }).join('') +
      '<circle cx="107" cy="80" r="16" fill="#f2f4f5"/><rect x="91" y="96" width="32" height="104" fill="#070b0d"/>' + t(107, 22, 'Sombra acústica', 'middle') + m(107, 215, 'cálculo, calcio, hueso', 'middle') +
      '<circle cx="302" cy="80" r="26" fill="' + C.liq + '"/><rect x="278" y="106" width="48" height="94" fill="#9aa8b0" opacity=".85"/>' + t(302, 22, 'Refuerzo posterior', 'middle') + m(302, 215, 'quiste, vejiga, vesícula', 'middle') +
      '<rect x="420" y="55" width="140" height="5" fill="#f2f4f5"/>' + [0, 1, 2, 3, 4].map(function (k) { return '<rect x="420" y="' + (80 + k * 24) + '" width="140" height="3" fill="#f2f4f5" opacity="' + (0.8 - k * 0.15) + '"/>'; }).join('') + t(497, 22, 'Reverberación', 'middle') + m(497, 215, 'aire, aguja, catéter', 'middle'), 'Sombra, refuerzo y reverberación') },

    'doppler-ondas': { pie: 'Ondas Doppler espectrales típicas. La forma de la onda refleja la resistencia del lecho vascular distal.', svg: svg('0 0 600 330',
      (function () {
        var out = '', items = [
          ['Vena porta', 'monofásica, hepatópeta, ondulada', 'M0 30 C20 22 40 22 60 30 S100 38 120 30 S160 22 180 30', C.porta],
          ['Venas hepáticas', 'trifásica (sístole auricular invertida)', 'M0 30 L15 46 L35 40 L52 50 L66 18 L80 30 L95 46 L115 40 L132 50 L146 18 L160 30 L175 46', C.vena],
          ['Arteria baja resistencia', 'hepática, renal, AMS posprandial', 'M0 44 L8 6 L22 24 L60 34 L68 44 L76 6 L90 24 L128 34 L136 44 L144 6 L158 24 L178 30', C.arteria],
          ['Arteria alta resistencia', 'aorta infrarrenal, AMS en ayunas', 'M0 44 L8 4 L18 44 L24 52 L34 44 L60 44 L68 4 L78 44 L84 52 L94 44 L120 44 L128 4 L138 44 L144 52 L154 44 L178 44', C.arteria],
          ['Parvus-tardus', 'distal a estenosis: ascenso lento', 'M0 44 C25 40 35 22 50 20 C70 22 80 36 100 40 C125 38 135 22 150 20 C165 22 172 32 178 36', C.acento]
        ];
        items.forEach(function (it, i) {
          var y = 18 + i * 62;
          out += t(10, y + 12, it[0]) + m(10, y + 28, it[1]) + '<g transform="translate(330 ' + (y - 6) + ') scale(1.4 1)"><line x1="0" y1="44" x2="180" y2="44" stroke="#3b4a52"/><path d="' + it[2] + '" fill="none" stroke="' + it[3] + '" stroke-width="2"/></g>';
        });
        return out;
      })(), 'Ondas Doppler normales y patológicas') },

    'couinaud': { pie: 'Segmentos de Couinaud (vista anterior esquemática). Las venas hepáticas dividen en sentido vertical; el plano de la porta separa los segmentos superiores (II, IV a, VIII, VII) de los inferiores (III, IV b, V, VI). El I (caudado) es posterior y drena directo a la VCI.', svg: svg('0 0 560 300',
      '<path d="M40 120 C40 60 140 30 280 34 C400 36 520 60 525 95 C530 130 470 150 400 175 C330 200 250 250 170 262 C90 270 40 210 40 120 Z" fill="' + C.higado + '" stroke="#d7a58a" stroke-width="1.5"/>' +
      '<rect x="262" y="8" width="26" height="110" rx="10" fill="' + C.vena + '" opacity=".9"/>' + m(240, 22, 'VCI', 'end') +
      '<path d="M270 40 C220 70 170 110 120 150" stroke="' + C.vena + '" stroke-width="7" fill="none"/>' + '<path d="M275 45 C270 90 262 140 250 190" stroke="' + C.vena + '" stroke-width="7" fill="none"/>' + '<path d="M282 40 C330 70 380 95 430 110" stroke="' + C.vena + '" stroke-width="7" fill="none"/>' +
      ln(40, 150, 520, 120, C.porta, 3, '8 5') + m(500, 138, 'plano portal', 'end') +
      t(95, 105, 'VII') + t(100, 205, 'VI') + t(190, 100, 'VIII') + t(195, 210, 'V') + t(300, 95, 'IV a') + t(285, 185, 'IV b') + t(400, 85, 'II') + t(390, 155, 'III') +
      '<circle cx="318" cy="135" r="13" fill="' + C.higadoB + '" stroke="#f0d0b8"/>' + t(318, 140, 'I', 'middle') +
      m(120, 290, 'VHD', 'middle') + m(250, 290, 'VHM (línea de Cantlie)', 'middle') + m(440, 290, 'VHI', 'middle'), 'Segmentos hepáticos de Couinaud') },

    'porta-hepatis': { pie: 'Corte transversal del hilio hepático («Mickey Mouse»): la vena porta es la cabeza; el colédoco (anterolateral, a la derecha del paciente) y la arteria hepática (anteromedial) son las orejas. Con Doppler, el colédoco no tiene flujo.', svg: svg('0 0 520 250',
      '<rect x="0" y="0" width="520" height="250" fill="#10181c" rx="8"/>' + m(20, 24, 'DERECHA del paciente') + m(500, 24, 'IZQUIERDA', 'end') + m(260, 24, 'anterior', 'middle') + m(260, 240, 'posterior', 'middle') +
      '<circle cx="260" cy="150" r="52" fill="' + C.porta + '" opacity=".9"/>' + t(260, 155, 'Vena porta', 'middle') +
      '<circle cx="200" cy="82" r="24" fill="' + C.bilis + '"/>' + t(150, 60, 'Colédoco', 'end') +
      '<circle cx="318" cy="84" r="15" fill="' + C.arteria + '"/>' + t(345, 62, 'Arteria hepática') +
      m(260, 220, 'colédoco ≤ 6 mm · porta ≤ 13–16 mm', 'middle'), 'Signo de Mickey Mouse en la porta hepatis') },

    'pancreas': { pie: 'Corte transversal del epigastrio a la altura del páncreas. La vena esplénica (detrás del cuerpo y la cola) es la referencia principal; la AMS, rodeada de grasa ecogénica, queda detrás de ella; la vena renal izquierda cruza entre AMS y aorta. En la cabeza: colédoco posterolateral y gastroduodenal anterolateral.', svg: svg('0 0 600 334',
      '<rect width="600" height="334" fill="#10181c" rx="8"/>' + m(14, 20, 'DERECHA') + m(586, 20, 'IZQUIERDA', 'end') +
      '<path d="M0 30 C120 70 260 80 360 60 C450 42 540 30 600 34 L600 0 L0 0 Z" fill="' + C.higado + '" opacity=".8"/>' + m(300, 40, 'lóbulo hepático izquierdo (ventana)', 'middle') +
      '<path d="M110 150 C110 110 170 100 230 112 C300 125 380 118 450 100 C500 88 545 96 555 120 C560 140 520 150 470 152 C400 158 330 168 270 170 C220 172 200 200 160 200 C120 200 110 180 110 150 Z" fill="' + C.pancreas + '" opacity=".85"/>' +
      t(150, 165, 'Cabeza') + t(330, 150, 'Cuerpo', 'middle') + t(505, 128, 'Cola', 'middle') +
      '<path d="M235 182 C300 178 400 170 470 162 C520 156 560 150 590 150" stroke="' + C.vena + '" stroke-width="12" fill="none"/>' + m(560, 175, 'vena esplénica', 'end') +
      '<circle cx="232" cy="182" r="13" fill="' + C.vena + '"/>' + m(214, 214, 'confluente / VMS', 'end') +
      '<circle cx="286" cy="214" r="17" fill="' + C.grasa + '" opacity=".9"/><circle cx="286" cy="214" r="9" fill="' + C.arteria + '"/>' + m(312, 218, 'AMS') +
      '<path d="M250 246 C290 240 330 238 400 236" stroke="' + C.vena + '" stroke-width="7" fill="none"/>' + m(404, 240, 'VRI') +
      '<circle cx="292" cy="270" r="20" fill="' + C.arteria + '"/>' + m(292, 275, 'Ao', 'middle') +
      '<ellipse cx="190" cy="262" rx="26" ry="16" fill="' + C.vena + '"/>' + m(190, 266, 'VCI', 'middle') +
      '<circle cx="128" cy="182" r="7" fill="' + C.bilis + '"/>' + m(118, 205, 'colédoco', 'end') +
      '<circle cx="142" cy="128" r="5" fill="' + C.arteria + '"/>' + m(132, 114, 'gastroduodenal', 'end') +
      '<path d="M235 318 C260 290 330 290 355 318 Z" fill="' + C.hueso + '" opacity=".7"/>' +       m(586, 322, 'cabeza ≤ 3 · cuerpo ≤ 2,5 · cola ≤ 2 cm', 'end'), 'Páncreas y referencias vasculares') },

    'obstruccion-biliar': { pie: 'Qué se dilata según el nivel de la obstrucción: el nivel se deduce de qué segmentos están dilatados.', svg: svg('0 0 600 320',
      '<path d="M160 30 L200 110 M240 30 L200 110" stroke="' + C.bilis + '" stroke-width="7" fill="none"/>' + '<path d="M200 110 L210 200 L225 270" stroke="' + C.bilis + '" stroke-width="9" fill="none"/>' +
      '<path d="M206 160 C170 165 140 185 120 215" stroke="' + C.bilis + '" stroke-width="5" fill="none"/>' + '<ellipse cx="95" cy="240" rx="38" ry="26" fill="' + C.bilis + '" opacity=".55"/>' + m(95, 286, 'vesícula', 'middle') +
      '<path d="M226 268 C300 262 380 250 470 236" stroke="' + C.pancreas + '" stroke-width="6" fill="none"/>' + m(470, 262, 'Wirsung', 'end') +
      '<circle cx="228" cy="276" r="8" fill="' + C.acento + '"/>' + m(244, 300, 'ampolla') +
      [[200, 105, '1'], [130, 205, '2'], [214, 225, '3'], [228, 276, '4']].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="11" fill="#0c1114" stroke="' + C.acento + '" stroke-width="2"/>' + '<text x="' + p[0] + '" y="' + (p[1] + 4) + '" ' + S + ' text-anchor="middle" fill="' + C.acento + '">' + p[2] + '</text>'; }).join('') +
      t(300, 50, '1 · Hilio (Klatskin): dilatación intrahepática bilateral,') + m(318, 68, 'colédoco normal, vesícula colapsada') +
      t(300, 100, '2 · Cuello/cístico: solo vesícula dilatada (mucocele);') + m(318, 118, 'Mirizzi: + dilatación intrahepática') +
      t(300, 150, '3 · Colédoco: intrahepáticos + colédoco dilatados') + m(318, 168, 'coledocolitiasis') +
      t(300, 200, '4 · Ampolla/cabeza: doble conducto') + m(318, 218, 'colédoco + Wirsung; vesícula distendida'), 'Niveles de obstrucción biliar') },

    'rinon': { pie: 'Riñón en corte longitudinal: corteza y pirámides forman el parénquima; el seno central es hiperecogénico. La lobulación fetal hace muescas entre pirámides; una cicatriz, sobre una pirámide.', svg: svg('0 0 560 270',
      '<rect width="560" height="270" fill="#10181c" rx="8"/>' +
      '<path d="M90 135 C90 60 180 30 280 32 C380 34 470 60 470 135 C470 210 380 238 280 238 C180 238 90 210 90 135 Z" fill="' + C.rinon + '" opacity=".75" stroke="#f3e9e4" stroke-width="2"/>' +
      [[150, 85, -35], [215, 62, -12], [290, 58, 0], [365, 64, 12], [420, 90, 35], [150, 185, 35], [215, 208, 12], [290, 212, 0], [365, 206, -12], [420, 180, -35]].map(function (p) { return '<path d="M-16 -18 L16 -18 L0 22 Z" transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + (p[1] > 135 ? 180 + p[2] : p[2]) + ')" fill="#3a2a2d"/>'; }).join('') +
      '<path d="M175 135 C175 110 230 100 290 102 C350 104 395 112 395 135 C395 158 350 168 290 168 C230 168 175 160 175 135 Z" fill="' + C.seno + '"/>' + '<text x="285" y="140" font-family="Source Sans 3, sans-serif" font-size="13" fill="#3a2a2d" text-anchor="middle">Seno renal (hiperecoico)</text>' +
      ln(90, 252, 470, 252, C.acento, 1.5) + m(280, 266, 'longitud 9–12 cm (asimetría ≤ 1,5 cm)', 'middle') +
      m(150, 26, 'pirámides (hipoecoicas)', 'middle') + m(480, 50, 'cápsula', 'start') + m(485, 140, 'corteza', 'start') + ln(470, 135, 482, 137) +
      m(485, 175, 'parénquima ≥ 1,5 cm', 'start'), 'Anatomía ecográfica del riñón') },

    'hidronefrosis': { pie: 'Grados de hidronefrosis (esquema): I pelvis; II pelvis y cálices sin atrofia; III moderada con atrofia leve; IV severa con atrofia significativa del parénquima.', svg: svg('0 0 600 190',
      [0, 1, 2, 3].map(function (g) {
        var x = 20 + g * 145, par = [28, 26, 18, 7][g], cal = [0, 9, 14, 20][g], pel = [16, 20, 28, 36][g];
        var cals = '';
        if (cal) for (var k = 0; k < 4; k++) { var a = -1.1 + k * 0.73; cals += '<circle cx="' + (x + 62 + Math.cos(a) * (40 - par / 3)) + '" cy="' + (90 + Math.sin(a) * (40 - par / 3)) + '" r="' + (cal / 2) + '" fill="' + C.liq + '"/>'; }
        return '<ellipse cx="' + (x + 62) + '" cy="90" rx="62" ry="62" fill="' + C.rinon + '" opacity=".75"/>' + '<ellipse cx="' + (x + 62) + '" cy="90" rx="' + (62 - par) + '" ry="' + (62 - par) + '" fill="' + C.seno + '"/>' + cals + '<ellipse cx="' + (x + 70) + '" cy="96" rx="' + pel + '" ry="' + (pel * 0.7) + '" fill="' + C.liq + '"/>' + t(x + 62, 178, 'Grado ' + ['I', 'II', 'III', 'IV'][g], 'middle');
      }).join(''), 'Grados de hidronefrosis') },

    'suprarrenales': { pie: 'Dónde buscar las suprarrenales. Derecha: ventana hepática, entre hígado y pilar del diafragma, con el reborde por detrás de la VCI. Izquierda: corte coronal por el bazo, en el triángulo entre bazo, riñón y pilar. Alas hipoecoicas ≤ 2 mm (forma de V, Y o λ).', svg: svg('0 0 600 260',
      '<rect width="600" height="260" fill="#10181c" rx="8"/>' + t(150, 24, 'Derecha (transversal oblicuo)', 'middle') + t(450, 24, 'Izquierda (coronal por el bazo)', 'middle') +
      '<path d="M20 60 C80 40 200 40 260 70 L260 230 C200 230 120 220 20 200 Z" fill="' + C.higado + '" opacity=".75"/>' + m(70, 120, 'hígado') +
      '<ellipse cx="225" cy="110" rx="24" ry="16" fill="' + C.vena + '"/>' + m(225, 114, 'VCI', 'middle') +
      '<path d="M255 150 C265 180 265 210 250 240" stroke="#7d8f98" stroke-width="10" fill="none"/>' + m(268, 205, 'pilar') +
      '<path d="M205 140 L218 168 L232 140 M218 168 L218 190" stroke="' + C.acento + '" stroke-width="5" fill="none" stroke-linecap="round"/>' + m(160, 160, 'suprarrenal', 'end') +
      '<ellipse cx="150" cy="215" rx="45" ry="20" fill="' + C.rinon + '" opacity=".75"/>' + m(150, 219, 'polo sup. RD', 'middle') +
      '<path d="M330 70 C380 45 470 45 520 75 C540 110 520 140 480 150 C430 158 360 140 330 110 Z" fill="#6f7c8e"/>' + m(420, 100, 'bazo', 'middle') +
      '<ellipse cx="420" cy="215" rx="70" ry="26" fill="' + C.rinon + '" opacity=".75"/>' + m(420, 219, 'riñón izquierdo', 'middle') +
      '<path d="M545 120 C560 160 560 200 545 240" stroke="#7d8f98" stroke-width="10" fill="none"/>' + m(560, 255, 'pilar', 'end') +
      '<path d="M470 165 L490 185 L510 165 M490 185 L492 200" stroke="' + C.acento + '" stroke-width="5" fill="none" stroke-linecap="round"/>' + m(500, 158, 'suprarrenal'), 'Localización de las suprarrenales') },

    'aorta': { pie: 'Aorta abdominal y ramas. En longitudinal: tronco celíaco y AMS salen de la cara anterior; la AMS desciende paralela, rodeada de grasa. La vena renal izquierda pasa entre AMS y aorta. Medir de pared externa a pared externa, perpendicular al eje.', svg: svg('0 0 600 300',
      '<rect width="600" height="300" fill="#10181c" rx="8"/>' + t(160, 22, 'Longitudinal', 'middle') + t(450, 22, 'Transversal (bajo el páncreas)', 'middle') +
      '<path d="M60 70 L290 70 L290 100 L60 100 Z" fill="' + C.arteria + '" opacity=".9"/>' + m(70, 90, 'craneal') + m(280, 90, 'caudal', 'end') +
      '<path d="M100 70 C100 50 112 40 128 36" stroke="' + C.arteria + '" stroke-width="9" fill="none"/>' + m(130, 34, 'tronco celíaco') +
      '<path d="M135 70 C140 55 170 52 280 50" stroke="' + C.arteria + '" stroke-width="8" fill="none"/>' + m(285, 52, 'AMS') +
      '<path d="M150 64 C152 58 156 56 160 56" stroke="' + C.vena + '" stroke-width="7" fill="none"/>' +
      '<path d="M180 100 L180 124 M180 70 L180 70" stroke="' + C.arteria + '" stroke-width="6"/>' + m(186, 124, 'a. renales (≈1 cm bajo AMS)') +
      '<path d="M250 100 C255 115 250 125 245 135" stroke="' + C.arteria + '" stroke-width="5" fill="none"/>' + m(235, 150, 'AMI') +
      ln(60, 180, 290, 180, '#5d6f78', 1, '4 4') + m(175, 200, 'bifurcación ≈ L4 (ombligo)', 'middle') +
      '<rect x="80" y="225" width="200" height="48" rx="6" fill="#16222a" stroke="#33434c"/>' + m(180, 244, 'AAA: ≥ 3 cm · reparar > 5,5 cm', 'middle') + m(180, 262, 'rotura: riesgo drástico ≥ 6 cm', 'middle') +
      '<circle cx="450" cy="110" r="16" fill="' + C.grasa + '"/><circle cx="450" cy="110" r="8" fill="' + C.arteria + '"/>' + m(472, 108, 'AMS') +
      '<path d="M380 152 C420 148 480 148 520 140" stroke="' + C.vena + '" stroke-width="9" fill="none"/>' + m(525, 140, 'VRI') +
      '<circle cx="455" cy="195" r="26" fill="' + C.arteria + '"/>' + m(455, 199, 'Ao', 'middle') + '<ellipse cx="370" cy="190" rx="26" ry="16" fill="' + C.vena + '"/>' + m(370, 194, 'VCI', 'middle') +
      '<path d="M410 290 C430 260 480 260 500 290 Z" fill="' + C.hueso + '" opacity=".6"/>', 'Aorta y ramas') },

    'pared-intestinal': { pie: 'Firma intestinal: cinco capas alternantes. En la práctica se ven bien tres. Pared normal 2–3 mm distendida, 4–5 mm colapsada; engrosada > 6 mm (ABC).', svg: svg('0 0 560 260',
      '<rect width="560" height="260" fill="#10181c" rx="8"/>' +
      [[110, '#e8eef0'], [96, '#2a3236'], [84, '#c9d2d6'], [70, '#3a4347'], [54, '#e8eef0'], [44, C.liq]].map(function (c) { return '<circle cx="140" cy="130" r="' + c[0] + '" fill="' + c[1] + '"/>'; }).join('') +
      m(140, 134, 'luz', 'middle') +
      [['1 · Interfaz luz–mucosa', 'hiperecoica', 49], ['2 · Muscularis mucosae', 'hipoecoica', 62], ['3 · Submucosa', 'hiperecoica', 77], ['4 · Muscular propia', 'hipoecoica', 90], ['5 · Serosa', 'hiperecoica', 103]].map(function (r, i) {
        var y = 50 + i * 38; return ln(140 + r[2], 130, 300, y - 4, '#7d8f98') + t(306, y, r[0]) + m(306, y + 15, r[1]);
      }).join(''), 'Capas de la pared intestinal') },

    'fast': { pie: 'Espacios donde se acumula líquido y ventanas del FAST: 1 hepatorrenal (Morison), 2 periesplénica/esplenorrenal, 3 pelvis (rectovesical o Douglas), 4 subxifoidea pericárdica. La gotera parietocólica derecha comunica Morison con la pelvis.', svg: svg('0 0 420 420',
      '<path d="M210 20 C290 20 330 60 335 120 C345 200 340 300 300 380 L120 380 C80 300 75 200 85 120 C90 60 130 20 210 20 Z" fill="#16222a" stroke="#4a5961" stroke-width="2"/>' +
      '<path d="M100 120 C140 100 200 105 230 130 C210 160 150 170 105 160 Z" fill="' + C.higado + '" opacity=".7"/>' + m(150, 140, 'hígado', 'middle') +
      '<ellipse cx="290" cy="140" rx="34" ry="22" fill="#6f7c8e"/>' + m(290, 144, 'bazo', 'middle') +
      '<ellipse cx="135" cy="190" rx="22" ry="34" fill="' + C.rinon + '" opacity=".7"/><ellipse cx="285" cy="190" rx="22" ry="34" fill="' + C.rinon + '" opacity=".7"/>' +
      '<path d="M190 330 C200 310 220 310 230 330 C230 350 190 350 190 330 Z" fill="' + C.liq + '" stroke="#6f8a96"/>' + m(210, 368, 'vejiga', 'middle') +
      '<path d="M105 230 C105 270 115 310 150 335" stroke="' + C.vena + '" stroke-width="5" fill="none" stroke-dasharray="6 5" opacity=".8"/>' + m(70, 285, 'gotera D', 'middle') +
      [[140, 172, '1'], [300, 170, '2'], [210, 315, '3'], [210, 70, '4']].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="14" fill="' + C.acento + '"/><text x="' + p[0] + '" y="' + (p[1] + 5) + '" ' + S + ' text-anchor="middle" fill="#1b1305">' + p[2] + '</text>'; }).join('') +
      '<path d="M190 60 C200 50 220 50 230 60 C232 80 188 80 190 60 Z" fill="none" stroke="' + C.arteria + '" stroke-width="2"/>' + m(240, 52, 'corazón'), 'Ventanas del FAST y espacios declives') },

    'medicion-aaa': { pie: 'Medición del aneurisma: con el transductor perpendicular al eje del vaso (izquierda) se mide el diámetro real; perpendicular a la piel en una aorta oblicua (derecha) se obtiene un corte elíptico que sobrestima casi un 20 % (Bates, fig. 8.2F).', svg: svg('0 0 560 220',
      '<rect width="560" height="220" fill="#10181c" rx="8"/>' + '<circle cx="140" cy="110" r="60" fill="' + C.arteria + '" opacity=".35" stroke="' + C.arteria + '" stroke-width="4"/>' + '<circle cx="140" cy="110" r="40" fill="#2a1a1a"/>' + ln(80, 110, 200, 110, C.acento, 2) + m(140, 196, 'correcto: externo–externo', 'middle') +
      '<ellipse cx="410" cy="110" rx="90" ry="60" fill="' + C.arteria + '" opacity=".35" stroke="' + C.arteria + '" stroke-width="4"/>' + '<ellipse cx="410" cy="110" rx="70" ry="40" fill="#2a1a1a"/>' + ln(320, 110, 500, 110, C.bad || '#ef6a5f', 2) + m(410, 196, 'corte oblicuo: sobrestima', 'middle'), 'Medición correcta e incorrecta de la aorta') }
  };
})();
