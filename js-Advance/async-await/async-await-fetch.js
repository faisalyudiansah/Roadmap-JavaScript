console.log('mulai')

async function fetchData() {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=movie');
        const data = await response.json();
        console.log(response)
        console.log(data)
        console.log(data.Search)
        // return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
fetchData()

console.log('selesai')