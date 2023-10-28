function init() {
    let nama = 'faisal'
    function tampilnama() { // jika tampilnama() ada paramter, hasil akan undefined karena terhubung ke panggilnama()
        console.log('nama = ' + nama) 
    }
    console.dir(tampilnama)
    return tampilnama    // mengembalikan function ini tanpa menjalankannya
}
let panggilNama = init()
panggilNama()


// //// FACTORY FUNCTION
// function init() {
//     // let nama = 'faisal'
//     function tampilnama(nama) {
//         console.log('nama = ' + nama) 
//     }
//     return tampilnama    // mengembalikan function ini tanpa menjalankannya
// }
// let panggilNama = init()
// panggilNama('TERPANGGIL') // terhubung ke parameter tampilnama()
// panggilNama('INI JUGA TERPANGGIL') // terhubung ke parameter tampilnama()


//// ANONYMOUS FUNCTION (function tanpa nama)
// SAMA SAJA DENGAN YANG DIATAS hanya lebih ringkas
// function init() {
//     // let nama = 'faisal'
//     return function (nama) {
//         console.log('nama = ' + nama) 
//     }
// }
// let panggilNama = init()
// panggilNama('TERPANGGIL') // terhubung ke parameter tampilnama()
// panggilNama('INI JUGA TERPANGGIL') // terhubung ke parameter tampilnama()


//// SAMA KAYAK YANG NOMOR 1 (paling atas)
//// karena parameter tampilnama() kosong untuk menangkapnya
// function init() {
//     let nama = 'faisal'
//     function tampilnama() {
//         console.log('nama = ' + nama) 
//     }
//     return tampilnama    // mengembalikan function ini tanpa menjalankannya
// }
// let panggilNama = init()
// panggilNama('INI GA KEPANGGIL KARENA CONNECT KE LOCAL VARIABEL dan parameter tampilnama() kosong')


// //// Jika init() dikasih parameter
// function init(nama) {
//     // let nama = 'faisal'
//     console.log('nama = ' + nama)   // Hasil = undefined (karena argument init() nya kosong)
//     function tampilnama(nama) {
//         console.log('nama = ' + nama) 
//     }
//     return tampilnama    // mengembalikan function ini tanpa menjalankannya
// }
// let panggilNama = init()
// panggilNama('KE PANGGIL JIKA NAMA DI tampilnama TIDAK CONNECT KE LOCAL VARIABEL')