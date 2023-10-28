// Spread Operator
// memecah iterables menjadi single element

const pemain = ['ronaldo', 'messi', 'neymar']
console.log(pemain)
console.log(...pemain)
console.log(...pemain[0])

// contoh penggunaan spread operator
const food = ['fruit', 'meat', 'pizza']
const drink = ['beer', 'soda', 'milk']

const fooddrink1 = [food, drink]         // MEMASUKKAN array ke dalam array [ [..], [..] ]
const fooddrink2 = [...food, ...drink]  // MENGGABUNGKAN isi ke dua array

// Bisa menggabungkan dengan concat TAPI lebih flexible menggunakan SPREAD OPERATOR
// Karena : misal mau menambahkan elemen array tambahan di tengah array || di depan || di belakang
const fooddrink3 = ['FRONT', ...food, 'MID',...drink, 'BACK']  // MENGGABUNGKAN isi ke dua array

// KALO MENGGABUNGKAN ARRAY DENGAN concat()
const fooddrink4 = food.concat(drink) // Use concat method to merge arrays




console.log(fooddrink1)
console.log(fooddrink2)
console.log(fooddrink3)
console.log(fooddrink4)
