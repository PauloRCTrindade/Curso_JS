let num = document.querySelector('input#num')
let select = document.querySelector('select#select')
let res = document.querySelector('div#res')
let valores = []

num.focus()


function adicionar(){

    if(num.value == 0){
        alert('Adicione pelo menor um valor na lista')
    }else{
        
    }

  if(numero(num.value) && !lista(num.value,valores)){
    valores.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado`
    select.appendChild(item)

  }else{
      alert('[ERRO] Esse número já foi adicionado')
  }
num.focus()
num.value = ''
}

function numero(n){
    if(Number(n) >= 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function lista(num,valores){
    if(valores.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }

}


function finalizar(){
    total = valores.length

    if(total == 0){
        alert('Por favor adicione pelo menos um ítem na lista')
    }


    maior = valores[0]
    menor = valores[0]
    soma = 0
    for(let pos in valores){
        soma +=valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]

        if(valores[pos] < menor)
            menor = valores[pos]
        
        
    }

    
        
    
    res.innerHTML = `Temos um total de ${total} valores adicionados na lista`
    res.innerHTML = `Sendo ${menor} o Menor entre eles`
    res.innerHTML = ``
    


}