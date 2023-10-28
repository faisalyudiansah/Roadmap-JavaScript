var mahasiswa = ['Ronaldo', true, [2.34, 3.33, 3.22, 2.80, 3.40]]

function statusMhs (lulus) {
    if (lulus == true) {
        lulus = 'Sudah lulus'
    } else {
        lulus = 'Belum lulus'
    }
    return lulus
}

function ipKumulatif(ipSemester) {
    var total = 0
    for(var i=0; i<ipSemester.length; i++) {
        total = total + ipSemester[i]
    }
    return total/ipSemester.length
}

var namaMahasiswa = mahasiswa[0]
var statusKelulusan = statusMhs(mahasiswa[1])
var ipK = ipKumulatif(mahasiswa[2])

console.log('Nama mahasiswa = ' + namaMahasiswa)
console.log('Status mahasiswa = ' + statusKelulusan)
console.log('Nilai ipK mahasiswa = ' + ipK.toFixed(2))