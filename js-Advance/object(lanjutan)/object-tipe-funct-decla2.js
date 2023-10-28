// function karakterGame (nama, energi) {
//     let karakter = {}
//     karakter.nama = nama
//     karakter.energi = energi
//     karakter.tambahEnergi = function(pasif) {
//         this.energi += pasif
//         console.log(`Karakter ${this.nama} menambah energi sebanyak ${pasif}`)
//     }
//     karakter.kurangEnergi = function(pasif) {
//         this.energi -= pasif
//         console.log(`Karakter ${this.nama} mengurangi energi sebanyak ${pasif}`)
//     }
//     return karakter
// }
// let karakter1 = karakterGame('ling', 10)

//// membuat method terpisah 

const methodKarakterGame = {
    tambahEnergi : function(pasif) {
        this.energi += pasif
        console.log(`Karakter ${this.nama} menambah energi sebanyak ${pasif}`)
    },
    kurangEnergi : function(pasif) {
        this.energi -= pasif
        console.log(`Karakter ${this.nama} mengurangi energi sebanyak ${pasif}`)
    }
}
function karakterGame (nama, energi) {
    let karakter = Object.create(methodKarakterGame)
        karakter.nama = nama
        karakter.energi = energi
        // karakter.tambahEnergi = methodKarakterGame.tambahEnergi
        // karakter.kurangEnergi = methodKarakterGame.kurangEnergi
    return karakter
}
let karakter1 = karakterGame('ling', 10)