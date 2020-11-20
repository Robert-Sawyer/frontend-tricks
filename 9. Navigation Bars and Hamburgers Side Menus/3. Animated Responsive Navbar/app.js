const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.menu li')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})
