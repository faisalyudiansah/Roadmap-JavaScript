$.ajax({
    url: "http://www.omdbapi.com/?apikey=ba41c0fc&s=movie",
    success: result => {
        let movies = result.Search // ada search di console. cek console.log(result)
        movies.sort((terlama, terbaru) => terbaru.Year - terlama.Year)
        let cards = ''
        movies.forEach(i => {
            cards += showCards(i)
        })
        $('.movie-container').html(cards)
        
        // click modal button
        $('.modal-detail-button').on('click', function() {
            // take imdbID from button
            // console.log($(this).data('imdbid'))
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=ba41c0fc&i=' + $(this).data('imdbid'),
                success: result => {
                    let modal = ''
                    modal += showMovieDetails(result)
                $('.movie-modal').html(modal)
                },
                error: (e) => {
                    console.log(e.responseText)
                }
            })
        })
    },
    error: (e) => {
        console.log(e.responseText)
    }
})

$('.search-button').on('click', function() {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=ba41c0fc&s=' + $('.input-keyword').val(),
        success: result => {
            let movies = result.Search // ada search di console. cek console.log(result)
            movies.sort((terlama, terbaru) => terbaru.Year - terlama.Year)
            let cards = ''
            movies.forEach(i => {
                cards += showCards(i)
            })
            $('.movie-container').html(cards)
            
            // click modal button
            $('.modal-detail-button').on('click', function() {
                // take imdbID from button
                // console.log($(this).data('imdbid'))
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=ba41c0fc&i=' + $(this).data('imdbid'),
                    success: result => {
                        let modal = ''
                        modal += showMovieDetails(result)
                    $('.movie-modal').html(modal)
                    },
                    error: (e) => {
                        console.log(e.responseText)
                    }
                })
            })
        },
        error: (e) => {
            console.log(e.responseText)
        }
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