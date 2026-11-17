/* =====================================================================
   PORTFOLIO DE VALENTINO COSTANZO — comportamiento de la web
   Los textos y datos editables están en config.js (no hace falta tocar acá).
   Idiomas: inglés (en) y castellano (es). El botón "ES / EN" cambia todo
   sin recargar y la elección queda guardada en el navegador.
   ===================================================================== */
(function () {
  'use strict';

  /* global CONFIG, gsap, ScrollTrigger */
  var C = (typeof CONFIG !== 'undefined' && CONFIG) || {};
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canAnimate = !!(window.gsap && window.ScrollTrigger) && !reduceMotion;

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, '0'); }

  var ICONS = {
    flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    mas: '<path d="M12 5v14M5 12h14"/>',
    celu: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
    pantalla: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 8h7M6 12h4"/>',
    toque: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v12" stroke-dasharray="2 2"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.check) + '</svg>';
  }
  var BTN_ICON = '<span class="btn__icon" aria-hidden="true">' + icon('flecha') + '</span>';

  function render(name, html) {
    var el = $('[data-render="' + name + '"]');
    if (el) el.innerHTML = html;
    return el;
  }

  /* =====================================================================
     1. IDIOMA
     El script del <head> ya eligió el idioma (guardado, o el del navegador).
     ===================================================================== */
  var idioma = root.getAttribute('data-idioma') === 'es' ? 'es' : 'en';
  var textos = C.textos || {};
  function T() { return textos[idioma] || textos.en || {}; }

  // Textos fijos del HTML: data-i18n="clave" y data-i18n-attr="aria-label:clave;alt:otra"
  function aplicarTextos() {
    var t = T();
    $$('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (par) {
        var p = par.split(':');
        var v = t[(p[1] || '').trim()];
        if (p[0] && typeof v === 'string') el.setAttribute(p[0].trim(), v);
      });
    });
    if (t.metaTitulo) document.title = t.metaTitulo;
    var desc = $('meta[name="description"]');
    if (desc && t.metaDescripcion) desc.setAttribute('content', t.metaDescripcion);

    // Botón ES / EN: marca el idioma activo
    $$('.idioma__op').forEach(function (op) {
      op.classList.toggle('is-on', op.getAttribute('data-op') === idioma);
    });
    // El botón del menú dice "abrir" o "cerrar" según cómo esté
    var tg = $('.nav__toggle');
    if (tg) tg.setAttribute('aria-label', root.classList.contains('menu-open') ? t.cerrarMenu : t.abrirMenu);
  }

  // Links de contacto: salen de config.js
  function aplicarLinks() {
    var links = {
      fiverr: C.fiverr,
      email: C.email ? 'mailto:' + C.email : '',
      whatsapp: C.whatsapp ? 'https://wa.me/' + String(C.whatsapp).replace(/\D/g, '') : ''
    };
    $$('[data-link]').forEach(function (a) {
      var href = links[a.getAttribute('data-link')];
      if (href) a.href = href;
    });
    $$('[data-link-texto="email"]').forEach(function (s) { if (C.email) s.textContent = C.email; });
    $$('[data-anio]').forEach(function (s) { s.textContent = C.anio || new Date().getFullYear(); });
  }

  /* =====================================================================
     2. CONTENIDO DESDE config.js
     ===================================================================== */

  // Pastillas del inicio
  function renderPastillas() {
    render('pastillas', (T().pastillas || []).map(function (p) {
      return '<li>' + esc(p) + '</li>';
    }).join(''));
  }

  // Chips de la frase grande
  function renderChips() {
    render('chips', (T().fraseChips || []).map(function (p) {
      return '<li>' + esc(p) + '</li>';
    }).join(''));
  }

  // Cinta del stack: logo (o placa con la sigla) + nombre. Se duplica para que no tenga cortes.
  function renderHerramientas() {
    var grupo = (C.herramientas || []).map(function (h) {
      var marca = h.logo
        ? '<img class="marquee__logo" src="' + esc(h.logo) + '" alt="" width="40" height="40" loading="lazy">'
        : '<span class="marquee__sigla" aria-hidden="true">' + esc(h.sigla || h.nombre.charAt(0)) + '</span>';
      return '<span class="marquee__item">' + marca + '<span class="marquee__name">' + esc(h.nombre) + '</span></span>';
    }).join('');
    render('herramientas',
      '<div class="marquee__group">' + grupo + '</div>' +
      '<div class="marquee__group" aria-hidden="true">' + grupo + '</div>');
  }

  // Servicios ("Qué hago"): tarjetas que alternan clara / negra, sin precios
  function renderServicios() {
    var t = T();
    render('servicios', (t.servicios || []).map(function (s, i) {
      var dark = i % 2 === 1;
      return '<article class="service' + (dark ? ' service--dark' : '') + '" id="servicio-' + (i + 1) + '" style="--i:' + i + '">' +
        '<span class="service__bignum" aria-hidden="true">' + pad(i + 1) + '</span>' +
        '<div class="service__inner">' +
          '<div class="service__top"><span class="service__n">' + pad(i + 1) + '</span><span class="service__tag">' + esc(s.etiqueta || '') + '</span></div>' +
          '<div class="service__head"><h3 class="service__name">' + esc(s.nombre) + '</h3><p class="service__desc">' + esc(s.descripcion) + '</p>' +
            (s.ejemplo ? '<p class="service__ejemplo">' + esc(s.ejemplo) + '</p>' : '') + '</div>' +
          '<ul class="service__points">' + (s.puntos || []).map(function (p) {
            return '<li>' + icon('check') + '<span>' + esc(p) + '</span></li>';
          }).join('') + '</ul>' +
          '<div class="service__foot">' +
            '<a class="btn ' + (dark ? 'btn--orange' : 'btn--dark') + '" href="#contacto"><span>' + esc(t.servicioBoton) + '</span>' + BTN_ICON + '</a>' +
          '</div>' +
        '</div></article>';
    }).join(''));
  }

  // Proyectos: tarjeta compacta (captura + nombre + frase) que se despliega
  // con "Ver cómo funciona" y muestra las dos vistas y los pasos.
  function renderProyectos() {
    var t = T();
    var cont = $('[data-render="proyectos"]');
    if (!cont) return;
    // Las tarjetas abiertas siguen abiertas al cambiar de idioma
    var abiertas = $$('.pcard.is-open', cont).map(function (c) { return c.getAttribute('data-id'); });

    var vista = function (v, imagen, link, btnClass, barra) {
      return '<div class="feature__view">' +
        '<h4 class="feature__vtitle">' + esc(v.titulo) + '</h4>' +
        '<a class="feature__shot" href="' + esc(link) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' +
          '<span class="project__bar"><i></i><i></i><i></i><span class="project__url">' + esc(barra) + '</span></span>' +
          '<img src="' + esc(imagen) + '" alt="" width="1200" height="750" loading="lazy">' +
        '</a>' +
        '<p class="feature__vtext">' + esc(v.texto) + '</p>' +
        '<a class="btn btn--lg ' + btnClass + ' feature__btn" href="' + esc(link) + '" target="_blank" rel="noopener">' +
          '<span>' + esc(v.boton) + '</span>' + BTN_ICON + '</a>' +
      '</div>';
    };

    cont.innerHTML = '<div class="pgrupo">' + (C.proyectos || []).map(function (base, n) {
      var p = base[idioma] || base.en || {};
      var id = 'pc-' + n;
      var abierta = abiertas.indexOf(id) > -1;
      var iconos = base.iconos || ['celu', 'pantalla', 'toque'];
      return '<article class="feature pcard' + (abierta ? ' is-open' : '') + '" data-id="' + id + '">' +
        '<div class="pcard__top">' +
          '<button class="pcard__thumb" type="button" tabindex="-1" aria-hidden="true" data-abre="' + id + '">' +
            '<span class="project__bar"><i></i><i></i><i></i><span class="project__url">' + esc(base.barraWeb) + '</span></span>' +
            '<img src="' + esc(base.imagenWeb) + '" alt="" width="1200" height="750" loading="lazy">' +
          '</button>' +
          '<div class="pcard__body">' +
            '<p class="feature__tag"><span class="tag__dot"></span>' + esc(p.etiqueta) +
              (p.plan ? '<span class="pcard__badge pcard__badge--plan">' + esc(p.plan) + '</span>' : '') + '</p>' +
            '<h3 class="pcard__title">' + esc(base.titulo) + '</h3>' +
            '<p class="pcard__lead">' + esc(p.frase) + '</p>' +
            '<div class="pcard__actions">' +
              '<button class="pcard__toggle" type="button" aria-expanded="' + abierta + '" aria-controls="' + id + '">' +
                '<span class="pcard__ttxt">' + esc(abierta ? t.cerrar : t.verComoFunciona) + '</span><span class="pcard__chev" aria-hidden="true">' + icon('mas') + '</span></button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="pcard__more" id="' + id + '"' + (abierta ? '' : ' inert') + '><div class="pcard__inner">' +
          '<div class="feature__duo">' +
            vista(p.web || {}, base.imagenWeb, base.linkWeb, 'btn--orange', base.barraWeb) +
            vista(p.panel || {}, base.imagenPanel, base.linkPanel, 'btn--dark', base.barraPanel) +
          '</div>' +
          '<ol class="feature__steps">' + (p.pasos || []).map(function (s, i) {
            return '<li><span class="feature__sicon">' + icon(iconos[i] || 'check') +
              '<span class="feature__snum">' + (i + 1) + '</span></span><span>' + esc(s) + '</span></li>';
          }).join('') + '</ol>' +
          (p.nota ? '<p class="feature__tip">' + esc(p.nota) + '</p>' : '') +
        '</div></div>' +
      '</article>';
    }).join('') + '</div>';
  }

  // Preguntas frecuentes
  function renderPreguntas() {
    render('preguntas', (T().preguntas || []).map(function (q, i) {
      return '<div class="acc">' +
        '<h3><button class="acc__btn" type="button" aria-expanded="false" aria-controls="faq-' + i + '" id="faq-b-' + i + '">' +
        '<span>' + esc(q.pregunta) + '</span><span class="acc__icon" aria-hidden="true">' + icon('mas') + '</span></button></h3>' +
        '<div class="acc__panel" id="faq-' + i + '" role="region" aria-labelledby="faq-b-' + i + '"><div class="acc__inner"><p>' + esc(q.respuesta) + '</p></div></div>' +
        '</div>';
    }).join(''));
  }

  function renderTodo() {
    renderPastillas();
    renderChips();
    renderServicios();
    renderProyectos();
    renderPreguntas();
  }

  aplicarTextos();
  aplicarLinks();
  renderHerramientas();
  renderTodo();

  /* =====================================================================
     3. EVENTOS (delegados: siguen andando después de cambiar el idioma)
     ===================================================================== */

  // Proyectos: abrir / cerrar ("Ver cómo funciona"). Tocar la captura hace lo mismo.
  var proyectosEl = $('[data-render="proyectos"]');
  if (proyectosEl) {
    proyectosEl.addEventListener('click', function (e) {
      var th = e.target.closest('.pcard__thumb[data-abre]');
      var btn = th
        ? $('.pcard__toggle[aria-controls="' + th.getAttribute('data-abre') + '"]', proyectosEl)
        : e.target.closest('.pcard__toggle');
      if (!btn) return;
      var card = btn.closest('.pcard');
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var abrir = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', abrir ? 'true' : 'false');
      card.classList.toggle('is-open', abrir);
      btn.querySelector('.pcard__ttxt').textContent = abrir ? T().cerrar : T().verComoFunciona;
      if (abrir) panel.removeAttribute('inert'); else panel.setAttribute('inert', '');
      // Al cerrar, si la tarjeta quedó arriba de la pantalla, volver a ella
      if (!abrir && card.getBoundingClientRect().top < 0) {
        card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
      if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 650);
    });
  }

  // Preguntas frecuentes (acordeón)
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.acc__btn');
    if (!b) return;
    var item = b.closest('.acc');
    var open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    b.setAttribute('aria-expanded', open);
  });

  // Botón ES / EN
  var alCambiarIdioma = []; // las animaciones se suman acá para rearmarse
  var botonIdioma = $('.idioma');
  if (botonIdioma) {
    botonIdioma.addEventListener('click', function () {
      idioma = idioma === 'es' ? 'en' : 'es';
      root.lang = idioma;
      root.setAttribute('data-idioma', idioma);
      try { localStorage.setItem('idioma', idioma); } catch (e) {}
      aplicarTextos();
      renderTodo();
      alCambiarIdioma.forEach(function (fn) { fn(); });
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  }

  /* =====================================================================
     4. MENÚ A PANTALLA COMPLETA
     ===================================================================== */
  var menu = $('#menu');
  var toggle = $('.nav__toggle');

  $$('.menu__item').forEach(function (li, i) { li.style.setProperty('--i', i); });
  $$('.menu__link span').forEach(function (s, i) { s.style.setProperty('--i', i); });

  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? T().cerrarMenu : T().abrirMenu);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      setTimeout(function () { var l = $('.menu__link', menu); if (l) l.focus({ preventScroll: true }); }, 350);
    }
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
    });
  }

  /* =====================================================================
     5. BARRA DE PROGRESO + BOTÓN "VOLVER ARRIBA"
     ===================================================================== */
  var bar = $('.progress__bar');
  var topBtn = $('.float-btn--top');
  var ticking = false;
  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = 'scaleX(' + p + ')';
    topBtn.classList.toggle('is-visible', p > 0.72);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    var logo = $('.nav__logo');
    if (logo) logo.focus({ preventScroll: true });
  });

  /* =====================================================================
     6. GRILLA DE FONDO + "LINTERNA" QUE LA REVELA ALREDEDOR DEL CURSOR
     Solo en el inicio y en las secciones de fondo negro.
     En celular no hay cursor: queda solo la grilla base suave.
     ===================================================================== */
  var hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var gridSections = $$('.hero, .section--dark');
  gridSections.forEach(function (sec) {
    sec.insertAdjacentHTML('afterbegin',
      '<div class="grid-fx" aria-hidden="true"><span class="grid-fx__base"></span>' +
      (hasMouse ? '<span class="grid-fx__lamp"></span>' : '') + '</div>');
  });

  if (hasMouse) {
    var litSection = null;
    var mouse = null;
    var lampQueued = false;

    var setLit = function (sec) {
      if (litSection === sec) return;
      if (litSection) litSection.classList.remove('is-lit');
      litSection = sec;
      if (sec) sec.classList.add('is-lit');
    };
    // Busca la sección que está debajo del cursor y mueve la linterna ahí
    var moveLamp = function () {
      lampQueued = false;
      if (!mouse) return;
      var found = null, rect = null;
      for (var i = 0; i < gridSections.length; i++) {
        rect = gridSections[i].getBoundingClientRect();
        if (mouse.y >= rect.top && mouse.y < rect.bottom) { found = gridSections[i]; break; }
      }
      if (found) {
        var lamp = found.querySelector('.grid-fx__lamp');
        lamp.style.setProperty('--x', (mouse.x - rect.left) + 'px');
        lamp.style.setProperty('--y', (mouse.y - rect.top) + 'px');
      }
      setLit(found);
    };
    var queueLamp = function () {
      if (!lampQueued) { lampQueued = true; requestAnimationFrame(moveLamp); }
    };

    document.addEventListener('mousemove', function (e) {
      mouse = { x: e.clientX, y: e.clientY };
      queueLamp();
    }, { passive: true });
    // Al scrollear sin mover el mouse, la linterna sigue en el mismo lugar de la pantalla
    window.addEventListener('scroll', queueLamp, { passive: true });
    document.documentElement.addEventListener('mouseleave', function () { mouse = null; setLit(null); });
  }

  /* =====================================================================
     7. ÍNDICE DE SECCIONES A LA DERECHA
     Solo en compu: la media query tiene que ser la misma que en styles.css.
     ===================================================================== */
  var toc = $('.toc');
  var tocMq = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
  if (toc) {
    var tocLinks = $$('.toc__link', toc);
    var tocSections = tocLinks.map(function (a) { return $(a.getAttribute('href')); });
    var heroSec = $('#inicio');
    var closingSec = $('#cierre');
    var navPill = $('.nav__pill');
    var tocQueued = false;

    // ¿Lo que queda detrás de este punto es negro? (secciones negras, tarjetas negras o footer)
    var isDarkAt = function (x, y) {
      var els = document.elementsFromPoint(x, y);
      for (var i = 0; i < els.length; i++) {
        if (toc.contains(els[i])) continue;
        var bg = els[i].closest('.section--dark, .service--dark, .footer, .section--light, .service');
        if (bg) return bg.matches('.section--dark, .service--dark, .footer');
      }
      return false;
    };

    var updateToc = function () {
      tocQueued = false;
      if (!tocMq.matches) return;
      var vh = window.innerHeight;
      // Aparece cuando empezás a bajar y se va en el cierre, para no chocar con los botones flotantes
      var visible = heroSec.getBoundingClientRect().bottom < vh * 0.7 &&
        closingSec.getBoundingClientRect().top > vh * 0.5;
      toc.classList.toggle('is-visible', visible);
      // Sección activa: la última que ya llegó a la mitad de la pantalla
      var active = -1;
      tocSections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= vh * 0.45) active = i; });
      tocLinks.forEach(function (a, i) {
        if (i === active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
      var r = toc.getBoundingClientRect();
      toc.classList.toggle('is-dark', isDarkAt(r.left + r.width / 2, r.top + r.height / 2));
    };
    var queueToc = function () {
      if (!tocQueued) { tocQueued = true; requestAnimationFrame(updateToc); }
    };
    window.addEventListener('scroll', queueToc, { passive: true });
    window.addEventListener('resize', queueToc);
    updateToc();

    // Al tocar un número: scroll suave a la sección, con el título libre de la barra de arriba
    toc.addEventListener('click', function (e) {
      var a = e.target.closest('.toc__link');
      var sec = a && $(a.getAttribute('href'));
      if (!sec) return;
      e.preventDefault();
      var y = sec.getBoundingClientRect().top + window.scrollY;
      var tag = $('.tag', sec);
      if (tag && navPill) {
        y = Math.min(y, tag.getBoundingClientRect().top + window.scrollY - navPill.getBoundingClientRect().bottom - 24);
      }
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
      // Con teclado, el foco sigue desde la sección elegida
      sec.setAttribute('tabindex', '-1');
      sec.focus({ preventScroll: true });
    });
  }

  /* =====================================================================
     8. ANIMACIONES CON GSAP + SCROLLTRIGGER
     (el cursor naranja es solo CSS: ver styles.css)
     ===================================================================== */

  // Separa un título en palabras, respetando las partes en naranja (<em>).
  // La puntuación pegada a una palabra queda junto a ella.
  function splitWords(el, wordClass, innerClass) {
    var tokens = [];
    (function walk(node, em) {
      Array.prototype.forEach.call(node.childNodes, function (n) {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            tokens.push(/^\s+$/.test(p) ? { space: true } : { t: p, em: em });
          });
        } else if (n.nodeName === 'BR') {
          tokens.push({ br: true });
        } else if (n.nodeType === 1) {
          walk(n, em || n.nodeName === 'EM');
        }
      });
    })(el, false);

    var html = '', cur = '';
    function flush() {
      if (!cur) return;
      html += innerClass
        ? '<span class="' + wordClass + '"><span class="' + innerClass + '">' + cur + '</span></span>'
        : '<span class="' + wordClass + '">' + cur + '</span>';
      cur = '';
    }
    tokens.forEach(function (tk) {
      if (tk.space) { flush(); html += ' '; }
      else if (tk.br) { flush(); html += '<br>'; }
      else cur += tk.em ? '<em>' + esc(tk.t) + '</em>' : esc(tk.t);
    });
    flush();
    el.innerHTML = html;
    return $$('.' + (innerClass || wordClass), el);
  }

  if (!canAnimate) {
    root.classList.add('js-ready');
    $$('.step').forEach(function (s) { s.classList.add('is-active'); });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out' });

  // --- Inicio: título palabra por palabra + resto subiendo
  var heroTitle = $('[data-hero-title]');
  var heroWords = splitWords(heroTitle, 'w', 'wi');
  gsap.set(heroTitle, { autoAlpha: 1 });
  var heroTl = gsap.timeline({ delay: 0.15 });
  heroTl
    .from($('.eyebrow[data-hero]'), { y: 20, autoAlpha: 0, duration: 0.7 })
    .from(heroWords, { yPercent: 115, duration: 1, stagger: 0.07 }, '-=0.45')
    .from($$('[data-hero]').filter(function (el) { return !el.classList.contains('eyebrow'); }),
      { y: 36, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, '-=0.65');

  // --- Títulos de cada sección
  $$('[data-split]').forEach(function (el) {
    if (el === heroTitle) return;
    var words = splitWords(el, 'w', 'wi');
    gsap.set(el, { autoAlpha: 1 });
    gsap.from(words, {
      yPercent: 115, duration: 1, stagger: 0.06,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  // --- Textos y bloques que entran subiendo
  $$('[data-reveal]').forEach(function (el) {
    gsap.from(el, {
      y: 40, autoAlpha: 0, duration: 0.9,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
  });
  $$('[data-reveal-group]').forEach(function (group) {
    if (!group.children.length) return;
    // Suben poquito y arrancan apenas el grupo asoma, para que no quede un hueco vacío arriba
    gsap.from(Array.prototype.slice.call(group.children), {
      y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 96%', once: true }
    });
  });

  // --- Tarjetas de servicios: entran y se apilan.
  // Se rearman al cambiar de idioma (las tarjetas se vuelven a dibujar).
  var mmServicios = null;
  function armarServicios(conEntrada) {
    if (mmServicios) mmServicios.revert();
    mmServicios = gsap.matchMedia();
    var cards = $$('.service');
    mmServicios.add('all', function () {
      if (!conEntrada) return;
      cards.forEach(function (card) {
        gsap.from(card, { y: 40, duration: 1, scrollTrigger: { trigger: card, start: 'top 92%', once: true } });
      });
    });
    mmServicios.add('(min-width: 900px) and (min-height: 760px)', function () {
      cards.forEach(function (card, i) {
        var next = cards[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.94, ease: 'none',
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top+=' + (100 + i * 14), scrub: true }
        });
      });
    });
  }
  armarServicios(true);
  alCambiarIdioma.push(function () { armarServicios(false); });

  // --- Frase grande: las palabras se prenden con el scroll (y se apagan al volver)
  var statement = $('.statement');
  var fraseTween = null;
  function armarFrase() {
    if (fraseTween) { fraseTween.scrollTrigger && fraseTween.scrollTrigger.kill(); fraseTween.kill(); }
    var lightWords = [];
    $$('[data-light]', statement).forEach(function (el) {
      lightWords = lightWords.concat(splitWords(el, 'lw'));
    });
    gsap.set(lightWords, { color: '#3A3A3A' });
    fraseTween = gsap.to(lightWords, {
      color: function (i, el) { return el.querySelector('em') ? '#FF6A13' : '#F5F5F0'; },
      ease: 'none',
      stagger: 0.12,
      scrollTrigger: { trigger: statement, start: 'top 72%', end: 'bottom 78%', scrub: 0.5 }
    });
  }
  if (statement) {
    armarFrase();
    alCambiarIdioma.push(armarFrase);
  }

  // --- Cómo trabajo: la línea se llena y se prenden los pasos
  var mm = gsap.matchMedia();
  var steps = $$('.step');
  var fill = $('.steps__fill');
  function stepsUpdate(self) {
    var p = self.progress;
    steps.forEach(function (s, i) { s.classList.toggle('is-active', p >= i / (steps.length - 1) - 0.02); });
  }
  mm.add('(max-width: 899px)', function () {
    gsap.fromTo(fill, { scaleY: 0 }, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: '.steps', start: 'top 70%', end: 'bottom 70%', scrub: 0.4, onUpdate: stepsUpdate }
    });
  });
  mm.add('(min-width: 900px)', function () {
    gsap.fromTo(fill, { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: '.steps', start: 'top 80%', end: 'top 35%', scrub: 0.4, onUpdate: stepsUpdate }
    });
  });
  gsap.from(steps, {
    y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.12,
    scrollTrigger: { trigger: '.steps', start: 'top 85%', once: true }
  });

  // Recalcular posiciones cuando cargan las tipografías
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  root.classList.add('js-ready');
})();
