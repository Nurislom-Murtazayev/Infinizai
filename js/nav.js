//  Burger Animation
let navAnim = () => {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");
    burger.addEventListener("click", () => {
    menu.classList.toggle("menu-a");
    burger.classList.toggle("t");
});
};
navAnim();

// Video click 

let chiqq = () => {
    let chiq = document.querySelector(".chiq");
    let open = document.querySelector(".btnc");
    let close = document.querySelector(".close");
    open.addEventListener('click', () => {
        chiq.classList.add("q");
    })
    close.addEventListener('click', () => {
        chiq.classList.remove("q");
    })
}
chiqq();



