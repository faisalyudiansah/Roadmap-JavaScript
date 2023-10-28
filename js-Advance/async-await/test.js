// yang menghasilkan promise
// let movies = fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=spider')
// console.log(movies)

// fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=spider')
//     .then(result => console.log(result.json()))

console.log('mulai')

fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=spider')
    .then(result => result.json())
    .then(result => console.log(result.Search))
    .catch(error => {
        console.error(error)
        alert(error)
        console.log(error.responseText)
    })

console.log('selesai')
