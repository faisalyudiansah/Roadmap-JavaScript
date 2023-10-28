let pemain = [
    {
        nama : 'Ronaldo',
        club : 'Real Madrid',
        position : 'Striker',
        no : 7
    },
    {
        nama : 'Kaka',
        club : 'AC Milan',
        position : 'Midfielder',
        no : 22
    },
    {
        nama : 'Ferdinand',
        club : 'Manchester United',
        position : 'Defender',
        no : 4
    },
]

// console.log('MULAI (bukti async)')

pemain.forEach(i => {
    let result = i.nama
    console.log(result)
})

let result = function () {
    let array = []
    pemain.forEach(i => array.push(i.nama))
    return array
}
console.log(result())

let final3 = () => {
    let result = []
    pemain.forEach(i => {
        result.push(i.nama)
    })
    return result
}
console.log(final3())

let final = pemain.map(i => i.nama)
console.log(final)

let final2 = () => {
    return pemain.map(i => i.nama)
}
console.log(final2())

let thefinal = []
pemain.map(i => thefinal.push(i.nama))
console.log(thefinal)

// console.log('SELESAI (bukti async)')

function getJson (url, success, error) {
    let data = new XMLHttpRequest()
    data.onreadystatechange = function () {
        if(data.readyState === 4) {
            if(data.status === 200) {
                success(data.response)
            } else if (data.readyState === 404) {
                error()
            }
        }
    }
    data.open('get', url)
    data.send()
}
getJson('json/pemain.json', 
    result => {
        console.log(result)
        let show = JSON.parse(result)   // bentuk array of object
        console.log(show)

        show.forEach(i => console.log(i.nama))

        let ubah2 = show.map(i => i.nama)
        console.log(ubah2)

        let taruh = []
        for(const i of show) {  // pakai of karena bentuk array of object
            console.log(i.nama)
            taruh.push(i.nama)
        }
        console.log(taruh)
    }, () => {})

// function showAlert(sisi) {
//     let hasil = sisi * sisi
//     return alert(hasil)
// }

// function sum(showAlert) {
//     let sisi = prompt('isi = ')
//     return showAlert(sisi)
// }
// sum(showAlert)