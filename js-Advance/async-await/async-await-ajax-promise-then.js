console.log('mulai')

function movies(){
    return new Promise ((resolve, reject) =>{
        let data = new XMLHttpRequest()
        data.onload = function() {
            if(data.status === 200) {
                let response = JSON.parse(data.responseText)
                resolve(response)
            } else {
                reject(err => {
                    console.log(err)
                    console.error(err)
                })
            }
        }
        let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=spider'
        data.open('get', url)
        data.send()
    })
}
console.log(movies())

// TANPA ASYNC AWAIT JIKA pakai then
function showMovies(){
    let dataMovies = movies()
    dataMovies
        .then(result => console.log(result.Search))
        .catch(err => console.log(err))
}
showMovies()

console.log('selesai')