const sel = document.querySelector('#sel');
const display = document.querySelector('.example');
const toHide = document.querySelector('.columns');

sel.onclick = () => display.classList.toggle("selected");

window.onclick = () => toHide.style.display = 'none';