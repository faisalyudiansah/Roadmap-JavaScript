// SUDAH ASYNCHRONOUS
// VERSI menggunakan JQUERY. menggunakan library jquery

console.log('MULAI (bukti async)')

    $.ajax({
        url : 'json/pemain.json',
        success: (result) => {      // SUDAH OBJECT GA PERLU JSON PARSE
            console.log(result)
            let callNama = result
            callNama.forEach(i => console.log(i.nama))
        },
        error : (err) => {
            console.log(err.responseText)
            console.log('ADA ERROR NIH')
        }
    })
    
console.log('SELESAI (bukti async)')