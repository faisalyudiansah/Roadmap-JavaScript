function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir,
    this.trayek = trayek,
    this.penumpang = penumpang,
    this.kas = kas

    this.penumpangNaik = function(namaPenumpang) {
    if (this.penumpang.length == 0) {
        if (namaPenumpang == '') {
            console.log('isi nama dulu')
            return this.penumpang
        } else {
            this.penumpang.push(namaPenumpang)
            return this.penumpang
        }
    } else {
        for (var i=0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == undefined ) {
                this.penumpang[i] = namaPenumpang
                return this.penumpang
            } else if (this.penumpang[i] == namaPenumpang) {
                console.log('nama penumpang sudah ada')
                return this.penumpang
            } else if (namaPenumpang == '') {
                console.log('isi nama dulu')
                return this.penumpang 
            }
        }
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }
} 

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            console.log('Ankot sedang kosong')
            return this.penumpang
        }
        for(var i=0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                if (bayar == undefined || bayar == 0) {
                    console.log('bayar dulu')
                    return this.penumpang
                } else {
                    this.penumpang[i] = undefined
                    this.kas = this.kas + bayar
                    return this.penumpang
                }
            } else if (i == this.penumpang.length - 1) {
                console.log('tidak ada penumpang tersebut')
                return this.penumpang
            }
        }
    }
}

var angkot1 = new Angkot('ronaldo', ['portugal', 'spain'], [], 0)
var angkot2 = new Angkot('messi', ['argentina', 'spain'], [], 0)
