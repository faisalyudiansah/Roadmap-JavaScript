(async function homepageCards() {
    let movies = await getMovies('movie')
    postUIcards(movies)
})()

//======================================================================================
let searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function() {
    let inputKeyword = document.querySelector('.input-keyword')
    let movies = await getMovies(inputKeyword.value)
    console.log(movies)
    postUIcards(movies)
})
 
// Event Binding = ngasih event ke element yang awalnya blm ada tapi ketika ada, event nya tetap bisa berjalan
// binding event untuk element yang awal nya gak ada, tapi nantinya ADA
// dengan menyimpan event handler ke document (semua element yang ada diweb)
document.addEventListener('click', async function(e){
    let buttonClass  = 'modal-detail-button'
    if(e.target.classList.contains(buttonClass)) {
        let imdbID = e.target.dataset.imdbid
        let detailMovie = await getDetailMovie(imdbID)
        console.log(detailMovie)
        postModal(detailMovie)
    }
})

function getMovies(inputKeyword){
    return fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=' + inputKeyword)
        .then(result => result.json())
        .then(result => result.Search)
        .catch(err => {
            console.error(err)
            console.log(err)
        })
}

function getDetailMovie(imdbID){
    return fetch('http://www.omdbapi.com/?apikey=ba41c0fc&i=' + imdbID)
        .then(result => result.json())
        .then(result => result)
        .catch(err => {
            console.error(err)
            console.log(err)
        })
}

function postUIcards(movies){
    movies.sort((terlama, terbaru) => terbaru.Year - terlama.Year)
    cards = ''
    movies.forEach(i => cards += showCards(i))
        let movieContainer = document.querySelector('.movie-container')
        movieContainer.innerHTML = cards
}

function postModal(detailMovie){
    let modal = showMovieDetails(detailMovie)
        let movieModal = document.querySelector('.movie-modal')
        movieModal.innerHTML = modal
}

function showCards(i) {
    return `<div class="col-md-3 my-4">
                <div class="card h-100">
                    <img src="${i.Poster}" class="card-img-top h-100">
                    <div class="card-body">
                        <h5 class="card-title">${i.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${i.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button mt-3" data-bs-toggle="modal" data-bs-target="#modalMovieDetails" data-imdbid="${i.imdbID}">Show details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetails(result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${result.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${result.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${result.Writer}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${result.Genre}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
                            <li class="list-group-item"><strong>Runtime : </strong><br>${result.Runtime}</li>
                            <li class="list-group-item"><strong>Language : </strong><br>${result.Language}</li>
                            <li class="list-group-item"><strong>imdb Rating : </strong><br>${result.imdbRating}</li>
                            <li class="list-group-item"><strong>Ratings : </strong><br>${result.Ratings.map(o => {
                                return `<ul>
                                            <li>${o.Source} = ${o.Value}</li>
                                        </ul>`
                            }).join('')}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}