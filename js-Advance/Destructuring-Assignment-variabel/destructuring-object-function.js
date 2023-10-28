let pemain = {
    id : 5,
    nama : 'Ramos',
    club : 'real madrid',
    position : 'defender'
}

// function getIdPemain({id, nama}) {    // dengan menggunakan destructuring, asal pakai {..}
//     return id + ' ' + nama
// }
// console.log(getIdPemain(pemain))

function getIdPemain({...object}) {
    return console.log(object.id) + console.log(object.club)
}
getIdPemain(pemain)