//================================================== Object
//================================================== KALO OBJECT HARUS SAMA KEY NYA
let brand = {
    apple : 'apple',
    acer : 'acer',
    toshiba : 'toshiba',
    lenovo : 'lenovo',
    dell : 'dell - PAKAI INI KARENA ADA'
}
// console.log(brand.apple)
// console.log(brand.acer)
// console.log(brand.asus)

// 1. KEY nya KALO MAU SKIP, hapus saja key nya property (seperti acer)
// 2. tambah saja "let" (variabel) jika lupa
// 3. nama key DELL dan ASUS di bedain =
let {apple, toshiba} = brand     // key nya harus sama dengan property (bisa di ubah dgn :)
let {lenovo: laptopLenovo, dell = 'INI JIKA TIDAK ADA', asus: laptopAsus = 'INI JIKA TIDAK ADA'} = brand 
console.log(apple)
console.log(laptopLenovo)   // nama key nya dibedakan
console.log(dell)
console.log(laptopAsus)     // property asus tidak ada di object + nama key nya di ubah

console.log(brand)

//================================================== Assigment tanpa deklarasi object (KALO DATA SEDIKIT)
let {ronaldo, messi, neymar} = {
    ronaldo : 'ronaldo',
    messi : 'messi',
    neymar : 'neymar'
}
console.log(messi)

//================================================== REST PARAMETER (tapi bentuknya object)
let pemain = {
    ronaldo : 'ronaldo',
    messi : 'messi',
    neymar : 'neymar'
}
let {...restParameter} = pemain
console.log(pemain)
console.log('nama = ' + pemain.ronaldo)
