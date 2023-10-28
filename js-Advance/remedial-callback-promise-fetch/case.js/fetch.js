fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=movie')
        .then(result => result.json())
        .then(result => {
            let movies = result.Search
            movies.sort((terlama, terbaru) => terbaru.Year - terlama.Year)
            let cards = ''
            movies.forEach(i => {
                cards += showCards(i)
            })
            let movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards
    
            let modalButton = document.querySelectorAll('.modal-detail-button')
            modalButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    let imdbID = this.dataset.imdbid
                    fetch('http://www.omdbapi.com/?apikey=ba41c0fc&i=' + imdbID)
                        .then(result => result.json())
                        .then(result => {
                            let modal = showMovieDetails(result)
                            let movieModal = document.querySelector('.movie-modal')
                            movieModal.innerHTML = modal
                        })
                })
            })
        
        })
        .catch(err => {
            console.error(err)
            console.log(err.responseText)
        })

//===============================================================================
let searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function() {
    let inputKeyword = document.querySelector('.input-keyword')
    fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=' + inputKeyword.value)
        .then(result => result.json())
        .then(result => {
            let movies = result.Search
            movies.sort((terlama, terbaru) => terbaru.Year - terlama.Year)
            let cards = ''
            movies.forEach(i => {
                cards += showCards(i)
            })
            let movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards
    
            let modalButton = document.querySelectorAll('.modal-detail-button')
            modalButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    let imdbID = this.dataset.imdbid
                    fetch('http://www.omdbapi.com/?apikey=ba41c0fc&i=' + imdbID)
                        .then(result => result.json())
                        .then(result => {
                            let modal = showMovieDetails(result)
                            let movieModal = document.querySelector('.movie-modal')
                            movieModal.innerHTML = modal
                        })
                })
            })
        
        })
        .catch(err => {
            console.error(err)
            console.log(err.responseText)
        })
})


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