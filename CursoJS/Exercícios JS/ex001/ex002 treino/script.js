function verifica(){
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var input = document.getElementById('txt')
    var idade = anoAtual - Number(input.value)
    var msg = document.getElementById('res')
    
    if(input.value == 0 || input.value > anoAtual){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id','foto')   
        if(sex[0].checked){
            
            if(idade >0 && idade <=12){
                genero = 'Um Menino'
                img.setAttribute('src','foto-menino2.png')
            }else if(idade <18){
                genero = 'Um Jovem'
                img.setAttribute('src','foto-jovemmenino.png')
            }else if(idade <=50){
                genero = 'Um Homem'
                img.setAttribute('src','foto-homem.png')
            }else{
                genero = 'Um Idoso'
                img.setAttribute('src','foto-senhor.png')
            }
            msg.innerHTML = `Detectamos ${genero} de ${idade} anos `
        }else{
            if(idade >0 && idade <=12){
                genero = 'Uma Mnenina'
                img.setAttribute('src','foto-menina.png')
            }else if(idade <18){
                genero = 'Uma Jovem'
                img.setAttribute('src','foto-jovemmenina.png')
            }else if(idade <=50){
                genero = 'Uma Mulher'
                img.setAttribute('src','foto-mulher.png')
            }else{
                genero = 'Uma senhora'
                img.setAttribute('src','foto-senhora.png')
            }
            msg.innerHTML = `Detectamos ${genero} de ${idade} anos `
        }
        
        msg.style.textAlign = 'center'
        msg.appendChild(img)

    }
}