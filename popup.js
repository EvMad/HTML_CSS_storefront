const sel = document.querySelector('#sel');
const display = document.querySelector('.example');
const toHide = document.querySelectorAll('.column');


sel.onclick = (e) => {
    display.classList.toggle("selected");
    then 
        {toHide.style.display = "none";}
    
    e.preventDefault();
};

