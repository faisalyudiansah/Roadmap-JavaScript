// EXECUTION CONTEXT, HOISTING, & SCOPE

function satu() {
    let nama = 'neymar'
    console.log(nama)   // hasil = neymar (karena didalam local execution context)
}

function dua() {
    console.log(nama)   // hasil = faisal (karena paramter kosong. Tidak ada yang menangkap dari panggilan)
}

function tiga() {
    console.log(nama)   // hasil = faisal (karena tiga() dibawah var)
}

function empat(nama) {
    console.log(nama)   //  hasil = robinho (karena didalam dikirim dari argument ke parameter)
}

function tanpaargument(nama) {
    console.log(`haha ${nama}`)   //  hasil = undefined (argument kosong)
}

// hasil undefined karena panggilan di atas var
function lima(nama) {
    console.log('lima ' + nama)
    function enam(nama) {
        console.log('enam ' + nama)
        function tujuh(nama) {
            console.log('tujuh ' + nama)
        }
        tujuh()
    }
    enam()
}
lima()

// function di hoisting dahulu (running yang global dulu)
// creation phase pada context global

console.log(nama)   // hasil = UNDEFINED (karena console di atas var. jika var ganti let/const, maka error)
var nama = 'faisal'
satu('kaka ')
dua('ronaldo')
tiga()
empat('robinho')
tanpaargument()
console.log(nama)   // hasil = faisal (karena console nya dibawah var)