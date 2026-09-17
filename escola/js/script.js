const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const btn = document.querySelector('#btn')
const media = document.querySelector('#media')
const resultado = document.querySelector('#resultado')

btn.addEventListener("click",calcular)


function calcular(){
    n1 =Number(nota1.value)
    n2 =Number(nota2.value)
    n3 =Number(nota3.value)

    soma = n1 + n2 + n3
    m = soma / 3
    if (m >= 7){
        resultado.textContent="Situação:Aprovado"
    }else if(m <= 6.9 && m >=3){
        resultado.textContent="Situação:Recuperação"
    }else{
        resultado.textContent="Situação:Reprovado"
    }
    media.textContent=`Sua media é:${m.toFixed(1)}`
}