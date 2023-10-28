// Copy array

const food = ['fruit', 'meat', 'pizza']
const drink = ['beer', 'soda', 'milk']

const copyFood1 = food                  // CARA BIASA (tidak dianjurkan)
const copyFood2 = [...food]             // CARA spread operator (membuat array baru tanpa ganggu array lama)
const copyDrink = [...drink]

// Jika menggunakan spread operator
// 1. bisa mengganti isi dari elemen yang di copy tanpa menganggu array yang telah di copy (NEW ARRAY)
// 2. menyelip tambahan elemen lain ke array yang di copy
const copyFood3 = ['FRONT', ...food, 'BACK']
copyFood3[1] = 'TELAH DI GANTI'



console.log(copyFood1)
console.log(copyFood2)
console.log(copyFood3)

console.log(copyDrink)