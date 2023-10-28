// ERROR HANDLER
// ketika menggunakan catch, error yang ditangkap oleh fetch yaitu error pada network / url

console.log('mulai')

function movies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=' + keyword)
        .then(result => {
            if(!result.ok){
                throw new Error(result.statusText)
            }
            return result.json()
        .then(result => {
            if(result.Response === 'False'){
                throw new Error(result.Error)   // cek di console.log(result)
            }
            return result.Search    
        })
    }
)}

async function panggil() {
    try {
        const response = await movies('spider')
        // let dataMovies = await response.json()
        console.log(response)
        // console.log(response.Search)
        // console.log(dataMovies)
        // console.log(dataMovies.Search)
    } catch (error) {
        alert(error)
    } finally {
        console.log('Proses selesai')
    }
}
// console.log(panggil())
panggil()

console.log('selesai')