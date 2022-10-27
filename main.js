
/* BURGER*/
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
document.querySelectorAll(".menu").forEach(menu =>{
    menu.addEventListener("click", ()  => {
        closeBurgerMenu();
    });
});
/* TOOGLE*/
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
const btn3 = document.querySelector(".know-more-btn3");
const showMore3 = document.querySelector(".show-more3");
btn3.addEventListener("click", () =>{
    showMore3.classList.toggle("is-visible")
});
const btn4 = document.querySelector(".know-more-btn4");
const showMore4 = document.querySelector(".show-more4");
btn4.addEventListener("click", () =>{
    showMore4.classList.toggle("is-visible")
});
const btn5 = document.querySelector(".know-more-btn5");
const showMore5 = document.querySelector(".show-more5");
btn5.addEventListener("click", () =>{
    showMore5.classList.toggle("is-visible")
});
const btn6 = document.querySelector(".know-more-btn6");
const showMore6 = document.querySelector(".show-more6");
btn6.addEventListener("click", () =>{
    showMore6.classList.toggle("is-visible")
});
const btn7 = document.querySelector(".know-more-btn7");
const showMore7 = document.querySelector(".show-more7");
btn7.addEventListener("click", () =>{
    showMore7.classList.toggle("is-visible")
});

//const newsletterButton = document.querySelector("newsletter-button");
//newsletterButton.addEventListener("click", () =>{
//});

/* CHECK EMAIL*/
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
document.querySelector("form").addEventListener("submit", function (e)
 {
    e.preventDefault();
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Adresse e-mail valide, merci pour votre inscription.');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
});

/* SCROLLTOP*/
const scrollT = document.querySelector(".scroll-top");

window.addEventListener("scroll", () =>{
if (window.scrollY > 100) {
    scrollT.style.display="block";
} else {
    scrollT.style.display="none";  
} 
});

scrollT.addEventListener("click", () =>{
    document.documentElement.scrollTo({
        top: 0,        
        behavior: 'smooth'
      });
});