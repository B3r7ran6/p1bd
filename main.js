

document.getElementById("burger").addEventListener("click", ()  => {
    document.querySelector(".navBarLinks").classList.toggle("is-visible");
});
function closeBurgerMenu(){
    document.querySelector("#burger").classList.remove("change");
    document.querySelector(".navBarLinks").classList.remove("is-visible");
}
function openCloseNav(x) {
    x.classList.toggle("change");
    if (document.querySelectorAll('nav')[0].style.width != 0) {
        document.querySelectorAll('nav')[0].style.width = "0";
    } else {
        document.querySelectorAll('nav')[0].style.width = "initial";
    }
}

const btn1 = document.querySelector(".know-more-btn1");
const showMore1 = document.querySelector(".show-more1");
btn1.addEventListener("click", () =>{
    showMore1.classList.toggle("is-visible")
});
const btn2 = document.querySelector(".know-more-btn2");
const showMore2 = document.querySelector(".show-more2");
btn2.addEventListener("click", () =>{
    showMore2.classList.toggle("is-visible")
});

//const newsletter = document.querySelector("newsletter-button");
//newsletter.addEventListener("click", () =>{
//});
