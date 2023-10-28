// SUDAH ASYNCHRONOUS
// VERSI menggunakan ajax, vanilla javascripts/Javascript murni

function getJson(url, success, error) {
    let data = new XMLHttpRequest()
    data.onreadystatechange = function () {
        if(data.readyState === 4) {
            if(data.status === 200) {
                success(data.response)
            } else if (data.status === 400) {
                error()
            }
        }
    }
    data.open('get', url)
    data.send()
}

console.log('MULAI (bukti async)')

    getJson('json/pemain.json', 
    result => {
        console.log(result)
        console.log(JSON.parse(result))
        let callNama = JSON.parse(result)
        callNama.forEach(i => console.log(i.nama))
    }, err => {
        console.log(err.responseText)
        console.log('ADA ERROR NIH')
    })

console.log('SELESAI (bukti async)')