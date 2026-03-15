document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('dragstart', event => event.preventDefault());

document.addEventListener('selectstart', event => event.preventDefault());

document.addEventListener('keydown', event => {
    if (event.key === 'F12' || (event.ctrlKey && ['c', 'v', 'u', 's', 'p'].includes(event.key.toLowerCase()))) {
        event.preventDefault();
    }
});

const btnLight = document.getElementById('btn-light');
const btnGithub = document.getElementById('btn-github');
const btnDiscord = document.getElementById('btn-discord');
const btnDarkmode = document.getElementById('btn-darkmode');
const flashlightOverlay = document.getElementById('flashlight-overlay');
let isFlashlightOn = false;

btnLight.addEventListener('click', () => {
  isFlashlightOn = !isFlashlightOn;
  if (isFlashlightOn) {
    flashlightOverlay.classList.add('active');
  } else {
    flashlightOverlay.classList.remove('active');
    flashlightOverlay.style.background = 'rgba(0, 0, 0, 1)';
  }
});

document.addEventListener('mousemove', (e) => {
  if (isFlashlightOn) {
    const x = e.clientX;
    const y = e.clientY;
    flashlightOverlay.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 1) 100%)`;
  }
});

document.addEventListener('touchmove', (e) => {
  if (isFlashlightOn && e.touches.length > 0) {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    flashlightOverlay.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 1) 100%)`;
  }
});

btnGithub.addEventListener('click', () => {
  window.open('https://github.com/muel2962', '_blank');
});

btnDiscord.addEventListener('click', () => {
  window.open('mailto:emuel2962@gmail.com', '_blank');
});

btnDarkmode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});