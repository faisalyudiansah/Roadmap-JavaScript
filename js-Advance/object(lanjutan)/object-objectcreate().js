//// menggunakan Object.create() menggunakan object tipe function declaration

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
        // karakter.tambahEnergi = methodKarakterGame.tambahEnergi // GA PERLU KARENA ADA OBJECT.CREATE()
        // karakter.kurangEnergi = methodKarakterGame.kurangEnergi
    return karakter
    }
let karakter1 = karakterGame('ling', 10)
let karakter2 = karakterGame('fanny', 8)