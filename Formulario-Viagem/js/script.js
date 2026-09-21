const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const Preco = document.querySelector('#Preco')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

btn.addEventListener("click", Calcular)
function Calcular(){
n1 =Number(distancia.value)
n2 =Number(consumo.value)
n3 =Number(Preco.value)

Formula = (n1/n2)
F = Formula * n3

resultado.textContent=`Sua Viagem saira por:${F.toFixed(2)}`

}