const navMenu = document.getElementById("nav-menu"), 
navToggle=document.getElementById("nav-toggle"),
navClose=document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

//Scroll Reveal
const sr = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal(`.home-swiper`)  