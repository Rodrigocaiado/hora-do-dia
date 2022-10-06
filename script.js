function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Olá Mundo`
    if(hora >= 5 && hora < 12){
        // Manhã
        msg.innerHTML = `Bom dia... Agora são ${hora} horas.`
        foto.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18){
        // Tarde
        msg.innerHTML = `Boa tarde... Agora são ${hora} horas.`
        foto.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else if(hora > 18 && hora <= 23){
        // Noite
        msg.innerHTML = `Boa noite... Agora são ${hora} horas.`
        foto.src = 'noite.png'
        document.body.style.background = '#515154'
    } else {
        // Madrugada
        msg.innerHTML = `Boa Madrugada... Agora são ${hora} horas.`
        foto.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}