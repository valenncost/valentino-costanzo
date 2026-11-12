// Portfolio de Valentino Costanzo: tema claro/oscuro, línea de la cabecera y aparición al scrollear.
(function () {
  var raiz = document.documentElement;

  // --- Tema ---
  var botonTema = document.getElementById("boton-tema");
  var colorBarra = document.querySelector('meta[name="theme-color"]');
  function pintarTema() {
    var claro = raiz.dataset.tema === "claro";
    botonTema.setAttribute("aria-label", claro ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    colorBarra.setAttribute("content", claro ? "#f1efe8" : "#0d0e0c");
  }
  botonTema.addEventListener("click", function () {
    raiz.dataset.tema = raiz.dataset.tema === "claro" ? "oscuro" : "claro";
    try { localStorage.setItem("tema", raiz.dataset.tema); } catch (e) {}
    pintarTema();
  });
  pintarTema();

  // --- Línea debajo de la cabecera cuando se bajó ---
  var cabecera = document.querySelector(".cabecera");
  var centinela = document.createElement("div");
  centinela.style.cssText = "position:absolute;top:0;height:40px;width:1px;pointer-events:none";
  document.body.prepend(centinela);

  // --- Aparición al scrollear ---
  var piezas = document.querySelectorAll(".revelar");
  if (!("IntersectionObserver" in window)) {
    piezas.forEach(function (pieza) { pieza.classList.add("visto"); });
    return;
  }
  new IntersectionObserver(function (entradas) {
    cabecera.classList.toggle("con-linea", !entradas[0].isIntersecting);
  }).observe(centinela);

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add("visto");
      observador.unobserve(entrada.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  piezas.forEach(function (pieza) { observador.observe(pieza); });
})();
