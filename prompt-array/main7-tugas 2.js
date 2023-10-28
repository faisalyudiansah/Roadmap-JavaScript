document.title = 'faisal'

const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
console.log(btn1)
console.log(btn2)

const awalText = btn1.textContent = 'TOMBOL 1'
const awalText2 = btn2.textContent = 'TOMBOL 2'

btn1.style.border = 'none'
btn1.style.backgroundColor = 'red'
btn1.style.color = 'white'
btn1.style.padding = '10px'
btn1.style.fontSize = '15px'
btn1.style.borderRadius = '20px'

btn2.style.border = 'none'
btn2.style.backgroundColor = 'blue'
btn2.style.color = 'white'
btn2.style.padding = '10px'
btn2.style.fontSize = '15px'

function klikShit() {
    btn1.style.backgroundColor = 'green'
    btn1.style.color = 'white'
        btn1.textContent = 'terbunuh'
    const nambahText = document.createElement('p')
    nambahText.textContent = 'sudah di-klik'
    body.append(nambahText)
}

function inFuck() {
    btn1.style.backgroundColor = 'yellow'
    btn1.style.color = 'black'
        btn1.textContent = 'zehahahahah'
}

function outFuck() {
    btn1.style.backgroundColor = 'tomato'
    btn1.style.color = 'white'
        btn1.textContent = (awalText)
}

function masuk() {
    const textMasuk = document.createElement('p')
    textMasuk.textContent = 'sudah masuk'
    body.append(textMasuk)
    btn2.style.backgroundColor = 'purple'
}

function keluar() {
    btn2.style.backgroundColor = 'blue'
}