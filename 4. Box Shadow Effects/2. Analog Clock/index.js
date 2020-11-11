const deg = 6;

const hours = document.querySelector('#hr')
const minutes = document.querySelector('#mn')
const seconds = document.querySelector('#sc')

setInterval(() => {
    let day = new Date()
    let hr = day.getHours() * 30
    let mn = day.getMinutes() * deg
    let sc = day.getSeconds() * deg

    hours.style.transform = `rotateZ(${(hr) + (mn / 12)}deg)`
    minutes.style.transform = `rotateZ(${mn}deg)`
    seconds.style.transform = `rotateZ(${sc}deg)`
}, 1000)


