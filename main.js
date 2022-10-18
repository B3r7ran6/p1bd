
function openCloseNav(x) {
    x.classList.toggle("change");
    if (document.querySelectorAll('nav')[0].style.width != 0) {
        document.querySelectorAll('nav')[0].style.width = "0";
    } else {
        document.querySelectorAll('nav')[0].style.width = "initial";
    }
}