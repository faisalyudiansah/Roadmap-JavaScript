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
console.log(movies())

async function showMovies(){
    let dataMovies = await movies()
    console.log(dataMovies)
    console.log(dataMovies.Search)
}
showMovies()

console.log('selesai')