document.title = 'faisal'
console.log(document.title)

//body tidak sama dengan title, body harus pakai append
const body = document.body

    const h1 = document.createElement('h1')
    h1.textContent = 'h1 nih'
    body.append(h1)


    const li1 = document.createElement('li')
    li1.textContent = '<marquee>step 1</marquee>'   // textcontent ga gerak
    const li2 = document.createElement('li')
    li2.innerHTML = '<marquee>step 2<marquee>'      // innerhtml gerak
    const li3 = document.createElement('li')
    li3.innerText = '<marquee>step 3<marquee>'      // innertext ga gerak
    body.append(li1)
    body.append(li2)
    body.append(li3)