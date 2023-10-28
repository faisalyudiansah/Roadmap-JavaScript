console.log('mulai')

function getData() {
    return new Promise ((resolve, reject) =>{
        let data = new XMLHttpRequest()
        data.onload = function() {
            if(data.status === 200) {
                let response = JSON.parse(data.responseText)
                resolve(show(response))
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
console.log(getData())  // lihat promise pending

function show(response){
    // console.log(response)
    // console.log(response.Search)
    let movies = response.Search
    movies.forEach(i => console.log(i.Title))
}

console.log('selesai')