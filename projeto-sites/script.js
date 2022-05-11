function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

 var data = new Date()
 var hora = data.getHours()
 var minuto = data.getMinutes()
 var segundo = data.getSeconds()

var hora = 
 var minuto = 40
 var segundo = 238

msg.innerHTML = `Agora são ${hora} Horas ${minuto} minutos e ${segundo} segundos`

if (hora >= 5 && hora <= 12) {
 img.src = 'imagens/manhã.jpg'
 document.body.style.background = '#f4ff8e'

} else if (hora >= 13 && hora <= 18) {
 img.src = 'imagens/tarde.webp'
 document.body.style.background = '#ff7323'
 img.style.width = '425px'
} else {
 img.src = 'imagens/noite.jpg'
 document.body.style.background = '#0b0034'
 img.style.width = '425px'
} 
if (hora >= 5 && hora <= 12) {
var dia = window.document.getElementById('manha')
dia.innerHTML = "bom dia!"

 }
if (hora >= 13 && hora <= 18) {
    var dia = window.document.getElementById('tarde')
    dia.innerHTML = "boa tarde!"
    
}
if (hora >= 18 && hora <= 23) {
    var dia = window.document.getElementById('noite')
    dia.innerHTML = "boa noite!"
}
}