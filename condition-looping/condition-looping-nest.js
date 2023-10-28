// var i = 1
// while (i <= 5) {
//     console.log('*')
//     i++
// }

// for (var i=1; i <= 5; i++) {
//     console.log('bintang ke ' + i + ' *****')
// }

// var bintang = ''
// for (var i=1; i <= 5; i++) {
//     // bintang = bintang + '*'
//     bintang += '*'
//     bintang += '\n'
// }
// console.log(bintang)

// var bintang = ''
// for (var i=1; i<=5; i++) {
//     for (var a=1; a<=i; a++){
//         bintang = bintang + '*'
//     }
//     bintang = bintang + '\n'
// }
// console.log(bintang)

// var bintang = ''
// for (var i=1; i<=5; i++) {
//     var a = ''
//     while(a<i){
//         bintang += '*'
//         a++
//     }
//     bintang = bintang + '\n'
// }
// console.log(bintang)

// var bintang = ''
// for (var i=1; i <= 5; i++) {
//     // bintang = bintang + '*'
//     bintang += '*'
// }
// console.log(bintang)

for (var i=10; i > 0; i--) {
    console.log(i)
}

var bintang = ''
for (var i=10; i > 0; i--) {
    for (var a=0; a<i; a++){
        bintang = bintang + '*'
    }
    bintang = bintang + '\n'
}
console.log(bintang)
