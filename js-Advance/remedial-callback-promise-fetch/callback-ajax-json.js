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
getJson('pemain.json', (result) => {
    console.log(result)
    let dataResult = JSON.parse(result)
    dataResult.forEach(i => console.log(i.nama))
    }, 
    error => console.log(error.responseText)
)