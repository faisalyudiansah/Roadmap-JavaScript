// function buatObjectPemain (nama, club, position, contract) {
//     var pemain1 = {}    // deklarasi object nya
//         pemain1.nama1 = nama,
//         pemain1.club1 = club,
//         pemain1.position1 = position,
//         pemain1.contract1 = contract
//     return pemain1
// }
// var player1 = buatObjectPemain('ronaldo', 'real madrid', 'striker', '10')
// var player2 = buatObjectPemain('messi', 'barcelona', 'striker', '4')

// console.log(player1.nama1)
// console.log(player1.club1)
// console.log(player1.position1)
// console.log(player1.contract1)

// console.log(player2)

//==================================================================== FUNCTION EXPRESSION

let buatObjectPemain = function (nama, club, position, contract) {
    var pemain1 = {}    // deklarasi object nya
        pemain1.nama1 = nama,
        pemain1.club1 = club,
        pemain1.position1 = position,
        pemain1.contract1 = contract
    return pemain1
}
var player1 = buatObjectPemain('ronaldo', 'real madrid', 'striker', '10')
var player2 = buatObjectPemain('messi', 'barcelona', 'striker', '4')

console.log(player1.nama1)
console.log(player1.club1)
console.log(player1.position1)
console.log(player1.contract1)

console.log(player2)