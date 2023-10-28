//// FACTORY FUNCTION = Bikin function sesuai dengan function yang lain
//// Contoh lainnya FUNCTION FACTORY
//// CLOSURE

function salam (waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}
let pagi = salam('pagi')
let siang = salam('siang')
let malam = salam('malam')

pagi('messi')
siang('neymar')
malam('ronaldo')

console.dir(pagi)    
// cek = CLOSURE (karena ${waktu} di didapatkan dari hasil dari function parent)
// script berasal dari isi nilai variabel waktu tersebut


// //=================================================== Cara biasa function factory
// function ucapkanSalam(waktu) {
//     function salam(nama) {
//         console.log(`halo ${nama}! selamat ${waktu}`)
//     }
//     return salam
// }
// let pagi = ucapkanSalam('pagi')
// let siang = ucapkanSalam('siang')
// let malam = ucapkanSalam('malam')
// pagi('ronaldo')
// siang('messi')
// malam('neymar')


//=========================================== cara biasa
//=========================================== harus satu persatu (CARA SALAH)


// function salam (waktu) {
//     let nama1 = 'messi'
//     let nama2 = 'neymar'
//     let nama3 = 'ronaldo'
//     function ucapkan() {
//         console.log(`Halo ${nama1}, selamat ${waktu}`)
//         console.log(`Halo ${nama2}, selamat ${waktu}`)
//         console.log(`Halo ${nama3}, selamat ${waktu}`)
//     }
//     ucapkan()
//     console.dir(ucapkan)    // cek = CLOSURE
// }
// salam('pagi')
// salam('siang')
// salam('malam')
