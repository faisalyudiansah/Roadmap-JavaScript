function getMovies(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(result => result.json())
            .then(result => console.log(result.Search))
            .catch(err => console.log(err))
    })
}
getMovies('http://www.omdbapi.com/?apikey=ba41c0fc&s=movie')





Promise.all([
    fetch('json/pemain.json').then(response => response.json()),
    fetch('json/club.json').then(response => response.json())
  ])
    .then(result => console.log(result))
    .catch(err => console.log(err))