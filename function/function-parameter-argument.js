// a & b di function adalah parameter
// 2 & 3 di hasil adalah argument

// var a = parseInt(prompt('Masukkan angka 1 = '))
// var b = parseInt(prompt('Masukkan angka 2 = '))
// function tambah (a,b) {
//     return a + b
// }
// var hasil = tambah(a*2,b*2) // Memasukkan argument menggunakan expresi
// console.log(hasil)

// function tambah (a,b) {
//     return a + b
// }
// function kali (a,b) {
//     return a * b
// }
// var hasil = kali(tambah(1,2), tambah(3,4)) 
// // function kali(function tambah(1,2), function tambah(3,4))
// // function kali(2,7)
// // hasil return di function kali 21
// console.log(hasil)

// Jika dari argument lebih banyak dari parameter, argument berlebihan akan diabaikan
// function tambah (a,b) {
//     return a + b
// }
// var hasil = tambah(2,3,4)
// console.log(hasil)

// // sama saja. jika parameter lebih banyak dari argument. maka kelebihan akan di isi dengan nilai undefined
// function tambah (a,b,c) {
//     return a + b
// }
// var hasil = tambah(2,3)
// console.log(hasil)

// // variabel khusus "arguments"
// function tambah() {
//     return arguments
// }
// var coba = tambah(2,3,4,5,"hiiii",true,false)
// console.log(coba)


function tambah() { // karena pakai variabel khusus "arguments" tipe array. kosong gakapaapa
    hasil = 0   // isi 0 karena bukan karena i for, tapi karena start awal untuk perhitungan awal dalam body for
    for ( i = 0; i < arguments.length; i++) {
        hasil += arguments[i]    // jadi : hasil = 0 (karena var hasil=0) + 1 + 2 + 3 + 4 = 10
        console.log(arguments[i])
    }
    return hasil 
}
var coba = tambah(1,2,3,4)  // mau di input brp pun, hasilnya akan tetap continue bertambah ke function
console.log(coba)

let nama = 'ronaldo'
function instaURL() {
    let link = ''
    for(let i=0; i<=arguments.length - 1; i++) {
        link += `https://instagram.com/${arguments[i]}`
        link += '\n'
    }
    return link
}
console.log(instaURL('messi', 'neymar'))