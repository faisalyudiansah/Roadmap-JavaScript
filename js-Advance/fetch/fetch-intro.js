// FETCH = Sebuah method pada API Javascript untuk mengambil resources dari jaringan, dan mengembalikan yg bentuk nya promise selesai (fullfilled) ketika ada response yang tersedia

// fetch(resources, {init/config})
// resources = url source / sebuah object request
// init = (optional) konfigurasi tambahan pada sebuah request BERBENTUK OBJECT. default init adalag get

// response = hasil dari fetch berupa PROMISE

let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=movie'
let movies = fetch(url, {method : 'GET'})
    .then(result => result.json())
    // .then(result => console.log(result.Search))
console.log(movies)

function getMovies() {
    let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=movie'
    return fetch(url, {
        method: 'GET'
    })
        // .then(result => result.json())
        // .then(result => console.log(result.Search))
}
console.log(getMovies()) // hasil nya promise