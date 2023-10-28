// Arrow function = bentuk yang lain yang lebih ringkas dari FUNCTION EXPRESSION

//========================================= Function expression biasa sebelum ke arrow function
let tampil1 = function() {
    console.log('ronaldo1')
}
tampil1()

//========================================= Cara ubah Arrow Function

let tampil2 = () => {
    console.log('ronaldo2')
}
tampil2()

//========================================= Jika satu parameter ga wajib pakai tanda kurung
//========================================= Jika dua parameter atau lebih, WAJIB PAKAI

let tampil3 = nama => {
    console.log(nama)
}
tampil3('ronaldo3')

//========================================= IMPLISIT RETURN
//========================================= Jika isi function hanya return saja, maka Return BOLEH ga ditulis
//========================================= Bahkan ga perlu tanda kurung kurawal {}

let tampil4 = (nama, club) => nama + ' ' + club
console.log(tampil4('ronaldo4', 'Barcelona'))


let tampil5 = () => 'ronaldo5'
console.log(tampil5())