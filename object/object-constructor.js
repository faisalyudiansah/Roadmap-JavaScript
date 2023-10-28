//// constructor adalah function yg khusus untuk membuat object
//// biasanya nama function nya huruf besar

function Pemain1 (nama, club, position, contract) {
    this.nama1 = nama,
    this.club1 = club,
    this.position1 = position,
    this.contract1 = contract
}

var player1 = new Pemain1('ronaldo', 'real madrid', 'striker', '10')
var player2 = new Pemain1('messi', 'barcelona', 'striker', '5')

console.log(player1)
console.log(player2)

console.log(player1.nama1)
console.log(player1.club1)
console.log(player1.position1)
console.log(player1.contract1)