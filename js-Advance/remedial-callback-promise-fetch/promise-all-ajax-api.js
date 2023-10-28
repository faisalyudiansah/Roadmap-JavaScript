console.log('mulai')

function getData1() {
    return new Promise ((resolve, reject) =>{
        let data = new XMLHttpRequest()
        data.onload = function() {
            if(data.status === 200) {
                let response = JSON.parse(data.responseText)
                resolve(response)
            } else {
                reject(err => {
                    console.error(err)
                    console.log(err)
                })
            }
        }
        let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=spider'
        data.open('get', url)
        data.send()
    })
}
let data1 = getData1()
console.log(data1)

function getData2() {
    return new Promise ((resolve, reject) =>{
        let data = new XMLHttpRequest()
        data.onload = function() {
            if(data.status === 200) {
                let response = JSON.parse(data.responseText)
                resolve(response)
            } else {
                reject(err => {
                    console.error(err)
                    console.log(err)
                })
            }
        }
        let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=batman'
        data.open('get', url)
        data.send()
    })
}
let data2 = getData2()
console.log(data2)

//================================================= Gabung array of object
// Promise.all([data1, data2])
//     .then(result => result)
//     .then(result => console.log(result))
//     .catch(err => console.error(err))

//================================================= Pisah
// Promise.all([data1, data2])
//     .then(result => {
//         let [data1, data2] = result
//         let spiderman = data1.Search
//         let batman = data2.Search
//         console.log(spiderman)
//         console.log(batman)
//     })
//     .catch(err => console.error(err))

//================================================= Pisah seperti digabung karena sumber api sama
Promise.all([data1, data2])
    .then(result => {
        // console.log(result)
        result.forEach(i => console.log(i.Search))
    })
    .catch(err => console.error(err))

console.log('selesai')