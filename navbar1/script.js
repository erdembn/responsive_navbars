const toggleMenu = document.querySelector('.toggle-button')
const navBar = document.querySelector('.menu')



toggleMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    navBar.classList.toggle('active')
})