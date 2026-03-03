/**
 * Interactive demos: Flexbox justify-content and Grid columns
 */
(function () {
  'use strict';

  // Flexbox: set justify-content on the target container
  var flexContainer = document.getElementById('flex-justify-demo');
  if (flexContainer) {
    var flexButtons = document.querySelectorAll('[data-justify]');
    flexButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = this.getAttribute('data-justify');
        flexContainer.style.justifyContent = value;
        flexButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  }

  // Grid: set number of columns on the target container
  var gridContainer = document.getElementById('grid-cols-demo');
  if (gridContainer) {
    var gridButtons = document.querySelectorAll('[data-cols]');
    gridButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var n = this.getAttribute('data-cols');
        gridContainer.style.gridTemplateColumns = 'repeat(' + n + ', 1fr)';
        gridButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  }

  // Optional: toggle code visibility (if we add data-code-toggle)
  document.querySelectorAll('[data-code-toggle]').forEach(function (toggle) {
    var targetId = toggle.getAttribute('data-code-toggle');
    var target = document.getElementById(targetId);
    if (!target) return;
    toggle.addEventListener('click', function () {
      var hidden = target.getAttribute('aria-hidden') === 'true';
      target.setAttribute('aria-hidden', !hidden);
      target.hidden = !hidden;
      toggle.textContent = hidden ? 'Hide code' : 'Show code';
    });
  });
})();
