function KarakterGame (nama, energi) {
    this.nama = nama
    this.energi = energi
    this.tambahEnergi = function(pasif) {
        this.energi += pasif
        console.log(`Karakter ${this.nama} menambah energi sebanyak = ${pasif}`)
    }
    this.kurangEnergi = function(pasif) {
        this.energi -= pasif
        console.log(`Karakter ${this.nama} mengurangi energi sebanyak = ${pasif}`)
    }
}
let karakter1 = new KarakterGame('ling', 10)

// ATAU MENARUH METHOD (FUNCTION NYA) NYA DI LUAR

// let methodKarakterGame = {
//     tambahEnergi : function(pasif) {
//         this.energi += pasif
//         console.log(`karakter ${this.nama} energi nya bertambah = ${pasif}`)
//     },
//     kurangEnergi : function(pasif) {
//         this.energi -= pasif
//         console.log(`karakter ${this.nama} energi nya berkurang = ${pasif}`)
//     }
// }
// function KarakterGame(nama, energi) {
//         this.nama = nama
//         this.energi = energi
//         this.tambahEnergi = methodKarakterGame.tambahEnergi
//         this.kurangEnergi = methodKarakterGame.kurangEnergi
// }
// let karakter1 = new KarakterGame('ling', 10)
