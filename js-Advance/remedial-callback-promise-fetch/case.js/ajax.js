function getMovies (url, success, error){
    let data = new XMLHttpRequest()
    data.onreadystatechange = function() {
        if(data.readyState === 4) {
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
getMovies('http://www.omdbapi.com/?apikey=ba41c0fc&s=movie', function(result) {
    let data = JSON.parse(result)
    let movies = data.Search
    movies.sort((a,b) => b.Year - a.Year)
    let cards = ''
    movies.forEach(i => {
        cards += showCards(i)
    })
    let movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards

    let clickDetail = document.querySelectorAll('.modal-detail-button')
    clickDetail.forEach(i => {
        i.addEventListener('click', function() {
            let imdbid = this.dataset.imdbid

            function getMoviesModal (url, success, error){
                let data = new XMLHttpRequest()
                data.onreadystatechange = function() {
                    if(data.readyState === 4) {
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
            getMoviesModal('http://www.omdbapi.com/?apikey=ba41c0fc&i=' + imdbid, i => {
                let result = JSON.parse(i)
                let modal = showMovieDetails(result)
                let modalMovie = document.querySelector('.movie-modal')
                modalMovie.innerHTML = modal    
            },
            error => {
                console.error(error)
                console.log(error.responseText)
            })
        })
    })
},  
function(error) {
    console.error(error)
    console.log(error.responseText)
}
)
//======================================================================================//
let search = document.querySelector('.search-button')
search.addEventListener('click', function() {
    function getMovies (url, success, error){
        let data = new XMLHttpRequest()
        data.onreadystatechange = function() {
            if(data.readyState === 4) {
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
    let inputMovie = document.querySelector('.input-keyword')
    getMovies('http://www.omdbapi.com/?apikey=ba41c0fc&s=' + inputMovie.value, function(result) {
        let data = JSON.parse(result)
        let movies = data.Search
        movies.sort((a,b) => b.Year - a.Year)
        let cards = ''
        movies.forEach(i => {
            cards += showCards(i)
        })
        let movieContainer = document.querySelector('.movie-container')
        movieContainer.innerHTML = cards

        let clickDetail = document.querySelectorAll('.modal-detail-button')
        clickDetail.forEach(i => {
            i.addEventListener('click', function() {
                let imdbid = this.dataset.imdbid

                function getMoviesModal (url, success, error){
                    let data = new XMLHttpRequest()
                    data.onreadystatechange = function() {
                        if(data.readyState === 4) {
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
                getMoviesModal('http://www.omdbapi.com/?apikey=ba41c0fc&i=' + imdbid, i => {
                    let result = JSON.parse(i)
                    let modal = showMovieDetails(result)
                    let modalMovie = document.querySelector('.movie-modal')
                    modalMovie.innerHTML = modal
                    
                },
                error => {
                    console.error(error)
                    console.log(error.responseText)
                })
            })
        })
    },  
    function(error) {
        console.error(error)
        console.log(error.responseText)
    }
)
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