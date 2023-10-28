function showAlert() {
    return alert
}

function result (value, showAlert) {
    let sum = 'Welcome'
    showAlert()(sum)
}
result(10, showAlert)

//================================================== Di persingkat

function sum(show) {
    let sisi = ''
    sisi = prompt('Masukkan sisi kubus = ')
    return show(sisi)
}
sum(sisi => {
    let hitung = 0
    hitung = sisi * sisi * sisi
    return alert(`Hasilnya = ${hitung}`)
})

//================================================== Contoh di DOM

let button = document.querySelector('.button')
button.addEventListener('click', function() {
    console.log('sudah diklik')
})
