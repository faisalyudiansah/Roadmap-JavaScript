// map filter reduce  = MENGHASILKAN ARRAY BARU
// function nya callback

let angkaa = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let newAngka = []
for(let i=0; i<=angkaa.length; i++) {
    if (angkaa[i] >= 3) {
        newAngka.push(angkaa[i])
    }
}
console.log('cara biasa = ' + (newAngka.sort()))


//========================================= Cara .filter() ============================================
//========================================= memfilter elemen array
let angka = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let cari = angka.filter(function(e) {
    return e >= 3
})
console.log('filter(>= 3) = ' + (cari.sort()))

// arrow function
let angka2 = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let cari2 = angka2.filter(e => e >= 3)
console.log('filter(>= 3) = ' + (cari2.sort()))


//========================================= Cara .map() ===============================================
//========================================= petakan tiap-tiap elemen array nya ke dalam array baru
//================= .map dan .forEach mirip tetapi foreach tidak menghasilkan array baru
// isi dalam filter dikali 2
let angka3 = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let kali = angka3.map(e => e * 2)
console.log('map(*2) = ' + kali)

// mengetahui jumlah huruf pada setiap elemen
let pemain = ['ronaldo', 'messi', 'neymar']
let hitungHuruf = pemain.map(nama => nama.length)
console.log('map(jumlah huruf) = ' + hitungHuruf)


//========================================= Cara .reduce() ============================================
//========================================= melakukan sesuatu terhadap seluruh elemen pada array nya
//========================================= misal : menggabungkan semua elemen array
// menjumlah seluruh jumlahnya
let angka4 = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let jumlah = angka4.reduce((hitung, nilai) => hitung + nilai, 0)// nilai awal default 0 jika tidak ditulis
console.log('reduce(total) = ' + jumlah)


//================= METHOD CHAINING = menggabungkan funct-funct pada higher order function dalam 1x eksekusi
//================= Method chaining PAKAI titik.
//================= Method chaining boleh 2x pakai. misal: .map() 2x pakai (untuk di kali 2 nya, dua kali)
// cari angka > 5
// habis itu kalikan 2
// setelah itu jumlahkan semuanya
let angka5 = [4, 7, -2, 1, 9, 3, -1, -4, 5, 6]
let hasil = angka5.filter(e => e > 5) // 7, 9, 6
    .map(e => e * 3) // 14, 18, 12
    // .map(e => e / 2) // misal 2x pakai
    .reduce((hitung, currentValue) => hitung + currentValue, 0) // 44
console.log('method chaining = ' + hasil)
