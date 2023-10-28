console.log('mulai')

// without handle error
function getData() {
    let data = new XMLHttpRequest()
    let url = 'http://www.omdbapi.com/?apikey=ba41c0fc&s=spider'
    data.onload = function() {
        let response = JSON.parse(data.responseText)
        show(response)
    }
    data.open('get', url)
    data.send()
}
getData()

function show(response){
    console.log(response)
    console.log(response.Search)
}

console.log('selesai')