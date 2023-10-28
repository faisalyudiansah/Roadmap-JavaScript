console.log('mulai')

function getData() {
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
let data = getData()
console.log(data) // liat promise

data
    .then(result => console.log(result.Search))
    .catch(err => console.error(err))



console.log('selesai')