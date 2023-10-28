// JSON.stringify() digunakan untuk mengubah objek JavaScript menjadi string JSON.
// JSON.parse() digunakan untuk mengubah string JSON menjadi objek JavaScript.

const obj1 = {
    name: "John", 
    age: 30 
}
const jsonString1 = JSON.stringify(obj1)
console.log(obj1)
console.log(jsonString1)

console.log('----------------------------')

const jsonString = '{"name":"John","age":30}'
const obj = JSON.parse(jsonString)
console.log(jsonString)
console.log(obj)

const fs = require('fs');
const filePath = 'data.json';
const jsonString3 = fs.readFileSync(filePath, 'utf-8');
const obj3 = JSON.parse(jsonString3);
console.log(jsonString3);
console.log('HASIL PARSE', obj3);
