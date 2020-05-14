function enter(){
    var num = document.getElementById('valor')
    var tab = document.getElementById('seltabuada')
    if(num.value.length == 0){
        alert(' Por favor digite um número')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(c = 0; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}