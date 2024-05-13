const urlServer = "https://6641519fa7500fcf1aa01735.mockapi.io/cliente";

let btns = document.querySelectorAll('a', '.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {

    if (btn.href === currentUrl) {
        btn.classList.add('active');
        break;
    }
}