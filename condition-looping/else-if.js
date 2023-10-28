// var nilai = Number(prompt('angka?'))
// if (nilai % 2 === 0) {
//     alert(nilai + ' hasil bagi 0 = genab')
// } else if (nilai % 2 === 1) {
//     alert(nilai + ' hasil bagi tidak 0 = ganjil')
// } else {
//     alert ('Bukan angka')
// } 

var jumlahAngkot = 10
var noAngkotLembur = 8
var angkotOperasi = 6
var noAngkot = 1
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if (noAngkot === noAngkotLembur) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}
