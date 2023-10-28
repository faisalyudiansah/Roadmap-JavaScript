// Menjalankan Beberapa Operasi Asynchronous Bersamaan:

// Dalam beberapa situasi, Anda mungkin perlu menjalankan beberapa operasi asynchronous secara bersamaan. Anda dapat menggunakan Promise.all untuk melakukan ini. Contoh:

async function fetchData() {
  try {
    let [data1, data2] = await Promise.all([
      fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=batman')
        .then(response => response.json())
        .then(response => response.Search),
      fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=spider')
        .then(response => response.json())
        .then(response => response.Search)
    ])
    console.log(data1, data2)
    console.log(data1)
    console.log(data2)
  } catch (error) {
    console.error(error)
  }
}
fetchData()
