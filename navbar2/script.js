const toggleMenu = document.querySelector('.toggle-menu')
const navLink = document.querySelector('.menu')


toggleMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    navLink.classList.toggle('active')
})