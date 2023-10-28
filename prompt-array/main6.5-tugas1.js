var gaji1 = Number(prompt ('Gaji bulan ini ='))
var gaji2 = Number(prompt ('Gaji bulan kemarin = '))

const totalGaji = gaji1 + gaji2
alert(`gaji bulan ini ${gaji1} gaji bulan kemarin Rp.${gaji2} total gaji Rp.${totalGaji}`)

//////////////////////////////////////////////

// let tanggal = new Date().getDay()
// let namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
// let bilanganHari = tanggal
// console.log(`hari ini adalah hari ${namaHari[bilanganHari]}`)

let tanggal = new Date().getDay()
let namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
console.log(`hari ini adalah hari ${namaHari[tanggal]}`)