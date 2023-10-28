function getJson(url, success, error){
    let data = new XMLHttpRequest()
    data.onreadystatechange = function () {
        if(data.readyState === 4){
            if(data.status === 200) {
                success(data.response)
            } else if (data.status === 404) {
                error()
            }
        }
    }
    data.open('get', url)
    data.send()
}
getJson('http://www.omdbapi.com/?apikey=ba41c0fc&s=spider', (result) => {
    let dataResult = JSON.parse(result)
    let movies = dataResult.Search
    console.log(movies)
    movies.forEach(i => console.log(i.Title))
    }, 
    error => console.log(error.responseText)
)