//// variabel didalam object di sebut properti
//// function didalam object di sebut method

var mahasiswa = {
    nama : 'Ronaldo',
    lulus : true,
    statusMhs : function() {
        if(this.lulus == true) {
            this.statusMhs = 'Sudah lulus'
        } else {
            this.statusMhs = 'Belum lulus'
        }
        return this.statusMhs
    },
    ipSemester : [2.34, 3.33, 3.22, 2.80, 3.40],
    ipKumulatif : function() {
        var total = 0
        var ipS = this.ipSemester
        for(var i=0; i<ipS.length; i++) {
            total += ipS[i]
        }
        return total/ipS.length
    },
    //// object didalam object
    alamat : {
        kota : 'Madrid',
        negara : 'Spain',
        club : 'Real Madrid'
    }
}

var namaMahasiswa = mahasiswa.nama
var statusKelulusan = mahasiswa.statusMhs()
var ipK = mahasiswa.ipKumulatif()
var ipSms = mahasiswa.ipSemester[4]
var alamatMhs = JSON.stringify(mahasiswa.alamat)

console.log('Nama mahasiswa = ' + namaMahasiswa)
console.log('Status mahasiswa = ' + statusKelulusan)
console.log('Nilai ipK mahasiswa = ' + ipK.toFixed(2))
console.log('Nilai ipS terakhir mahasiswa = ' + ipSms.toFixed(2))
console.log('Alamat mahasiswa = ' + alamatMhs)