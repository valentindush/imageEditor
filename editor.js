
let img  = document.querySelector('#img');

function preview(event){
    let img  = document.querySelector('#img');
    img.src=URL.createObjectURL(event.target.files[0])
}

//Nav
const br_nav = document.querySelector('#br')
const opac_nav = document.querySelector('#opac')
const blur_nav = document.querySelector('#blur')

const options = document.querySelector(".option")
//DIVS

const br = document.querySelector('.br')
const opac = document.querySelector('.opac')
const blur = document.querySelector('.blur')

window.onload = ()=>{
    br_nav.classList.add("active")
    opac_nav.classList.remove("active")
    blur_nav.classList.remove("active")   

    br.style.display = "block"
    opac.style.display = "none"
    blur.style.display = "none"
    
}

br_nav.onclick = ()=>{
    br_nav.classList.add("active")
    opac_nav.classList.remove("active")
    blur_nav.classList.remove("active")   

    br.style.display = "block"
    opac.style.display = "none"
    blur.style.display = "none"
}
opac_nav.onclick = ()=>{
    opac_nav.classList.add("active")
    blur_nav.classList.remove("active")   
    br_nav.classList.remove("active")   

    opac.style.display = "block"
    br.style.display = "none"
    blur.style.display = "none"
}
blur_nav.onclick = ()=>{
    blur_nav.classList.add("active")
    opac_nav.classList.remove("active")   
    br_nav.classList.remove("active")   

    blur.style.display = "block"
    opac.style.display = "none"
    br.style.display = "none"
}

//EDITING

let rangeBr = document.querySelector("#rangebr")
let rangeOpac = document.querySelector("#rangeopac")
let rangeBlur = document.querySelector("#rangeblur")

let inputs = document.querySelectorAll('.option input')

inputs[0].onchange = ()=>{
    img.style.filter = `brightness(${inputs[0].value}%)`
}

inputs[1].onchange = ()=>{
    img.style.filter = `opacity(${inputs[1].value}%)`
}
inputs[2].onchange = ()=>{
    img.style.filter = `blur(${inputs[2].value / 10 }px)`
}

//OTHER EFFECTS