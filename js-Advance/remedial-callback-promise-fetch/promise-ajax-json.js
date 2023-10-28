console.log('MULAI')
//=================================================== sebelum

// function getJson(url, success, error) {
//     let data = new XMLHttpRequest()
//     data.onreadystatechange = function() {
//         if(data.readyState === 4) {
//             if(data.status === 200) {
//                 success(data.response)
//             } else if (data.status === 404) {
//                 error()
//             }
//         }
//     }
//     data.open('get', url)
//     data.send()
// }
// getJson('json/pemain.json', result => console.log(JSON.parse(result)), err => console.error(err))
// getJson('json/club.json', result => console.log(JSON.parse(result)), err => console.error(err))

//=================================================== SESUDAH PROMISE
function getJson2(url) {
    return new Promise((resolve, reject) => {
        let data = new XMLHttpRequest()
        data.onreadystatechange = function() {
            if(data.readyState === 4) {
                if(data.status === 200) {
                    resolve(data.response)
                } else if (data.status === 404) {
                    reject()
                }
            }
        }
        data.open('get', url)
        data.send()
    })
}
//=================================================== DI PISAH
getJson2('json/pemain.json')
    .then(result => console.log(JSON.parse(result)))
    .catch(err => {
        console.error(err)
        console.log(err)
    })
getJson2('json/club.json')
    .then(result => console.log(JSON.parse(result)))
    .catch(err => {
        console.error(err)
        console.log(err)
    })

//=================================================== DI PISAH
Promise.all([
    getJson2('json/pemain.json'),
    getJson2('json/club.json')
])
    // .then(result => {
    // result.map(i => {
    //     let movies = JSON.parse(i)
    //     console.log(movies)
    //     })
    // })
    .then(result => {
        result.map(i => console.log(JSON.parse(i)))
    })
    .catch(err => {
        console.error(err)
        console.log(err)
    })

//=================================================== gabung satu array
Promise.all([
    getJson2('json/pemain.json'),
    getJson2('json/club.json')
])
    .then(result => {
    let data = result.map(i => JSON.parse(i))
    console.log(data)
    })
    .catch(err => {
        console.error(err)
        console.log(err)
    })

//=================================================== DI PISAH taruh ke masing-masing variabel
Promise.all([
    getJson2('json/pemain.json'),
    getJson2('json/club.json')
])
    .then(result => {
        let [pemain, club] = result
        let pemain1 = JSON.parse(pemain)
        let club1 = JSON.parse(club)
            console.log(pemain1)
            console.log(club1)
        pemain1.forEach(i => console.log(i.nama))
        club1.forEach(i => console.log(i.nama))
    })
    .catch(err => {
        console.error(err)
        console.log(err)
    })

console.log('SELESAI')