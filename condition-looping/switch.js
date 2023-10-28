// var angka = Number(prompt('masukkan angka = '))

// switch (angka) {
//     case 1 :
//         alert('angka yang anda masukkan adalah 1')
//         break
//     case 2 :
//         alert('angka yang anda masukkan adalah 2')
//         break
//     case 3 :
//         alert('angka yang anda masukkan adalah 3')
//         break
//     default :
//         alert('angka yang anda masukkan adalah salah')
//         break
// }

// var items = prompt('masukkan makanan dan minuman pilihan anda = \n (cth: nasi, daging, beer, susu, burger')
// switch (items) {
//     case 'nasi' :
//         alert('makanan/minuman sehat')
//         break
//     case 'daging' :
//         alert('makanan/minuman sehat')
//         break
//     case 'beer' :
//         alert('makanan/minuman tidak sehat')
//         break
//     case 'susu' :
//         alert('makanan/minuman sehat')
//         break
//     case 'burger':
//         alert('makanan/minuman tidak sehat')
//         break
//     default :
//         alert('makanan/minuman salah')
//         break
// }

// SAMA SAJA DENGAN YANG ADA DI ATAS (cuma golongan harus rapih : susu dan beer ditukar kalo pakai yang bawah)

var items = prompt('masukkan makanan dan minuman pilihan anda = \n (cth: nasi, daging, beer, susu, burger')
switch (items) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan/minuman sehat')
        break
    case 'beer' :
    case 'burger':
        alert('makanan/minuman tidak sehat')
        break
    default :
        alert('makanan/minuman salah')
        break
}