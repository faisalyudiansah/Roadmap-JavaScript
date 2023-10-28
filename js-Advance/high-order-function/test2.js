let button = document.querySelector('.button')
button.addEventListener('click', function() {
    return console.log(`sudah diklik bang`)
})
console.log(button)

let star = ''
function alertShow() {
    return alert
}
function bintang (star, alertShow) {
    for(let i=1; i <= 5; i++) {
        for(let a=1; a <= 5; a++) {
            star += '*'
        }
        star += '\n'
    }
    alertShow()(star)
}
bintang(star, alertShow)