////// jika pakai string ////////////////

const fruits = ['delima', 'banana', 'semangka', 'apel', 'ceri'];
fruits.sort();
console.log('sort = ' + fruits)


//// sort asc pakai function express
var ascending = fruits.sort(function(a,b) {
    return a-b
})
console.log('sort asc = ' + ascending.join('-'))

//////////////////////////////////////// reverse ////////////////////////////////////////////////

fruits.reverse();
console.log('reverse = ' + fruits)


//// reverse pakai function expression 
var ascending2 = fruits.reverse(function(a,b) {
    return a-b
})
console.log('reverse asc = ' + ascending2.join('-'))


var descending2 = fruits.reverse(function(a,b) {
    return b-a
})
console.log('reverse desc = ' + descending2.join('-'))