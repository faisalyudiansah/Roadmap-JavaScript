////////// Object.create() menggunakan object function declaration ////////////

let methodKarakterGame = {
    tambahEnergi : function(pasif) {
        this.energi += pasif
        console.log(`karakter ${this.nama} energi nya bertambah = ${pasif}`)
    },
    kurangEnergi : function(pasif) {
        this.energi -= pasif
        console.log(`karakter ${this.nama} energi nya berkurang = ${pasif}`)
    }
}
function karakterGame(nama, energi) {
    let karakter = Object.create(methodKarakterGame)
        karakter.nama = nama
        karakter.energi = energi
        // karakter.tambahEnergi = methodKarakterGame.tambahEnergi  // GA PERLU KARENA ADA OBJECT.CREATE()
        // karakter.kurangEnergi = methodKarakterGame.kurangEnergi
    return karakter
}
let karakter1 = karakterGame('ling', 10)
