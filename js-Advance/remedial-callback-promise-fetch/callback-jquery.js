console.log('mulai')
    $.ajax({
        url : 'pemain.json', 
        success : result => {
            console.log(result)
            result.forEach(i => console.log(i.nama))
        },
        error : err => {
            console.error(err)
            console.log(err.responseText)
        }
    })
console.log('selesai')