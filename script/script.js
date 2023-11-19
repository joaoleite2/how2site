const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
const menu = document.querySelector('.menu')//pegando o menu hambúrguer
const navMenu = document.querySelector('.nav-menu')//nav-menu é o nav normal sem considerar o hambúguer

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo')
    navMenu.classList.toggle('ativo')
})



function scrollToSection(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

navLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});
