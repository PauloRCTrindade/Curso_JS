
function enter(){
    var input = (document.getElementById('inicio'))
    var fim = (document.getElementById('fim'))
    var passo = (document.getElementById('passo'))
    var msg = document.getElementById('res')
    
    if(input.value == 0 || fim.value == 0){
        alert('[ERRO] Nenhum campo pode estar vazio')
    }else{
        if(passo.value == 0){
            passo.value = 1
            alert('O campo PASSO não ser prenchido por 0, foi considerado 1 ')

        msg.innerHTML = 'Contando:,<br>'
        var i = Number(input.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        }

        // Contaem crescente
        if(i<f){
            for(var c = i; c <= f; c += p){
                msg.innerHTML +=  `${c} \u{1F603}`
            }
        // contagem decrescente
        }else{
            for(c = i; c>=f; c-= p){
                msg.innerHTML +=  `${c} \u{1F603}`
            }
        
        }
        msg.innerHTML += `\u{1F3C1}`

    }


}


   

