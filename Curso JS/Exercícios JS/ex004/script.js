let num = document.getElementById('num')
let select = document.getElementById('sel')
let res = document.querySelector('div#res')
let valores = []
num.focus()

function numeroVerdadeiro(n){
    if(Number(n) >= 1 && Number(n) <=100){
      return true
    }else{
        return false
    }   
}

function lista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
       return false
    }
}

function adicionar(){
    if(numeroVerdadeiro(num.value) && !lista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O Valor ${num.value} foi adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontra na lista')
    }
    num.value = ''
    num.focus()

}
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores')
    }else{

    
        let lista = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        for( let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }
        
        let media = soma / lista
        res.innerHTML = ''
        res.innerHTML = `Você adicionou um total de ${lista} valores <br><br>O maior valor da lista é ${maior} e o menor valor é ${menor}<br><br> A soma entre eles é ${soma}<br><br> A média entre eles é ${media.toFixed(1)}`
    } 
}