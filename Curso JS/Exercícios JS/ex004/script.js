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
    }else{
        alert('Valor inválido ou já encontra na lista')
    }
    num.value = ''
    num.focus()

}
function finalizar(){
    let lista = valores
    lista = lista.sort()
    menor = lista[0]
    maior = l
    res.innerHTML = `O maior valor  ${maior} e o menor valor é ${menor}`
    
}