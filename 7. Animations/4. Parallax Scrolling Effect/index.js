const layer1 = document.getElementById('layer1')
const layer2 = document.getElementById('layer2')
const text = document.getElementById('text')

document.addEventListener('scroll', function () {
    scroll = window.scrollY
    layer1.style.width = (100 + scroll/6) + '%'
    layer2.style.width = (100 + scroll/6) + '%'
    layer2.style.left = scroll/30 + '%'
    text.style.top = -scroll/15 + '%'
})
