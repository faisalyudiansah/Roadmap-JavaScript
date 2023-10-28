let nama = prompt('nama =')
let umur = Number(prompt('umur ='))


if (umur > 50){
    umur = 'anda akan mati'
} else if (umur > 20) {
    umur = 'anda akan memulai dewasa'
} else {
    umur = 'anda akan remaja'
}
    

alert(`selamat datang ${nama}!!! sebentar lagi ${umur}`)