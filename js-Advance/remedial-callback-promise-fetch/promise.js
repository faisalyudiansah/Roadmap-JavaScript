let movies = fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=movie')
console.log(movies)
    // .then(result => result.json())
    // .then(result => console.log(result))

console.log('Mulai')

let ditepati = true
let janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji ditepati')
    } else {
        reject('Janji TIDAK ditepati')
    }
})
janji1
    .then(result => console.log('OK : ' + result))
    .catch(result => console.log('NOT OK : ' + result))

console.log('Selesai')

