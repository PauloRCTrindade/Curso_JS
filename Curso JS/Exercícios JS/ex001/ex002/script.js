function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <12){
                img.setAttribute('src','foto-menino.png')
            }
            else if( idade <18){
                img.setAttribute('src','foto-jovemmenino.png')
            }
            else if(idade <60){
                img.setAttribute('src','foto-homem.png')
            } else{
                img.setAttribute('src','foto-senhor.png')
            }


        }else{
            genero = 'Mulher'
            if(idade >=0 && idade <12){
                img.setAttribute('src','foto-menina.png')
            }
            else if( idade <18){
                img.setAttribute('src','foto-jovemmenina.png')
            }
            else if(idade <60){
                img.setAttribute('src','foto-mulher.png')
            } else{
                img.setAttribute('src','foto-senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}