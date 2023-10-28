//// LEXICAL SCOPE

//// CLOSURE = inner function membutuhkan variabel yang ada di dalam parent scope nya

// function init() {
//     let nama = 'faisal'     // local variabel
//     function tampilnama() { // inner function (INI DISEBUT = CLOSURE)
//         console.log('nama = ' + nama) // berhasil menampilkan nama dari variabel di atas
//     }
//     tampilnama()
//     console.dir(tampilnama) // cek closure (ADA)
// }
// init()

//////////////////// PERBANDINGAN = ////////////////////

// function init() {
//     let nama = 'faisal'
//     function tampilnama(nama) {
//         console.log(nama) // berhasil menampilkan nama dari variabel di atas
//     }
//     tampilnama(nama)
//     console.dir(tampilnama) // cek closure (TIDAK ADA)
// }
// init()

//////////////////// PERBANDINGAN = ////////////////////

let nama = 'faisal'     // global variabel
function init() {
    console.log('nama = ' + nama) // berhasil mencari nama dari global variabel
    function tampilnama() { // inner function
        console.log('nama = ' + nama) // berhasil mencari nama dari global variabel
    }
    tampilnama()
    console.dir(tampilnama) // cek closure (isi nya script bukan closure)
}
init()

//////////////////// BUKAN CLOSURE (tidak menggunakan lexical scope) = ////////////////////

// function init() {
//     let nama = 'faisal'     
//     console.log('nama = ' + nama)   // pakai let yang ada dalam function sendiri
//     function tampilnama() { // inner function
//         let nama = 'ronaldo'     
//         console.log('nama = ' + nama) // pakai let yang ada dalam function sendiri (no parent scope)
//     }
//     tampilnama()
//     console.dir(tampilnama) // cek closure (TIDAK ADA) (CARA CEK CLOSURE ATAU ENGGA)
// }
// init()