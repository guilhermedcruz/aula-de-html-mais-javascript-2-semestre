const X_central = document.querySelector('#X_central')
const btBahia = document.querySelector('#btBahia')
const btVitoria = document.querySelector('#btVitoria')
const btRealMadrid = document.querySelector('#btRealMadrid')
const btRoma = document.querySelector('#btRoma')
const btArsenal = document.querySelector('#btArsenal')

//evento

btBahia.addEventListener('click',Bahia)
btVitoria.addEventListener('click',Vitoria)
btRealMadrid.addEventListener('click',RealMadrid)
btRoma.addEventListener('click',Roma)
btArsenal.addEventListener('click',Arsenal)

//função
function Bahia(){
    X_central.src = 'img/ec.bahia.jpg'
}

function Vitoria(){
    X_central.src = 'img/ec.vitoria.png'
}

function RealMadrid(){
    X_central.src = 'img/real madrid.png'
}

function Roma(){
    X_central.src = 'img/roma.jpg'
}

function Arsenal(){
    X_central.src = 'img/arsenal.png'
}