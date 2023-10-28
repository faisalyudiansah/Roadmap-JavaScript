//// FACTORY FUNCTION = Bikin function sesuai dengan function yang lain
// ANONYMOUS FUNCTION (function tanpa nama)

// closure dengan menggunakan lexical scope nya (waktu)

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('pagi')
let selamatSiang = ucapkanSalam('siang')
let selamatMalam = ucapkanSalam('malam')

selamatPagi('ronaldo')
selamatSiang('neymar')
selamatMalam('messi')

console.dir(selamatPagi)