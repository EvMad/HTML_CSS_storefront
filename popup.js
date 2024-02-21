const sel = document.querySelector('#sel');
const display = document.querySelector('.example');

sel.onclick = () => display.classList.toggle("selected");