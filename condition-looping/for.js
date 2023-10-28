// var jumlahAngkot = 10
// var noAngkot = 1
// for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
// }

// for(var noAngkot = 1; noAngkot <= 10; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
// }

// var jumlahAngkot = 10
// var noAngkot = 1
// for(noAngkot; noAngkot <= 6; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
// } 
// for (noAngkot; noAngkot <= 10; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
// }

var jumlahAngkot = 10
var angkotOperasi = 4
var noAngkot = 1
while (noAngkot <= angkotOperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    noAngkot++
}
for (noAngkot = angkotOperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
}