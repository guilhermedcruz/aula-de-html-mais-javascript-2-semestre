//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const data = document.querySelector('#data')
const dia = document.querySelector('#Dia')
const mes = document.querySelector('#Mes')
const ano = document.querySelector('#Ano')
const horario = document.querySelector('#Horario')
//eventos
setInterval(painel,1000)


//ação

function painel(){
    hoje = new Date()
    h = hoje.getHours()
    m = hoje.getMinutes()
    s = hoje.getSeconds()
    d = hoje.getDate()
    o = hoje.getMonth() + 1
    a = hoje.getFullYear()





    if(h<10){
        h='0'+h
    }
    if(m<10){
    m='0'+m
    }
    if(s<10){
        s='0'+s
    }
    if(d<10){
        d='0'+d
    }
    if(o<10){
        o='0'+o
    }

    let saudacao = 'BOA NOITE!'
    if(h >= 5 && h <12){
        saudacao = 'BOM DIA!'
    } else if(h >= 12 && h < 18){
        saudacao = 'BOA TARDE!'
    }


    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    data.textContent = `${d}/${o}/${a}`
    dia.textContent = d
    mes.textContent= o
    ano.textContent= a
    horario.textContent = saudacao
}

painel()