function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Olá Mundo`
    if(hora >= 0 && hora < 12){
        // Manhã
    } else if(hora >= 12 && hora < 18){
        // Tarde
    } else {
        // Noite
    }
}