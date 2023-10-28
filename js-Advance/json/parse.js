// JSON.parse() digunakan untuk mengubah string JSON menjadi objek JavaScript.

const fs = require('fs') // Modul Node.js untuk berinteraksi dengan sistem file

// Baca file JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('ADA YANG ERROR', err)
    return
  }

  const jsonData = JSON.parse(data)
  console.log('HASIL PARSE', jsonData)

  // Akses data dalam objek JSON
  const people = jsonData.people
  for (const i of people) {
    console.log(`Name: ${i.name}, Age: ${i.age}, City: ${i.city}`)
  }
});

console.log('====================================================================')

const filePath = 'data.json';
const jsonString3 = fs.readFileSync(filePath, 'utf-8');
const obj3 = JSON.parse(jsonString3);
console.log(obj3);
let takeData = obj3.people
takeData.forEach(i => console.log(`${i.name}-${i.age}-${i.city}`))