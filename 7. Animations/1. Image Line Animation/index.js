const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')

const timeLine = new TimelineMax();

timeLine.fromTo(hero, 1, {height: '0%'}, {height: "80%", ease: Power2.easyInOut})
    .fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easyInOut})
    .fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easyInOut}, '-=1.2')
    .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
    .fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
    .fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')

//.fromTo(animowany element strony, czas trwaia animacji w sekundach, obiekt z właściwością/właściwościami
//które chcę animować (np height) i ich początkowa wartość, potem obiekt z docelowymi wartościami animowanych
//właściwości (można dodać też rodzaj animacji za pomocą ease:Power2......) i ewentualne opóżnienie lub
//przyspieszenie animacji np jeśli chcę żeby animacja jednego elementu uruchomiła się wtym samym czasie co
//poprzednia
