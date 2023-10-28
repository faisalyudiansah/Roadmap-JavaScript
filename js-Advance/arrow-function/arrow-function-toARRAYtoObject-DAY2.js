// let pemain = nama => `hallo ${nama}`
// console.log(pemain('ronaldo'))

//================================================== toARRAY
// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungHuruf = pemain.map(function(nama) {
//     return nama.length
// })
// console.log(hitungHuruf)

// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungHuruf = pemain.map((nama) => {
//     return nama.length
// })
// console.log(hitungHuruf)

// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungHuruf = pemain.map(nama => nama.length)
// console.log(hitungHuruf)

//================================================== toOBJECT
let pemain = ['ronaldo', 'messi', 'neymar']
let hitungHuruf = pemain.map(nama => ({
        nama : nama,
        jumlahHuruf : nama.length
    })
)
console.log(hitungHuruf)
console.table(hitungHuruf)
