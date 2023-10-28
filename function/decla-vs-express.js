//// declaration
pesan(prompt('isi nama = '))
function pesan(nama){
    alert('halo ' + nama)
}

//// expression
var pesan2 = function (nohp) {
    alert('nomor hp anda adalah ' + nohp)
}
pesan2(prompt('isi no hp = '))

//// cara biasa
var kota = prompt('tinggal dikota = ')
alert('anda tinggal dikota ' + kota)