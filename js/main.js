// Zoom de imagen con seguimiento del cursor
(function () {
  'use strict';

  // Detecta soporte de hover real (no táctil)
  const supportsHover = window.matchMedia('(hover: hover)').matches;

  // Aplica zoom a todos los contenedores con clase "zoom-img" (desktop y móvil)
  function initZoom() {
    const containers = document.querySelectorAll('.zoom-img');

    containers.forEach(function (container) {
      const img = container.querySelector('img');
      if (!img) return;

      if (supportsHover) {
        // En desktop: seguimiento suave del cursor
        container.addEventListener('mousemove', function (e) {
          const rect = container.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          img.style.transformOrigin = x + '% ' + y + '%';
        });

        // Restablece el origen al salir
        container.addEventListener('mouseleave', function () {
          img.style.transformOrigin = 'center center';
        });
      } else {
        // En móvil/touch: tap para hacer zoom y tap de nuevo para alejar
        container.addEventListener('click', function () {
          container.classList.toggle('is-zoomed');
        });
      }
    });
  }

  // Scroll suave al hacer clic en "Ver productos"
  function initSmoothScroll() {
    const btnVerProductos = document.getElementById('btn-ver-productos');
    if (!btnVerProductos) return;

    btnVerProductos.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('productos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Cierra el menú móvil al hacer clic en un link
  function initNavbarCollapse() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarMain');

    if (!navbarCollapse) return;

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Solo colapsa si el menú está abierto (en móvil)
        if (navbarCollapse.classList.contains('show')) {
          if (typeof bootstrap !== 'undefined') {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  }

  // Fallback para el toggle del navbar si Bootstrap JS no carga
  function initNavbarToggleFallback() {
    if (typeof bootstrap !== 'undefined') return; // Bootstrap ya está disponible

    const toggler = document.querySelector('.navbar-toggler');
    const collapseEl = document.getElementById('navbarMain');
    if (!toggler || !collapseEl) return;

    toggler.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      collapseEl.classList.toggle('show');
    });
  }

  // Inicializa todo al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    initZoom();
    initSmoothScroll();
    initNavbarCollapse();
    initNavbarToggleFallback();
  });
}());
