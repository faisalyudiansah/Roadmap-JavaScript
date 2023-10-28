// declaration
function test(a,b) {
    var total = a + b
    return total
}
console.log(test(2, 3))
console.log(test(2, 3) + ' di tambah text')
console.log(test())
console.log(test)

// expression
var test2 = function (a2,b2) {
    var total2 = a2 + b2
    return total2
}
console.log(test2(3, 3))
console.log(test2(3, 3) + ' di tambah text')
console.log(test2())
console.log(test2)