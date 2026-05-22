/* ================================================
   RUTINA L5-S1 · JavaScript principal
   ================================================ */

// ── Progress tracking ──
const TOTAL_EX = 18;

function updateProgress() {
  const open = document.querySelectorAll('.ex.open').length;
  const pct  = ((open / TOTAL_EX) * 100).toFixed(1);

  const fills = document.querySelectorAll('.nav-prog-fill, #progFill');
  fills.forEach(el => el.style.width = pct + '%');

  const texts = document.querySelectorAll('.nav-prog-text, #progText');
  texts.forEach(el => el.textContent = open + ' / ' + TOTAL_EX);
}

// ── Toggle exercise ──
function toggleEx(el) {
  el.classList.toggle('open');
  updateProgress();
}

// Attach to all .ex elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ex-hdr').forEach(hdr => {
    hdr.addEventListener('click', () => toggleEx(hdr.closest('.ex')));
  });

  updateProgress();
  initBackTop();
});
/*
// ── Timer ──
function startTimer(btn, seconds) {
  const disp = btn.nextElementSibling;

  if (btn.classList.contains('running')) {
    clearInterval(btn._iv);
    btn.classList.remove('running', 'done');
    btn.textContent = '⏱ Reiniciar';
    disp.classList.remove('on');
    return;
  }

  btn.classList.add('running');
  btn.classList.remove('done');
  disp.classList.add('on');

  let r = seconds;
  disp.textContent = fmt(r);
  clearInterval(btn._iv);

  btn._iv = setInterval(() => {
    r--;
    disp.textContent = fmt(r);
    if (r <= 0) {
      clearInterval(btn._iv);
      btn.classList.remove('running');
      btn.classList.add('done');
      btn.textContent   = '✓ Completado';
      disp.textContent  = '¡Listo!';
      // Optional vibration on mobile
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
  }, 1000);
}
*/

// ── Timer con Audio ──
function startTimer(btn, seconds) {
  const disp = btn.nextElementSibling;

  if (btn.classList.contains('running')) {
    clearInterval(btn._iv);
    btn.classList.remove('running', 'done');
    btn.textContent = '⏱ Reiniciar';
    disp.classList.remove('on');
    return;
  }

  // 1. CREAR Y DESBLOQUEAR EL AUDIO AQUÍ (En el clic del usuario)
  const alarmSound = new Audio('ruta/tu-sonido.mp3'); 
  alarmSound.play().then(() => {
    // Lo pausamos y rebobinamos al instante. 
    // Esto ya le dice a Safari: "El usuario autorizó este audio".
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }).catch(err => console.log("Error al pre-activar audio:", err));

  btn.classList.add('running');
  btn.classList.remove('done');
  disp.classList.add('on');

  let r = seconds;
  disp.textContent = fmt(r);
  clearInterval(btn._iv);

  btn._iv = setInterval(() => {
    r--;
    disp.textContent = fmt(r);
    if (r <= 0) {
      clearInterval(btn._iv);
      btn.classList.remove('running');
      btn.classList.add('done');
      btn.textContent   = '✓ Completado';
      disp.textContent  = '¡Listo!';
      
      // 2. REPRODUCIR EL AUDIO AQUÍ (Ahora Safari sí te dejará)
      alarmSound.play().catch(err => console.error("Error al reproducir:", err));

      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
  }, 1000);
}


function fmt(s) {
  const m  = Math.floor(s / 60);
  const sc = s % 60;
  return m > 0 ? `${m}:${sc.toString().padStart(2, '0')}` : `${s}s`;
}

// ── Back to top button ──
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

// ── Expand all / Collapse all ──
function expandAll() {
  document.querySelectorAll('.ex').forEach(el => el.classList.add('open'));
  updateProgress();
}

function collapseAll() {
  document.querySelectorAll('.ex').forEach(el => el.classList.remove('open'));
  updateProgress();
}
