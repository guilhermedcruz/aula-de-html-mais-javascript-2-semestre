//DOM
const alvo = document.querySelector('#alvo')
const btyamal = document.querySelector('#bt1')
const btCR7 = document.querySelector('#bt2')
const btMessi = document.querySelector('#bt3')

//eventos
btyamal.addEventListener('click', yamal)
btCR7.addEventListener('click', CR7)
btMessi.addEventListener('click', Messi)

//ação
function yamal(){
    alvo.src = 'img/lamine_yamal.jpg'
}

function CR7(){
    alvo.src = 'img/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_(cropped).jpg'
}

function Messi(){
    
    alvo.src = 'img/Lionel_Messi_Argentina_v_Egypt_7_July_2026-112(cropped).jpg'

}