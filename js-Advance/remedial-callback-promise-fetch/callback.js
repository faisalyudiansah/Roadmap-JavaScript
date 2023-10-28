// function showAlert(isi) {
//     let hitung = isi * 2
//     return alert(hitung)
// }

// function show(showAlert){
//     let isi = prompt('isi = ')
//     return showAlert(isi)
// }
// show(showAlert)

let player = [
    {
        "nama" : "Ronaldo",
        "club" : "Real Madrid",
        "position" : "Striker",
        "no" : 7
    },
    {
        "nama" : "kaka",
        "club" : "AC Milan",
        "position" : "Midfielder",
        "no" : 22
    },
    {
        "nama" : "Ferdinand",
        "club" : "Manchester United",
        "position" : "Defender",
        "no" : 4
    }
]
player.map(i => console.log(i.nama))
player.forEach(i => console.log(i.nama))