// var jumlahAngkot = 10
// var noAngkotLembur = 8
// var noAngkotLembur2 = 10
// var noAngkotLembur3 = 5
// var angkotOperasi = 6
// var noAngkot = 1
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= angkotOperasi && !noAngkotLembur3) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     } else if (noAngkot === noAngkotLembur || noAngkot === noAngkotLembur2 || noAngkot === noAngkotLembur3) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

var jumlahAngkot = 10
var angkotOperasi = 6
var noAngkot = 1
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}


// var jumlahAngkot = 15
// var angkotOperasi = 6
// var noAngkot = 1
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot === 1 || noAngkot === 2 || noAngkot === 3 || noAngkot === 4 || noAngkot === 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }