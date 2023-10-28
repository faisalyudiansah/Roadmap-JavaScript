fetch('pemain.json')
    .then(result => result.json())
    .then(result => result.forEach(i => console.log(i.nama)))
    .catch(result => {
        console.error(result)
        console.log(error.responseText)
    })