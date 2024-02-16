

let text = document.getElementById('text')
let instruction = document.getElementById('instruction')
let gabbar = document.getElementById('gabbar')
let amitabh = document.getElementById('amitabh')
let mughal = document.getElementById('mughal')
let waah = document.getElementById('waah')
let amrish = document.getElementById('amrish')
let img7 = document.getElementById('img7')
let img8 = document.getElementById('img8')
let img9 = document.getElementById('img9')
let img10 = document.getElementById('img10')
let img11 = document.getElementById('img11')
let img12 = document.getElementById('img12')
let img13 = document.getElementById('img13')
let img14 = document.getElementById('img14')
let img15 = document.getElementById('img15')

window.addEventListener('scroll',() => {
    let value = window.scrollX;

    text.style.marginTop = value * 1.5 + 'px';
    instruction.style.marginTop = value * 1.5 + 'px';
    gabbar.style.marginLeft = value * -2 + 'px';
    img13.style.marginLeft = value * -2 + 'px';
    amitabh.style.marginTop = value * 2 + 'px';
    amitabh.style.marginLeft = value * -1.5 + 'px';
    mughal.style.marginTop = value * -1.5 + 'px';
    img12.style.marginTop = value * -1.5 + 'px';
    img14.style.marginTop = value * -1.5 + 'px';
    amrish.style.marginRight = value * -2 + 'px';
    amrish.style.marginTop = value * 2 + 'px';
    waah.style.marginTop = value * 2 + 'px';
    img11.style.marginTop = value * 2 + 'px';
    img15.style.marginTop = value * 2 + 'px';
    img7.style.marginTop = value * -1.5 + 'px';
    img8.style.marginTop = value * -1.5 + 'px';
    img9.style.marginTop = value * -1.5 + 'px';
    img10.style.marginTop = value * 2 + 'px';
});