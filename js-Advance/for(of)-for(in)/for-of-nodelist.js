let pemain = document.querySelectorAll('.nama')
console.log(pemain)
//================================================= for(of) pada nodelist
pemain.forEach(i => console.log(i.innerHTML))   // untuk ambil isi dari class

//================================================= for(of) pada nodelist
for(let i of pemain){
    console.log(i.innerHTML) // untuk ambil isi dari class
}
