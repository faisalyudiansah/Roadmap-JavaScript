var nama = prompt('nama = ')
var usia = prompt('usia = ')
var negara = 'indonesia'
var penghasilan = prompt('penghasilan = ')

var gaji  = 3000
var bonus = 1000
var hutang = 50
var totalGaji = gaji + bonus - hutang

if (penghasilan < 300) {
    penghasilan = 'kecil dari umr'
} else {
    penghasilan = 'lebih dari umr'
}

// switch (penghasilan){
//     case 100: 
//         penghasilan = 'kecil'
//         break
//     case 200: 
//         penghasilan = 'lumayan'
//         break
//     case 300: 
//         penghasilan = 'besar'
//         break
//     default: 
//         penghasilan = 'miskin'
//         break
// }

alert(`nama = ${nama} usia = ${usia} status = ${penghasilan} tinggal di ${negara}`)
alert(`gaji Rp.${gaji} bonus Rp.${bonus} total Rp.${totalGaji}`)