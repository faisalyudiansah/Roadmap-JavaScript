var ipSemester = [2.34, 3.33, 3.22, 2.80, 3.40]
// var ipSemester = [2, 4, 5, 3, 1]

function ipKumulatif(ipSemester) {
    var total = 0
    for(var i=0; i<ipSemester.length; i++) {
        total = total + ipSemester[i]
    }
    return total/ipSemester.length
}
var ipK = ipKumulatif(ipSemester)
console.log('Nilai ipK mahasiswa adalah = ' + ipK.toFixed(2))