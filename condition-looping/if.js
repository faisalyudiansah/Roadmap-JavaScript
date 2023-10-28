// var nilai = Number(prompt('angka?'))
// if (nilai % 2 === 0) {
//     alert(nilai + ' hasil bagi 0 = genab')
// } else {
//     alert (nilai + ' hasil bagi tidak 0 = ganjil')
// } 

var nilai = prompt('angka?')
if (nilai % 2 == 0) {
    alert(nilai + ' hasil bagi 0 = genab')
} else {
    alert (nilai + ' hasil bagi tidak 0 = ganjil')
} 

// var jumlahAngkot = 10
// var angkotOperasi = 6
// var noAngkot = 1
// if (noAngkot <= jumlahAngkot) {
//     for (noAngkot; noAngkot <= angkotOperasi; noAngkot++){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     }
//     for (noAngkot = angkotOperasi + 1; noAngkot <= jumlahAngkot; noAngkot++){
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

var jumlahAngkot = 10
var angkotOperasi = 6
var noAngkot = 1
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}