function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min  = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`

    if(hora >0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(254, 205, 46)'
    }
    else if(hora >=12 && hora <18){
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(247, 141, 0)'
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(43, 42, 42)'
    }

}