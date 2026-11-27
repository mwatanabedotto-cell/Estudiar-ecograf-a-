/* Sonoaula — motor de la plataforma de estudio.
   El contenido vive en /contenido/*.js (uno por curso) y se registra con ECO.curso({...}).
   El progreso se guarda en el navegador (localStorage). */
(function () {
  'use strict';

  var CURSOS = (window.ECO && window.ECO.cursos) || [];
  var app = document.getElementById('app');
  var NUEVAS_POR_SESION = 20;
  var KEY = 'sonoaula.v1';

  /* ---------- Utilidades ---------- */
  function hash(str) { var h = 5381; for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function hoy() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pct(x) { return Math.round(x * 100); }
  function letra(i) { return 'ABCDEFG'.charAt(i); }
  function strip(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent || ''; }

  /* ---------- Estado persistente ---------- */
  function base() { return { cards: {}, quiz: {}, notas: {}, leidos: {}, sims: [], lectura: {}, lecPref: {} }; }
  function cargar() {
    try { var raw = localStorage.getItem(KEY); if (raw) { var o = JSON.parse(raw); var b = base(); for (var k in b) if (o[k]) b[k] = o[k]; return b; } } catch (e) {}
    return base();
  }
  var S = cargar();
  function guardar() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- Normalizar contenido ---------- */
  var porId = {};
  CURSOS.forEach(function (c) {
    porId[c.id] = c;
    c.critMap = {};
    c.criterios.forEach(function (cr, i) {
      cr.n = i + 1; c.critMap[cr.id] = cr;
      (cr.temas || []).forEach(function (t) { t.id = c.id + '-' + hash(t.titulo); });
    });
    c.tarjetas = (c.tarjetas || []).map(function (t) { return { id: c.id + '-t' + hash(t[1]), c: t[0], f: t[1], r: t[2], fuente: t[3] || '', curso: c }; });
    c.preguntas = (c.preguntas || []).map(function (p) { var o = { id: c.id + '-p' + hash(p.q), curso: c }; for (var k in p) o[k] = p[k]; return o; });
    c.glosario = c.glosario || [];
    c.fuentes = c.fuentes || [];
  });

  /* ---------- Repetición espaciada (SM-2 simplificado) ---------- */
  function calcular(t, g) {
    var s = S.cards[t.id] || { i: 0, e: 2.5, r: 0, l: 0, d: 0 };
    var i = s.i, e = s.e, l = s.l;
    if (g === 0) { i = 0; e = Math.max(1.3, e - 0.2); l++; }
    else if (g === 1) { i = i < 1 ? 1 : Math.max(i + 1, Math.round(i * 1.2)); e = Math.max(1.3, e - 0.15); }
    else if (g === 2) { i = i < 1 ? 1 : i < 3 ? 3 : Math.round(i * e); }
    else { i = i < 1 ? 3 : Math.round(i * e * 1.3); e = e + 0.15; }
    return { i: i, e: e, r: s.r + 1, l: l, d: hoy() + i };
  }
  function etiquetaIntervalo(i) { if (i === 0) return 'otra vez'; if (i < 30) return i + ' d'; if (i < 365) return Math.round(i / 30) + ' m'; return (i / 365).toFixed(1) + ' a'; }
  function dominioTarjeta(t) { var s = S.cards[t.id]; if (!s) return 0; return s.i >= 10 ? 1 : s.i >= 3 ? 0.75 : s.i >= 1 ? 0.4 : 0.1; }
  function vencida(t) { var s = S.cards[t.id]; return s && s.d <= hoy(); }
  function nueva(t) { return !S.cards[t.id]; }
  function todasTarjetas() { var a = []; CURSOS.forEach(function (c) { a = a.concat(c.tarjetas); }); return a; }
  function pendientesHoy(lista) { var v = lista.filter(vencida).length; var n = Math.min(lista.filter(nueva).length, NUEVAS_POR_SESION); return v + n; }

  /* ---------- Dominio ponderado ---------- */
  function puntajeCriterio(c, cr) {
    var ts = c.tarjetas.filter(function (t) { return t.c === cr.id; });
    var ps = c.preguntas.filter(function (p) { return p.c === cr.id; });
    var a = ts.length ? ts.reduce(function (s, t) { return s + dominioTarjeta(t); }, 0) / ts.length : null;
    var b = ps.length ? ps.filter(function (p) { return S.quiz[p.id] && S.quiz[p.id].ok; }).length / ps.length : null;
    if (a === null && b === null) return 0; if (a === null) return b; if (b === null) return a;
    return (a + b) / 2;
  }
  function puntajeCurso(c) {
    var tot = c.criterios.reduce(function (s, cr) { return s + cr.peso; }, 0) || 1;
    return c.criterios.reduce(function (s, cr) { return s + cr.peso * puntajeCriterio(c, cr); }, 0) / tot;
  }

  /* ---------- Sesiones en memoria ---------- */
  var ses = null;

  /* ---------- Router ---------- */
  function ruta() {
    var h = (location.hash || '#inicio').slice(1) || 'inicio';
    var partes = h.split('-');
    if (porId[partes[0]]) return { vista: 'curso', curso: porId[partes[0]], tab: partes[1] || 'temario' };
    return { vista: h };
  }
  function render() {
    if (typeof detenerVoz === 'function') detenerVoz();
    lec = null;
    var r = ruta();
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      a.classList.toggle('on', a.dataset.nav === r.vista);
    });
    actualizarBadge();
    if (r.vista === 'curso') vistaCurso(r.curso, r.tab);
    else if (r.vista === 'repaso') vistaRepaso();
    else if (r.vista === 'glosario') vistaGlosario();
    else if (r.vista === 'biblioteca') vistaBiblioteca();
    else if (r.vista === 'atlas') vistaAtlas();
    else vistaInicio();
    pintarNavCursos(r);
    cerrarMenu();
    window.scrollTo(0, 0);
  }
  function actualizarBadge() {
    var b = document.getElementById('badge-repaso'); if (!b) return;
    var n = pendientesHoy(todasTarjetas());
    b.textContent = n; b.hidden = n === 0;
  }

  /* ---------- Componentes ---------- */
  function barrasCriterios(c) {
    return '<div class="tgc">' + c.criterios.map(function (cr) {
      var p = puntajeCriterio(c, cr);
      return '<div class="l" title="' + esc(cr.descripcion) + '"><span class="w">' + cr.peso + '%</span>' +
        '<span class="bar' + (p >= 0.8 ? ' ok' : '') + '"><i style="width:' + pct(p) + '%"></i></span><span class="v">' + pct(p) + '%</span></div>';
    }).join('') + '</div>';
  }

  /* ---------- Inicio ---------- */
  function vistaInicio() {
    var todas = todasTarjetas();
    var pend = pendientesHoy(todas);
    var nPreg = 0, nOk = 0;
    CURSOS.forEach(function (c) { c.preguntas.forEach(function (p) { nPreg++; if (S.quiz[p.id] && S.quiz[p.id].ok) nOk++; }); });
    var estudiadas = todas.filter(function (t) { return !nueva(t); }).length;

    app.innerHTML =
      '<section class="hero">' +
        '<div class="stack">' +
          '<span class="eyebrow">Posgrado en ecografía · Gestión 2026</span>' +
          '<h1>Tu sala de estudio de ecografía</h1>' +
          '<p class="lead">Cuatro cursos organizados según sus criterios de evaluación. Cada criterio tiene su temario, tarjetas de repaso espaciado y preguntas con explicación. El dominio de cada curso se calcula con el mismo peso que usa la evaluación.</p>' +
          '<div class="row">' +
            '<a class="btn pri" href="#repaso">Repasar hoy' + (pend ? ' · ' + pend + ' tarjetas' : '') + '</a>' +
            '<a class="btn ghost" href="#' + (CURSOS[0] ? CURSOS[0].id : 'inicio') + '-lectura">🎧 Lectura acompañada</a>' +
          '</div>' +
        '</div>' +
        '<div class="scan" aria-hidden="true"><canvas id="bmode" width="640" height="480"></canvas>' +
          '<div class="hud tl">C5-2 · ABD<br>FR 22 Hz · G 54</div><div class="hud tr">MI 0.9<br>TIS 0.4</div><div class="hud bl">+ 4.2 cm</div></div>' +
      '</section>' +
      '<section class="kpis">' +
        '<div class="kpi"><b class="mono">' + pend + '</b><span>tarjetas para hoy</span></div>' +
        '<div class="kpi"><b class="mono">' + estudiadas + '<span class="muted" style="font-size:1rem"> / ' + todas.length + '</span></b><span>tarjetas iniciadas</span></div>' +
        '<div class="kpi"><b class="mono">' + nOk + '<span class="muted" style="font-size:1rem"> / ' + nPreg + '</span></b><span>preguntas acertadas</span></div>' +
      '</section>' +
      '<section class="stack"><div class="row" style="justify-content:space-between"><h2>Cursos</h2><span class="eyebrow">Dominio ponderado por criterio</span></div>' +
      '<div class="cursos">' + CURSOS.map(function (c) {
        return '<a class="curso" href="#' + c.id + '">' +
          '<div class="head"><div><span class="eyebrow">' + esc(c.codigo) + '</span><h3>' + esc(c.titulo) + '</h3></div><span class="pct">' + pct(puntajeCurso(c)) + '%</span></div>' +
          '<p class="sub">' + esc(c.resumen) + '</p>' + barrasCriterios(c) +
          '<span class="muted mono" style="font-size:.8rem">' + c.tarjetas.length + ' tarjetas · ' + c.preguntas.length + ' preguntas · ' + c.criterios.reduce(function (s, cr) { return s + (cr.temas || []).length; }, 0) + ' temas</span>' +
        '</a>';
      }).join('') + '</div></section>';
    pintarBmode(document.getElementById('bmode'));
  }

  /* Imagen decorativa en modo B: abanico convexo con speckle */
  function pintarBmode(cv) {
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
    var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    ctx.fillStyle = '#05080a'; ctx.fillRect(0, 0, W, H);
    var cx = W / 2, cy = -60, r0 = 110, r1 = H + 40, a0 = Math.PI / 2 - 0.62, a1 = Math.PI / 2 + 0.62;
    var img = ctx.getImageData(0, 0, W, H), d = img.data;
    // estructuras: vesícula anecoica, pared hiperecoica, cálculo con sombra
    var ves = { x: W * 0.47, y: H * 0.5, rx: 92, ry: 50 };
    var lit = { x: W * 0.52, y: H * 0.58, r: 15 };
    for (var y = 0; y < H; y++) {
      for (var x = 0; x < W; x++) {
        var dx = x - cx, dy = y - cy, r = Math.sqrt(dx * dx + dy * dy), a = Math.atan2(dy, dx);
        if (r < r0 || r > r1 || a < a0 || a > a1) continue;
        var prof = (r - r0) / (r1 - r0);
        var v = 70 + 90 * rnd() * rnd() * 2.2;
        v *= 1 - prof * 0.45; // atenuación
        var ex = (x - ves.x) / ves.rx, ey = (y - ves.y) / ves.ry, e = ex * ex + ey * ey;
        if (e < 1) v = 6 + 10 * rnd();
        else if (e < 1.18) v = 150 + 80 * rnd();
        var lx = x - lit.x, ly = y - lit.y;
        if (lx * lx + ly * ly < lit.r * lit.r) v = 225 + 30 * rnd();
        else if (y > lit.y && Math.abs(lx) < lit.r * 0.95 && e >= 0) { if (y > lit.y + lit.r * 0.5) v *= 0.12; }
        // refuerzo posterior bajo la vesícula
        if (e >= 1.18 && Math.abs(x - ves.x) < ves.rx * 0.8 && y > ves.y + ves.ry && !(Math.abs(lx) < lit.r)) v *= 1.35;
        var k = (y * W + x) * 4; v = Math.max(0, Math.min(255, v));
        d[k] = v; d[k + 1] = v; d[k + 2] = v; d[k + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    // escala de profundidad
    ctx.fillStyle = '#9fb0b8';
    for (var i = 0; i <= 14; i++) { var yy = 30 + i * ((H - 50) / 14); ctx.fillRect(W - 16, yy, i % 5 === 0 ? 10 : 5, 1.5); }
    // calibradores
    ctx.strokeStyle = '#f0b84a'; ctx.lineWidth = 2;
    function cruz(x, y) { ctx.beginPath(); ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y); ctx.moveTo(x, y - 6); ctx.lineTo(x, y + 6); ctx.stroke(); }
    cruz(ves.x - ves.rx + 4, ves.y); cruz(ves.x + ves.rx - 4, ves.y);
    ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.moveTo(ves.x - ves.rx + 10, ves.y); ctx.lineTo(ves.x + ves.rx - 10, ves.y); ctx.stroke(); ctx.setLineDash([]);
  }

  /* ---------- Vista curso ---------- */
  var TABS = [['temario', 'Temario'], ['lectura', 'Lectura acompañada'], ['tarjetas', 'Tarjetas'], ['preguntas', 'Preguntas'], ['simulacro', 'Simulacro']];
  function vistaCurso(c, tab) {
    if (!TABS.some(function (t) { return t[0] === tab; })) tab = 'temario';
    var cab =
      '<section class="chead"><span class="eyebrow">' + esc(c.codigo) + ' · dominio ' + pct(puntajeCurso(c)) + '%</span><h1>' + esc(c.titulo) + '</h1>' +
      '<p class="muted">' + esc(c.resumen) + '</p></section>' +
      '<nav class="tabs" aria-label="Secciones del curso">' + TABS.map(function (t) {
        return '<a href="#' + c.id + '-' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + t[1] + '</a>';
      }).join('') + '</nav>';
    var cuerpo = '';
    if (tab === 'temario') cuerpo = temario(c);
    app.innerHTML = cab + '<section id="cuerpo" class="stack">' + cuerpo + '</section>';
    if (tab === 'tarjetas') iniciarTarjetas(c, 'todos', 'pendientes');
    if (tab === 'preguntas') iniciarPreguntas(c, 'todos', false);
    if (tab === 'simulacro') pantallaSimulacro(c);
    if (tab === 'lectura') vistaLectura(c);
  }

  function temario(c) {
    return c.criterios.map(function (cr) {
      var p = puntajeCriterio(c, cr);
      return '<article class="crit">' +
        '<header><div class="peso">' + cr.peso + '%<small>' + (cr.pesoEstimado ? 'estimado' : 'peso') + '</small></div>' +
        '<div class="stack" style="gap:4px"><h3>' + esc(cr.titulo) + '</h3><p>' + esc(cr.descripcion) + '</p></div>' +
        '<div class="dom">dominio ' + pct(p) + '%<div class="bar' + (p >= 0.8 ? ' ok' : '') + '" style="width:90px;margin-top:6px"><i style="width:' + pct(p) + '%"></i></div></div></header>' +
        (cr.temas || []).map(function (t) {
          return '<details class="tema" data-tema="' + t.id + '"><summary>' + esc(t.titulo) + (S.leidos[t.id] ? '<span class="chk">✓ estudiado</span>' : '') + '</summary>' +
            '<div class="tema-body">' + t.html + figurasTema(c, t) +
            (t.fuente ? '<p class="fuente">Fuente: ' + esc(t.fuente) + '</p>' : '') +
            '<div class="notas"><label for="n-' + t.id + '">Mis notas</label><textarea id="n-' + t.id + '" data-nota="' + t.id + '" placeholder="Apuntes de clase, dudas, páginas del libro…">' + esc(S.notas[t.id] || '') + '</textarea></div>' +
            '<div class="row"><button class="btn sm' + (S.leidos[t.id] ? '' : ' pri') + '" data-act="leido" data-id="' + t.id + '">' + (S.leidos[t.id] ? 'Marcar como pendiente' : 'Marcar como estudiado') + '</button>' +
            '<a class="btn sm ghost" href="#' + c.id + '-tarjetas" data-act="ir-crit" data-crit="' + cr.id + '">Tarjetas de este criterio</a></div>' +
            '</div></details>';
        }).join('') +
      '</article>';
    }).join('');
  }

  /* ---------- Tarjetas ---------- */
  function selectCriterio(c, val, id) {
    return '<select id="' + id + '" aria-label="Criterio"><option value="todos">Todos los criterios</option>' + c.criterios.map(function (cr) {
      return '<option value="' + cr.id + '"' + (cr.id === val ? ' selected' : '') + '>' + cr.peso + '% · ' + esc(cr.titulo) + '</option>';
    }).join('') + '</select>';
  }
  var critPreferido = null;
  function iniciarTarjetas(c, crit, modo) {
    if (critPreferido) { crit = critPreferido; critPreferido = null; }
    var lista = c.tarjetas.filter(function (t) { return crit === 'todos' || t.c === crit; });
    var cola;
    if (modo === 'todas') cola = shuffle(lista);
    else cola = shuffle(lista.filter(vencida)).concat(lista.filter(nueva).slice(0, NUEVAS_POR_SESION));
    ses = { tipo: 'tarjetas', curso: c, crit: crit, modo: modo, cola: cola, total: cola.length, hechas: 0, vuelta: false };
    pintarTarjeta();
  }
  function pintarTarjeta() {
    var cont = document.getElementById('cuerpo'); if (!cont || !ses) return;
    var global = ses.tipo === 'repaso';
    var filtros = global ? '' :
      '<div class="filtros">' + selectCriterio(ses.curso, ses.crit, 'f-crit-t') +
      '<select id="f-modo" aria-label="Modo"><option value="pendientes"' + (ses.modo === 'pendientes' ? ' selected' : '') + '>Pendientes y nuevas</option><option value="todas"' + (ses.modo === 'todas' ? ' selected' : '') + '>Todas (repaso libre)</option></select></div>';
    var t = ses.cola[0];
    if (!t) {
      cont.innerHTML = filtros + '<div class="fc"><h3>Sin tarjetas pendientes</h3><p class="muted">' +
        (ses.hechas ? 'Repasaste ' + ses.hechas + ' tarjetas en esta sesión. ' : '') +
        'Vuelve mañana para las siguientes repeticiones' + (global ? '.' : ', o usa el modo «Todas» para repasar libremente.') + '</p>' +
        (global ? '<a class="btn" href="#inicio">Volver al inicio</a>' : '') + '</div>';
      actualizarBadge(); return;
    }
    var cr = t.curso.critMap[t.c];
    var est = S.cards[t.id];
    var botones = [0, 1, 2, 3].map(function (g) {
      var nombres = ['Otra vez', 'Difícil', 'Bien', 'Fácil'];
      return '<button class="btn g' + g + '" data-act="calif" data-g="' + g + '">' + nombres[g] + '<small>' + etiquetaIntervalo(calcular(t, g).i) + '</small></button>';
    }).join('');
    cont.innerHTML = filtros +
      '<div class="fc" id="fc">' +
        '<div class="meta"><span class="eyebrow">' + (global ? esc(t.curso.corto) + ' · ' : '') + esc(cr ? cr.titulo : '') + '</span><span class="progreso">' + (ses.hechas + 1) + ' / ' + Math.max(ses.total, ses.hechas + ses.cola.length) + (est ? '' : ' · nueva') + '</span></div>' +
        '<div class="q">' + t.f + '</div>' +
        (ses.vuelta ? '<div class="a">' + t.r + (t.fuente ? '<p class="fuente" style="margin-top:8px">' + esc(t.fuente) + '</p>' : '') + '</div>' : '') +
      '</div>' +
      (ses.vuelta ? '<div class="grades">' + botones + '</div>' : '<button class="btn pri" data-act="voltear" style="width:100%">Mostrar respuesta <span class="mono muted" style="font-size:.75rem">(espacio)</span></button>');
  }
  function calificar(g) {
    var t = ses.cola.shift();
    S.cards[t.id] = calcular(t, g); guardar();
    ses.hechas++; ses.vuelta = false;
    if (g === 0) ses.cola.splice(Math.min(ses.cola.length, 4), 0, t);
    pintarTarjeta(); actualizarBadge();
  }

  /* ---------- Repaso global ---------- */
  function vistaRepaso() {
    app.innerHTML = '<section class="chead"><span class="eyebrow">Todos los cursos</span><h1>Repaso del día</h1>' +
      '<p class="muted">Tarjetas vencidas de los cuatro cursos y hasta ' + NUEVAS_POR_SESION + ' nuevas. Califica con honestidad: «Otra vez» la devuelve a la sesión; «Fácil» la aleja más en el tiempo.</p></section>' +
      '<section id="cuerpo" class="stack"></section>';
    var todas = todasTarjetas();
    var cola = shuffle(todas.filter(vencida)).concat(todas.filter(nueva).slice(0, NUEVAS_POR_SESION));
    ses = { tipo: 'repaso', cola: cola, total: cola.length, hechas: 0, vuelta: false };
    pintarTarjeta();
  }

  /* ---------- Preguntas (práctica) ---------- */
  function mezclarOpciones(p) {
    var idx = shuffle(p.o.map(function (_, i) { return i; }));
    return { p: p, orden: idx, resp: null };
  }
  function iniciarPreguntas(c, crit, soloFalladas) {
    if (critPreferido) { crit = critPreferido; critPreferido = null; }
    var lista = c.preguntas.filter(function (p) { return (crit === 'todos' || p.c === crit) && (!soloFalladas || !(S.quiz[p.id] && S.quiz[p.id].ok)); });
    ses = { tipo: 'preguntas', curso: c, crit: crit, falladas: soloFalladas, items: shuffle(lista).map(mezclarOpciones), pos: 0, aciertos: 0 };
    pintarPregunta();
  }
  function htmlPregunta(it, mostrarFeedback) {
    var p = it.p, cr = p.curso.critMap[p.c];
    return '<div class="qbox">' +
      '<div class="row" style="justify-content:space-between"><span class="eyebrow">' + esc(cr ? cr.peso + '% · ' + cr.titulo : '') + '</span>' + (p.caso ? '<span class="caso-tag">Caso clínico</span>' : '') + '</div>' +
      '<div class="enun">' + p.q + '</div>' +
      '<div class="opts">' + it.orden.map(function (oi, k) {
        var cls = '';
        if (it.resp !== null) {
          if (mostrarFeedback) { if (oi === p.a) cls = 'ok'; else if (oi === it.resp) cls = 'bad'; }
          else if (oi === it.resp) cls = 'sel';
        }
        return '<button class="opt ' + cls + '" data-act="resp" data-oi="' + oi + '"' + (it.resp !== null && mostrarFeedback ? ' disabled' : '') + '><span class="k">' + letra(k) + '</span><span>' + p.o[oi] + '</span></button>';
      }).join('') + '</div>' +
      (it.resp !== null && mostrarFeedback ? '<div class="expl' + (it.resp === p.a ? '' : ' mal') + '"><b>' + (it.resp === p.a ? 'Correcto. ' : 'Incorrecto. ') + '</b>' + p.e + (p.f ? ' <span class="fuente">(' + esc(p.f) + ')</span>' : '') + '</div>' : '') +
      '</div>';
  }
  function pintarPregunta() {
    var cont = document.getElementById('cuerpo'); if (!cont) return;
    var filtros = '<div class="filtros">' + selectCriterio(ses.curso, ses.crit, 'f-crit-p') +
      '<label><input type="checkbox" id="f-falladas"' + (ses.falladas ? ' checked' : '') + '> Solo las no acertadas</label></div>';
    var it = ses.items[ses.pos];
    if (!ses.items.length) { cont.innerHTML = filtros + '<div class="qbox"><h3>No hay preguntas con este filtro</h3><p class="muted">Cambia el criterio o desmarca «Solo las no acertadas».</p></div>'; return; }
    if (!it) {
      cont.innerHTML = filtros + '<div class="qbox res"><span class="eyebrow">Resultado de la práctica</span><div class="nota mono">' + ses.aciertos + '<small> / ' + ses.items.length + '</small></div>' +
        '<p class="muted">Las preguntas falladas siguen contando como no dominadas hasta que las aciertes.</p>' +
        '<div class="row"><button class="btn pri" data-act="reiniciar-p">Otra ronda</button><button class="btn" data-act="reiniciar-p-falladas">Repetir solo falladas</button></div></div>';
      return;
    }
    cont.innerHTML = filtros + '<p class="progreso">Pregunta ' + (ses.pos + 1) + ' de ' + ses.items.length + ' · aciertos ' + ses.aciertos + '</p>' + htmlPregunta(it, true) +
      (it.resp !== null ? '<button class="btn pri" data-act="sig-p" style="width:100%">Siguiente</button>' : '');
  }
  function registrar(p, ok) {
    var q = S.quiz[p.id] || { n: 0, c: 0, ok: false };
    q.n++; if (ok) q.c++; q.ok = ok; S.quiz[p.id] = q; guardar();
  }

  /* ---------- Simulacro ponderado ---------- */
  function repartir(c, n) {
    var tot = c.criterios.reduce(function (s, cr) { return s + cr.peso; }, 0);
    var base = c.criterios.map(function (cr) {
      var disp = c.preguntas.filter(function (p) { return p.c === cr.id; }).length;
      var exacto = n * cr.peso / tot;
      return { cr: cr, k: Math.min(disp, Math.floor(exacto)), resto: exacto - Math.floor(exacto), disp: disp };
    });
    var faltan = n - base.reduce(function (s, b) { return s + b.k; }, 0);
    base.slice().sort(function (a, b) { return b.resto - a.resto; }).forEach(function (b) { if (faltan > 0 && b.k < b.disp) { b.k++; faltan--; } });
    while (faltan > 0) { var hubo = false; base.forEach(function (b) { if (faltan > 0 && b.k < b.disp) { b.k++; faltan--; hubo = true; } }); if (!hubo) break; }
    return base;
  }
  function pantallaSimulacro(c) {
    var cont = document.getElementById('cuerpo');
    var hist = S.sims.filter(function (s) { return s.curso === c.id; }).slice(-5).reverse();
    var max = c.preguntas.length;
    var opciones = [10, 20, 30].filter(function (n) { return n <= max; }); if (opciones.indexOf(max) < 0 && max < 30) opciones.push(max);
    cont.innerHTML = '<div class="panel"><h3>Simulacro de examen</h3>' +
      '<p class="muted">Preguntas repartidas según el peso de cada criterio. No verás si acertaste hasta el final; al terminar tendrás la nota sobre 100 ponderada por criterio y la revisión con explicaciones.</p>' +
      '<div class="tabla"><table style="min-width:0;width:100%"><thead><tr><th>Peso</th><th>Criterio</th><th>Banco</th></tr></thead><tbody>' + c.criterios.map(function (cr) {
        return '<tr><td class="mono">' + cr.peso + '%</td><td>' + esc(cr.titulo) + '</td><td class="mono">' + c.preguntas.filter(function (p) { return p.c === cr.id; }).length + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="row">' + opciones.map(function (n) { return '<button class="btn' + (n === opciones[0] ? ' pri' : '') + '" data-act="sim-ini" data-n="' + n + '">' + n + ' preguntas</button>'; }).join('') + '</div></div>' +
      (hist.length ? '<div class="panel"><h3>Intentos anteriores</h3>' + hist.map(function (h) {
        return '<div class="row" style="justify-content:space-between"><span class="mono muted">' + new Date(h.t).toLocaleDateString('es') + ' · ' + h.n + ' preg.</span><b class="mono">' + h.nota + ' / 100</b></div>';
      }).join('') + '</div>' : '');
  }
  function iniciarSimulacro(c, n) {
    var rep = repartir(c, n), items = [];
    rep.forEach(function (b) { items = items.concat(shuffle(c.preguntas.filter(function (p) { return p.c === b.cr.id; })).slice(0, b.k)); });
    ses = { tipo: 'sim', curso: c, items: shuffle(items).map(mezclarOpciones), pos: 0, t0: Date.now() };
    pintarSim();
  }
  function pintarSim() {
    var cont = document.getElementById('cuerpo'); var it = ses.items[ses.pos];
    if (!it) return resultadoSim();
    cont.innerHTML = '<p class="progreso">Simulacro · ' + (ses.pos + 1) + ' de ' + ses.items.length + '</p>' + htmlPregunta(it, false) +
      '<div class="row"><button class="btn" data-act="sim-ant"' + (ses.pos === 0 ? ' disabled' : '') + '>Anterior</button>' +
      '<button class="btn pri" data-act="sim-sig" style="flex:1">' + (ses.pos === ses.items.length - 1 ? 'Terminar y ver nota' : 'Siguiente') + '</button></div>';
  }
  function resultadoSim() {
    var c = ses.curso, cont = document.getElementById('cuerpo');
    var porCrit = {};
    ses.items.forEach(function (it) {
      var k = it.p.c; porCrit[k] = porCrit[k] || { n: 0, ok: 0 }; porCrit[k].n++;
      var ok = it.resp === it.p.a; if (ok) porCrit[k].ok++;
      registrar(it.p, ok);
    });
    var pesoTot = 0, acum = 0;
    c.criterios.forEach(function (cr) { var r = porCrit[cr.id]; if (r) { pesoTot += cr.peso; acum += cr.peso * r.ok / r.n; } });
    var nota = Math.round(pesoTot ? acum / pesoTot * 100 : 0);
    var min = Math.round((Date.now() - ses.t0) / 60000);
    S.sims.push({ curso: c.id, t: Date.now(), n: ses.items.length, nota: nota }); guardar();
    cont.innerHTML = '<div class="qbox res"><span class="eyebrow">Nota ponderada · ' + min + ' min</span><div class="nota mono">' + nota + '<small> / 100</small></div>' +
      '<div class="tgc">' + c.criterios.map(function (cr) {
        var r = porCrit[cr.id]; if (!r) return '';
        var p = r.ok / r.n;
        return '<div class="l"><span class="w">' + cr.peso + '%</span><span class="bar' + (p >= 0.8 ? ' ok' : '') + '"><i style="width:' + pct(p) + '%"></i></span><span class="v">' + r.ok + '/' + r.n + '</span></div><p class="muted" style="font-size:.85rem;margin:-2px 0 4px 3.2rem">' + esc(cr.titulo) + '</p>';
      }).join('') + '</div>' +
      '<div class="row"><button class="btn pri" data-act="sim-otra">Nuevo simulacro</button></div></div>' +
      '<h3>Revisión</h3><div class="revision">' + ses.items.map(function (it, i) {
        var ok = it.resp === it.p.a;
        return '<div class="it ' + (ok ? 'bien' : 'mal') + '"><b>' + (i + 1) + '. ' + strip(it.p.q) + '</b>' +
          '<span>' + (ok ? '✓ ' : '✗ Tu respuesta: ' + (it.resp === null ? 'sin responder' : strip(it.p.o[it.resp])) + ' · Correcta: ') + (ok ? strip(it.p.o[it.p.a]) : strip(it.p.o[it.p.a])) + '</span>' +
          '<span class="muted">' + it.p.e + (it.p.f ? ' <i>(' + esc(it.p.f) + ')</i>' : '') + '</span></div>';
      }).join('') + '</div>';
    window.scrollTo(0, 0);
  }

  /* ---------- Glosario ---------- */
  function vistaGlosario() {
    var items = [];
    CURSOS.forEach(function (c) { c.glosario.forEach(function (g) { items.push({ t: g[0], d: g[1], c: c }); }); });
    items.sort(function (a, b) { return a.t.localeCompare(b.t, 'es'); });
    app.innerHTML = '<section class="chead"><span class="eyebrow">' + items.length + ' términos</span><h1>Glosario</h1></section>' +
      '<div class="filtros"><input type="search" id="buscar" placeholder="Buscar término o definición…" style="flex:1;min-width:0">' +
      '<select id="glos-curso" aria-label="Curso"><option value="">Todos los cursos</option>' + CURSOS.map(function (c) { return '<option value="' + c.id + '">' + esc(c.corto) + '</option>'; }).join('') + '</select></div>' +
      '<dl class="glos" id="glos"></dl>';
    function filtrar() {
      var q = (document.getElementById('buscar').value || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      var cid = document.getElementById('glos-curso').value;
      var html = items.filter(function (it) {
        var txt = (it.t + ' ' + it.d).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        return (!cid || it.c.id === cid) && (!q || txt.indexOf(q) >= 0);
      }).map(function (it) { return '<div class="g"><dt>' + esc(it.t) + '<small>' + esc(it.c.corto) + '</small></dt><dd>' + it.d + '</dd></div>'; }).join('');
      document.getElementById('glos').innerHTML = html || '<div class="g"><dd class="muted">Sin resultados.</dd></div>';
    }
    document.getElementById('buscar').addEventListener('input', filtrar);
    document.getElementById('glos-curso').addEventListener('change', filtrar);
    filtrar();
  }

  /* ---------- Biblioteca ---------- */
  function vistaBiblioteca() {
    var ref = (window.ECO && window.ECO.referencias) || [];
    var libros = (window.ECO && window.ECO.libros) || [];
    function cuenta(id) {
      var n = { temas: 0, tarjetas: 0, preguntas: 0 }, re = new RegExp('\\b' + (libros.filter(function (l) { return l.id === id; })[0] || {}).corto + '\\b');
      CURSOS.forEach(function (c) {
        c.criterios.forEach(function (cr) { (cr.temas || []).forEach(function (t) { if (re.test(t.fuente || '')) n.temas++; }); });
        c.tarjetas.forEach(function (t) { if (re.test(t.fuente)) n.tarjetas++; });
        c.preguntas.forEach(function (p) { if (re.test(p.f || '')) n.preguntas++; });
      });
      return n;
    }
    app.innerHTML = '<section class="chead"><span class="eyebrow">Fuentes</span><h1>Biblioteca</h1><p class="muted">El contenido de la plataforma se basa en estos libros. Cada tema, tarjeta y pregunta indica el libro y la página o capítulo de donde sale.</p></section>' +
      '<section class="panel"><h3>Libros del curso</h3>' + (libros.length ? '<div class="libros">' + libros.map(function (l) {
        var n = cuenta(l.id);
        return '<div class="libro"><span class="lomo"></span><div><b>' + esc(l.titulo) + '</b><br><span class="muted">' + esc(l.autor) + '</span><br><span style="font-size:.9rem">' + esc(l.detalle) + '</span><br><span class="mono muted" style="font-size:.8rem">Citado como «' + esc(l.corto) + '» en ' + n.temas + ' temas · ' + n.tarjetas + ' tarjetas · ' + n.preguntas + ' preguntas</span></div></div>';
      }).join('') + '</div>' : '<div class="vacio"><b>Todavía no hay libros cargados.</b></div>') + '</section>' +
      '<section class="panel"><h3>Otros textos de consulta</h3><p class="muted" style="font-size:.95rem">Referencias clásicas para ampliar un tema; no son la base del contenido de la plataforma.</p><div class="libros">' + ref.map(function (r) {
        return '<div class="libro"><span class="lomo"></span><div><b>' + esc(r.titulo) + '</b><br><span class="muted">' + esc(r.autor) + '</span><br><span style="font-size:.9rem">' + esc(r.uso) + '</span></div></div>';
      }).join('') + '</div></section>' +
      '<section class="panel"><h3>Respaldo del progreso</h3><p class="muted" style="font-size:.95rem">El progreso se guarda solo en este navegador. Para pasarlo a otro dispositivo, copia el código y pégalo allá.</p>' +
      '<div class="row"><button class="btn" data-act="copiar">Copiar código de progreso</button><span id="copiado" class="muted mono" style="font-size:.85rem"></span></div>' +
      '<textarea id="respaldo" placeholder="Pega aquí un código de progreso para restaurarlo"></textarea>' +
      '<div class="row"><button class="btn" data-act="restaurar">Restaurar progreso</button><button class="btn ghost" data-act="borrar">Borrar todo el progreso</button><span id="msg-resp" class="muted" style="font-size:.9rem"></span></div></section>';
  }

  /* ---------- Figuras: esquemas propios y figuras de los libros ---------- */
  var FIGL = (window.ECO && window.ECO.figLibro) || {};
  var IMGL = (window.ECO && window.ECO.imgLibro) || {};
  var DIAS = (window.ECO && window.ECO.diagramas) || {};
  var FIGT = (window.ECO && window.ECO.figTemas) || {};
  function citaFig(f) { return f.libro + ', fig. ' + f.fig + ', p. ' + f.pag; }
  function figuraHTML(ref) {
    var tipo = ref.split(':')[0], k = ref.slice(tipo.length + 1);
    if (tipo === 'dia' && DIAS[k]) {
      return '<figure class="fig dia" data-act="ampliar" data-ref="' + ref + '">' + DIAS[k].svg + '<figcaption><span class="fig-tag">Esquema</span> ' + esc(DIAS[k].pie) + '</figcaption></figure>';
    }
    if (tipo === 'libro' && FIGL[k]) {
      var f = FIGL[k];
      if (IMGL[k]) return '<figure class="fig foto" data-act="ampliar" data-ref="' + ref + '"><img src="' + IMGL[k] + '" alt="' + esc(f.pie) + '" loading="lazy"><figcaption><span class="fig-tag">' + esc(citaFig(f)) + '</span> ' + esc(f.pie) + '</figcaption></figure>';
      return '<figure class="fig ref"><div class="ref-ico" aria-hidden="true">' + esc(f.libro) + '</div><figcaption><span class="fig-tag">Ver ' + esc(citaFig(f)) + '</span> ' + esc(f.pie) + '</figcaption></figure>';
    }
    return '';
  }
  function figurasTema(c, t) {
    var refs = FIGT[c.id + '|' + t.titulo]; if (!refs || !refs.length) return '';
    var dias = refs.filter(function (r) { return r.indexOf('dia:') === 0; });
    var libs = refs.filter(function (r) { return r.indexOf('libro:') === 0; });
    var out = '';
    if (dias.length) out += '<div class="figs-dia">' + dias.map(figuraHTML).join('') + '</div>';
    if (libs.length) out += '<h4>Imágenes de referencia del libro</h4><div class="galeria">' + libs.map(figuraHTML).join('') + '</div>';
    return out;
  }
  function vistaAtlas() {
    var hayImg = Object.keys(IMGL).length > 0;
    app.innerHTML = '<section class="chead"><span class="eyebrow">' + Object.keys(FIGL).length + ' figuras de los libros · ' + Object.keys(DIAS).length + ' esquemas</span><h1>Atlas de imágenes</h1>' +
      '<p class="muted">Todas las imágenes de referencia, agrupadas por curso. Toca una imagen para ampliarla.' + (hayImg ? '' : ' Esta versión no incluye las imágenes de los libros (tienen derechos de autor): cada figura indica dónde encontrarla.') + '</p></section>' +
      '<section class="stack"><h2>Esquemas anatómicos</h2><div class="figs-dia">' + Object.keys(DIAS).map(function (k) { return figuraHTML('dia:' + k); }).join('') + '</div></section>' +
      CURSOS.map(function (c) {
        var ks = Object.keys(FIGL).filter(function (k) { return FIGL[k].curso === c.id; });
        if (!ks.length) return '';
        return '<section class="stack"><h2>' + esc(c.titulo) + '</h2><div class="galeria">' + ks.map(function (k) { return figuraHTML('libro:' + k); }).join('') + '</div></section>';
      }).join('');
  }
  var lb = document.getElementById('lightbox');
  function ampliar(ref) {
    if (!lb) return;
    var tipo = ref.split(':')[0], k = ref.slice(tipo.length + 1), cont = '', pie = '';
    if (tipo === 'dia' && DIAS[k]) { cont = DIAS[k].svg; pie = DIAS[k].pie; }
    else if (tipo === 'libro' && IMGL[k]) { cont = '<img src="' + IMGL[k] + '" alt="">'; pie = citaFig(FIGL[k]) + ' · ' + FIGL[k].pie; }
    else return;
    lb.querySelector('.lb-cont').innerHTML = cont; lb.querySelector('.lb-pie').textContent = pie; lb.hidden = false;
    lb.querySelector('.lb-cerrar').focus();
  }
  if (lb) {
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('.lb-cerrar')) lb.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { lb.hidden = true; cerrarMenu(); } });
  }

  /* ---------- Barra lateral ---------- */
  var side = document.getElementById('side'), velo = document.getElementById('velo'), menuBtn = document.getElementById('menu-btn');
  function abrirMenu() { if (!side) return; side.classList.add('abierto'); velo.hidden = false; menuBtn.setAttribute('aria-expanded', 'true'); }
  function cerrarMenu() { if (!side) return; side.classList.remove('abierto'); if (velo) velo.hidden = true; if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false'); }
  if (menuBtn) menuBtn.addEventListener('click', function () { side.classList.contains('abierto') ? cerrarMenu() : abrirMenu(); });
  if (velo) velo.addEventListener('click', cerrarMenu);
  function pintarNavCursos(r) {
    var nav = document.getElementById('nav-cursos'); if (!nav) return;
    nav.innerHTML = CURSOS.map(function (c) {
      var activo = r.vista === 'curso' && r.curso === c;
      return '<a href="#' + c.id + '" class="nav-curso' + (activo ? ' on' : '') + '"><span class="nc-tit">' + esc(c.corto) + '</span><span class="nc-pct mono">' + pct(puntajeCurso(c)) + '%</span><span class="nc-bar"><i style="width:' + pct(puntajeCurso(c)) + '%"></i></span></a>' +
        (activo ? '<div class="nav-sub">' + TABS.map(function (t) { return '<a href="#' + c.id + '-' + t[0] + '" class="' + (r.tab === t[0] || (t[0] === 'temario' && !TABS.some(function (x) { return x[0] === r.tab; })) ? 'on' : '') + '">' + t[1] + '</a>'; }).join('') + '</div>' : '');
    }).join('');
  }

  /* ---------- Eventos ---------- */
  var confirmarBorrado = false;
  app.addEventListener('click', function (e) {
    var segEl = e.target.closest('.lec-seg');
    if (segEl && lec && !e.target.closest('[data-act], a, button')) { var k = +segEl.dataset.seg; if (VOZ) leerDesde(k); else { lec.s = k; marcarSeg(k); progresoLectura(); } return; }
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.dataset.act;
    if (act === 'ampliar') { ampliar(b.dataset.ref); return; }
    if (act.indexOf('lec-') === 0 && accionLectura(act, b)) return;
    if (act === 'voltear') { ses.vuelta = true; pintarTarjeta(); }
    else if (act === 'calif') calificar(+b.dataset.g);
    else if (act === 'leido') {
      var id = b.dataset.id; if (S.leidos[id]) delete S.leidos[id]; else S.leidos[id] = Date.now(); guardar();
      var det = b.closest('details'); var open = det && det.open; var r = ruta(); vistaCurso(r.curso, r.tab);
      var d2 = document.querySelector('[data-tema="' + id + '"]'); if (d2 && open) { d2.open = true; d2.scrollIntoView({ block: 'nearest' }); }
    }
    else if (act === 'ir-crit') { critPreferido = b.dataset.crit; }
    else if (act === 'resp') {
      if (ses.tipo === 'preguntas') {
        var it = ses.items[ses.pos]; if (it.resp !== null) return;
        it.resp = +b.dataset.oi; var ok = it.resp === it.p.a; if (ok) ses.aciertos++; registrar(it.p, ok); pintarPregunta();
      } else if (ses.tipo === 'sim') { ses.items[ses.pos].resp = +b.dataset.oi; pintarSim(); }
    }
    else if (act === 'sig-p') { ses.pos++; pintarPregunta(); window.scrollTo(0, 0); }
    else if (act === 'reiniciar-p') iniciarPreguntas(ses.curso, ses.crit, false);
    else if (act === 'reiniciar-p-falladas') iniciarPreguntas(ses.curso, ses.crit, true);
    else if (act === 'sim-ini') iniciarSimulacro(ruta().curso, +b.dataset.n);
    else if (act === 'sim-sig') { ses.pos++; pintarSim(); window.scrollTo(0, 0); }
    else if (act === 'sim-ant') { ses.pos = Math.max(0, ses.pos - 1); pintarSim(); }
    else if (act === 'sim-otra') pantallaSimulacro(ruta().curso);
    else if (act === 'copiar') {
      var txt = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
      var out = document.getElementById('copiado');
      var ta = document.getElementById('respaldo');
      try {
        navigator.clipboard.writeText(txt).then(function () { out.textContent = 'Copiado (' + Math.round(txt.length / 1024) + ' KB)'; }, function () { ta.value = txt; ta.select(); out.textContent = 'Selecciona y copia el texto de abajo'; });
      } catch (err) { ta.value = txt; ta.select(); out.textContent = 'Selecciona y copia el texto de abajo'; }
    }
    else if (act === 'restaurar') {
      var msg = document.getElementById('msg-resp');
      try {
        var o = JSON.parse(decodeURIComponent(escape(atob(document.getElementById('respaldo').value.trim()))));
        var nb = base(); for (var k in nb) if (o[k]) nb[k] = o[k]; S = nb; guardar(); msg.textContent = 'Progreso restaurado.'; actualizarBadge();
      } catch (err) { msg.textContent = 'El código no es válido. Cópialo completo desde «Copiar código de progreso».'; }
    }
    else if (act === 'borrar') {
      var m = document.getElementById('msg-resp');
      if (!confirmarBorrado) { confirmarBorrado = true; b.textContent = 'Pulsa otra vez para confirmar'; m.textContent = 'Se borrarán tarjetas, respuestas, notas y simulacros.'; return; }
      S = base(); guardar(); confirmarBorrado = false; b.textContent = 'Borrar todo el progreso'; m.textContent = 'Progreso borrado.'; actualizarBadge();
    }
  });
  app.addEventListener('change', function (e) {
    var id = e.target.id;
    if (id === 'lec-tema') { var sonaba = lec && lec.sonando; cargarTemaLectura(+e.target.value); if (sonaba) leerDesde(0); return; }
    if (id === 'lec-rate') { prefs().rate = +e.target.value; guardar(); if (lec && lec.sonando) leerDesde(lec.s); return; }
    if (id === 'lec-voz') { prefs().voz = e.target.value; guardar(); if (lec && lec.sonando) leerDesde(lec.s); return; }
    if (id === 'lec-auto') { prefs().auto = e.target.checked; guardar(); return; }
    if (id === 'f-crit-t' || id === 'f-modo') iniciarTarjetas(ses.curso, document.getElementById('f-crit-t').value, document.getElementById('f-modo').value);
    else if (id === 'f-crit-p' || id === 'f-falladas') iniciarPreguntas(ses.curso, document.getElementById('f-crit-p').value, document.getElementById('f-falladas').checked);
  });
  var tNota = null;
  app.addEventListener('input', function (e) {
    var id = e.target.dataset && e.target.dataset.nota; if (!id) return;
    S.notas[id] = e.target.value; clearTimeout(tNota); tNota = setTimeout(guardar, 400);
  });
  document.addEventListener('keydown', function (e) {
    if (lec && e.key === ' ' && !/^(input|textarea|select|button)$/i.test(e.target.tagName)) { e.preventDefault(); accionLectura('lec-play', {}); return; }
    if (!ses || (ses.tipo !== 'tarjetas' && ses.tipo !== 'repaso')) return;
    var tag = (e.target.tagName || '').toLowerCase(); if (tag === 'textarea' || tag === 'input' || tag === 'select') return;
    if (!document.getElementById('fc')) return;
    if (!ses.vuelta && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ses.vuelta = true; pintarTarjeta(); }
    else if (ses.vuelta && /^[1-4]$/.test(e.key)) calificar(+e.key - 1);
  });

  /* ---------- Lectura acompañada: lectura guiada con voz, resaltado y repaso ---------- */
  var VOZ = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  var lec = null, lecTok = 0, lecTimer = null;
  function prefs() { S.lecPref = S.lecPref || {}; if (!S.lecPref.rate) S.lecPref.rate = 1; if (S.lecPref.auto === undefined) S.lecPref.auto = true; return S.lecPref; }
  function temasCurso(c) { var a = []; c.criterios.forEach(function (cr) { (cr.temas || []).forEach(function (t) { a.push({ cr: cr, t: t }); }); }); return a; }
  var DICCION = [
    [/\bVCI\b/g, 'vena cava inferior'], [/\bAMS\b/g, 'arteria mesentérica superior'], [/\bVMS\b/g, 'vena mesentérica superior'], [/\bVRI\b/g, 'vena renal izquierda'],
    [/\bAMI\b/g, 'arteria mesentérica inferior'], [/\bCHC\b/g, 'carcinoma hepatocelular'], [/\bHNF\b/g, 'hiperplasia nodular focal'], [/\bCCR\b/g, 'carcinoma de células renales'],
    [/\bAAA\b/g, 'aneurisma de aorta abdominal'], [/\bAML\b/g, 'angiomiolipoma'], [/\bFRP\b/g, 'frecuencia de repetición de pulsos'], [/\bIR\b/g, 'índice de resistencia'],
    [/\bVSM\b/g, 'velocidad sistólica máxima'], [/\bUPU\b/g, 'unión pieloureteral'], [/\bUVU\b/g, 'unión ureterovesical'], [/\bLHD\b/g, 'lóbulo hepático derecho'],
    [/\bLHI\b/g, 'lóbulo hepático izquierdo'], [/\bVHD\b/g, 'vena hepática derecha'], [/\bVHM\b/g, 'vena hepática media'], [/\bVHI\b/g, 'vena hepática izquierda'],
    [/\bERC\b/g, 'enfermedad renal crónica'], [/\bHPB\b/g, 'hiperplasia prostática benigna'], [/\bCBC\b/g, 'conducto biliar común'], [/\bTGC\b/g, 'te ge ce'],
    [/\bCPRE\b/g, 'ce pe erre e'], [/\bTIPS\b/g, 'tips'], [/\bFAST\b/g, 'fast'], [/\bEHP\b/g, 'estenosis hipertrófica del píloro'],
    [/cm\/s\b/g, 'centímetros por segundo'], [/m\/s²/g, 'metros por segundo al cuadrado'], [/m\/s\b/g, 'metros por segundo'], [/dB\/cm\/MHz/g, 'decibelios por centímetro y megahercio'],
    [/(\d),(\d)/g, '$1 coma $2'], [/(\d)\s?–\s?(\d)/g, '$1 a $2'], [/≤/g, ' menor o igual a '], [/≥/g, ' mayor o igual a '], [/</g, ' menor de '], [/>/g, ' mayor de '],
    [/×/g, ' por '], [/→/g, ', '], [/±/g, ' más o menos '], [/(\d)\s?mm\b/g, '$1 milímetros'], [/(\d)\s?cm\b/g, '$1 centímetros'], [/(\d)\s?MHz\b/g, '$1 megahercios'],
    [/(\d)\s?kHz\b/g, '$1 kilohercios'], [/(\d)\s?Hz\b/g, '$1 hercios'], [/(\d)\s?ml\b/g, '$1 mililitros'], [/µs/g, 'microsegundos'], [/(\d)\s?%/g, '$1 por ciento'],
    [/(\d)\s?°/g, '$1 grados'], [/·/g, ', '], [/[«»"]/g, '']
  ];
  function diccion(s) { DICCION.forEach(function (r) { s = s.replace(r[0], r[1]); }); return s.replace(/\s+/g, ' ').trim(); }
  function trozos(s) { // frases cortas: más fiable en Android y mejor ritmo
    var out = [], partes = s.match(/[^.;:!?]+[.;:!?]*/g) || [s];
    partes.forEach(function (p) { p = p.trim(); if (!p) return; if (out.length && (out[out.length - 1] + ' ' + p).length < 160) out[out.length - 1] += ' ' + p; else out.push(p); });
    return out;
  }
  function voces() { return VOZ ? VOZ.getVoices().filter(function (v) { return /^es/i.test(v.lang); }) : []; }
  function vozElegida() { var vs = voces(), n = prefs().voz; return vs.filter(function (v) { return v.name === n; })[0] || vs.filter(function (v) { return /es-(419|MX|US|BO|AR|CO|CL|PE)/i.test(v.lang); })[0] || vs[0] || null; }

  function vistaLectura(c) {
    var lista = temasCurso(c);
    S.lectura = S.lectura || {};
    var i = Math.min(S.lectura[c.id] || 0, lista.length - 1);
    var cont = document.getElementById('cuerpo');
    cont.innerHTML =
      '<div class="lec">' +
        '<div class="lec-intro panel"><div class="row" style="justify-content:space-between;align-items:flex-start"><div class="stack" style="gap:4px"><h3>Lectura acompañada</h3>' +
        '<p class="muted" style="font-size:.95rem">La plataforma te lee cada tema en voz alta y resalta la frase que escuchas. Al final de cada tema hay un repaso rápido con tarjetas; puedes seguir automáticamente al siguiente tema. Toca cualquier frase para leer desde ahí.</p></div></div>' +
        (VOZ ? '' : '<p class="perla"><b>Sin voz</b>Este navegador no permite leer en voz alta. Puedes usar igualmente la lectura guiada tema por tema.</p>') +
        '<label class="lec-sel"><span class="eyebrow">Tema</span><select id="lec-tema" aria-label="Tema">' + c.criterios.map(function (cr) {
          return '<optgroup label="' + cr.peso + '% · ' + esc(cr.titulo) + '">' + (cr.temas || []).map(function (t) { var k = lista.findIndex(function (x) { return x.t === t; }); return '<option value="' + k + '"' + (k === i ? ' selected' : '') + '>' + (S.leidos[t.id] ? '✓ ' : '') + esc(t.titulo) + '</option>'; }).join('') + '</optgroup>';
        }).join('') + '</select></label></div>' +
        '<article class="lec-hoja" id="lec-hoja"></article>' +
        '<div class="lec-barra" role="toolbar" aria-label="Controles de lectura">' +
          '<div class="lec-ctrl">' +
            '<button class="btn sm ghost" data-act="lec-tema" data-d="-1" aria-label="Tema anterior" title="Tema anterior">⏮</button>' +
            '<button class="btn sm ghost" data-act="lec-frase" data-d="-1" aria-label="Frase anterior" title="Frase anterior">⏪</button>' +
            '<button class="btn pri lec-play" data-act="lec-play" id="lec-play"' + (VOZ ? '' : ' disabled') + '>▶ Escuchar</button>' +
            '<button class="btn sm ghost" data-act="lec-frase" data-d="1" aria-label="Frase siguiente" title="Frase siguiente">⏩</button>' +
            '<button class="btn sm ghost" data-act="lec-tema" data-d="1" aria-label="Tema siguiente" title="Tema siguiente">⏭</button>' +
          '</div>' +
          '<div class="lec-opts">' +
            '<label>Velocidad <select id="lec-rate">' + [0.8, 0.9, 1, 1.15, 1.3, 1.5].map(function (r) { return '<option value="' + r + '"' + (r === prefs().rate ? ' selected' : '') + '>' + String(r).replace('.', ',') + '×</option>'; }).join('') + '</select></label>' +
            (VOZ ? '<label>Voz <select id="lec-voz"></select></label>' : '') +
            '<label><input type="checkbox" id="lec-auto"' + (prefs().auto ? ' checked' : '') + '> Seguir al siguiente tema</label>' +
            '<span class="progreso" id="lec-prog"></span>' +
          '</div>' +
        '</div>' +
      '</div>';
    lec = { curso: c, lista: lista, i: i, segs: [], s: 0, sonando: false };
    llenarVoces();
    cargarTemaLectura(i);
  }
  function llenarVoces() {
    var sel = document.getElementById('lec-voz'); if (!sel) return;
    var vs = voces(), elegida = vozElegida();
    sel.innerHTML = vs.length ? vs.map(function (v) { return '<option' + (elegida && v.name === elegida.name ? ' selected' : '') + '>' + esc(v.name) + '</option>'; }).join('') : '<option>Voz del sistema</option>';
  }
  if (VOZ) VOZ.onvoiceschanged = llenarVoces;

  function cargarTemaLectura(i) {
    detenerVoz();
    if (!lec) return;
    i = Math.max(0, Math.min(i, lec.lista.length - 1));
    lec.i = i; lec.s = 0; S.lectura[lec.curso.id] = i; guardar();
    var it = lec.lista[i], hoja = document.getElementById('lec-hoja');
    var sel = document.getElementById('lec-tema'); if (sel) sel.value = String(i);
    var tarjetas = shuffle(lec.curso.tarjetas.filter(function (x) { return x.c === it.cr.id; })).slice(0, 2);
    hoja.innerHTML = '<span class="eyebrow">' + it.cr.peso + '% · ' + esc(it.cr.titulo) + ' · tema ' + (i + 1) + ' de ' + lec.lista.length + '</span>' +
      '<h2 class="lec-h">' + esc(it.t.titulo) + '</h2>' +
      '<div class="tema-body lec-texto" id="lec-texto">' + it.t.html + figurasTema(lec.curso, it.t) + '</div>' +
      (it.t.fuente ? '<p class="fuente">Fuente: ' + esc(it.t.fuente) + '</p>' : '') +
      (tarjetas.length ? '<div class="lec-repaso"><h3>Repaso rápido</h3>' + tarjetas.map(function (x, k) {
        return '<div class="lec-card"><p class="lec-q" data-rq="' + k + '"><b>Pregunta:</b> ' + x.f + '</p><p class="lec-a" id="lec-a' + k + '" hidden><b>Respuesta:</b> ' + x.r + '</p><button class="btn sm" data-act="lec-ver" data-k="' + k + '">Mostrar respuesta</button></div>';
      }).join('') + '</div>' : '') +
      '<div class="row lec-fin"><button class="btn" data-act="lec-tema" data-d="1">Siguiente tema →</button></div>';
    // Segmentos legibles en orden del documento
    var sel2 = 'h2.lec-h, .lec-texto > p, .lec-texto > ul > li, .lec-texto > ol > li, .lec-texto h4, .lec-texto .perla, .lec-texto tbody tr, .lec-texto .figs-dia figcaption, .lec-q, .lec-a';
    lec.segs = [];
    hoja.querySelectorAll(sel2).forEach(function (el) {
      var txt;
      if (el.tagName === 'TR') txt = Array.prototype.map.call(el.cells, function (td) { return td.textContent; }).join('. ');
      else if (el.tagName === 'FIGCAPTION') txt = 'Esquema. ' + el.textContent.replace(/^Esquema\s*/, '');
      else if (el.classList.contains('perla')) txt = el.textContent.replace(/^(\S+)/, '$1. ');
      else txt = el.textContent;
      var seg = { el: el, frases: trozos(diccion(txt)) };
      if (el.classList.contains('lec-q')) seg.pausa = 3500; // tiempo para pensar la respuesta
      if (el.classList.contains('lec-a')) seg.alEmpezar = function () { el.hidden = false; var b = el.parentNode.querySelector('[data-act="lec-ver"]'); if (b) b.hidden = true; };
      if (seg.frases.length) { el.classList.add('lec-seg'); el.dataset.seg = lec.segs.length; lec.segs.push(seg); }
    });
    marcarSeg(-1); progresoLectura();
    window.scrollTo(0, 0);
  }
  function progresoLectura() {
    var p = document.getElementById('lec-prog'); if (!p || !lec) return;
    p.textContent = 'Tema ' + (lec.i + 1) + '/' + lec.lista.length + ' · frase ' + Math.min(lec.s + 1, lec.segs.length) + '/' + lec.segs.length;
    var b = document.getElementById('lec-play'); if (b) b.textContent = lec.sonando ? '⏸ Pausa' : '▶ Escuchar';
  }
  function marcarSeg(k) {
    if (!lec) return;
    lec.segs.forEach(function (sg, j) { sg.el.classList.toggle('lec-activo', j === k); sg.el.classList.toggle('lec-hecho', k >= 0 && j < k); });
    var sg = lec.segs[k];
    if (sg) { var r = sg.el.getBoundingClientRect(); if (r.top < 70 || r.bottom > window.innerHeight - 150) sg.el.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  }
  function detenerVoz() { lecTok++; clearTimeout(lecTimer); if (VOZ) VOZ.cancel(); if (lec) { lec.sonando = false; progresoLectura(); } }
  function leerDesde(k) {
    if (!lec || !VOZ) return;
    detenerVoz();
    lec.sonando = true; lec.s = k;
    var tok = lecTok;
    (function paso() {
      if (tok !== lecTok || !lec) return;
      if (lec.s >= lec.segs.length) { finTema(); return; }
      var sg = lec.segs[lec.s]; marcarSeg(lec.s); progresoLectura();
      if (sg.alEmpezar) sg.alEmpezar();
      var f = 0;
      (function frase() {
        if (tok !== lecTok) return;
        if (f >= sg.frases.length) { lecTimer = setTimeout(function () { lec.s++; paso(); }, sg.pausa || 120); return; }
        var u = new SpeechSynthesisUtterance(sg.frases[f++]);
        var v = vozElegida(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'es-ES';
        u.rate = prefs().rate;
        u.onend = function () { frase(); };
        u.onerror = function (e) { if (e.error === 'interrupted' || e.error === 'canceled') return; frase(); };
        VOZ.speak(u);
      })();
    })();
  }
  function finTema() {
    var it = lec.lista[lec.i];
    S.leidos[it.t.id] = S.leidos[it.t.id] || Date.now(); guardar();
    lec.sonando = false; marcarSeg(lec.segs.length); progresoLectura();
    if (prefs().auto && lec.i < lec.lista.length - 1) {
      var tok = lecTok;
      lecTimer = setTimeout(function () { if (tok !== lecTok || !lec) return; cargarTemaLectura(lec.i + 1); leerDesde(0); }, 1500);
    }
  }
  function accionLectura(act, b) {
    if (!lec) return false;
    if (act === 'lec-play') { if (lec.sonando) detenerVoz(); else leerDesde(lec.s >= lec.segs.length ? 0 : lec.s); return true; }
    if (act === 'lec-frase') { var k = Math.max(0, Math.min(lec.segs.length - 1, lec.s + (+b.dataset.d))); if (lec.sonando) leerDesde(k); else { lec.s = k; marcarSeg(k); progresoLectura(); } return true; }
    if (act === 'lec-tema') { var sonaba = lec.sonando; cargarTemaLectura(lec.i + (+b.dataset.d)); if (sonaba) leerDesde(0); return true; }
    if (act === 'lec-ver') { var a = document.getElementById('lec-a' + b.dataset.k); if (a) a.hidden = false; b.hidden = true; return true; }
    return false;
  }

  /* ---------- Pantalla completa ---------- */
  var btnFull = document.getElementById('btn-full');
  var raizFS = document.documentElement;
  var puedeFS = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  function enFS() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function etiquetaFS() { if (btnFull) btnFull.querySelector('.lbl').textContent = enFS() ? 'Salir de pantalla completa' : 'Pantalla completa'; }
  if (btnFull && puedeFS) {
    btnFull.hidden = false;
    btnFull.addEventListener('click', function () {
      try {
        if (enFS()) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
        else {
          var r = (raizFS.requestFullscreen || raizFS.webkitRequestFullscreen).call(raizFS);
          if (r && r.catch) r.catch(function () { btnFull.hidden = true; });
        }
      } catch (e) { btnFull.hidden = true; }
    });
    document.addEventListener('fullscreenchange', etiquetaFS);
    document.addEventListener('webkitfullscreenchange', etiquetaFS);
  }

  window.addEventListener('hashchange', render);
  render();
})();
