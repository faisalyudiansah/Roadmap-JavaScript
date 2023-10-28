//// 3 versi OBJECT FUNCTION DECLARATION

// function karakterGame(nama, energi, tambahEnergi) {
//     let karakter = {}
//         karakter.nama = nama,
//         karakter.energi = energi,
//         karakter.tambahEnergi = function(pasif) {
//             karakter.energi = karakter.energi + pasif
//             console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
//         }
//         return karakter
//     }
// let karakter1 = karakterGame('ling', 10)
// let karakter2 = karakterGame('fanny', 8)


////////////////// mengeluarkan method. Method tersebut dibuatkan object nya sendiri ///////////////////
//// manajemen memory lebih baik ////

// const methodKarakterEnergi = {
//     tambahEnergi : function(pasif) {
//         this.energi = this.energi + pasif
//         console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
//     }
// }
// function karakterGame(nama, energi) {
//     let karakter = {}
//         karakter.nama = nama,
//         karakter.energi = energi,
//         karakter.tambahEnergi = methodKarakterEnergi.tambahEnergi
//         return karakter
//     }
// let karakter1 = karakterGame('ling', 10)
// let karakter2 = karakterGame('fanny', 8)


//////////////////////////////////// PAKAI OBJECT.CREATE() /////////////////////////////////////////////


const methodKarakterEnergi = {
    tambahEnergi : function(pasif) {
        this.energi = this.energi + pasif
        console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
    },
    kurangEnergi : function(pasif) {
        this.energi = this.energi - pasif
        console.log(`Karakter ${this.nama} energi berkurang sebanyak ${pasif}`)
    }
}
function karakterGame(nama, energi) {
    // menghubungkan object ini dgn yg lain berisi method yang dibutuhkan
    let karakter = Object.create(methodKarakterEnergi) 
        karakter.nama = nama,
        karakter.energi = energi
        return karakter
    }
let karakter1 = karakterGame('ling', 10)
let karakter2 = karakterGame('fanny', 8)