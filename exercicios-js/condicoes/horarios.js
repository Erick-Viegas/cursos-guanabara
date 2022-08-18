var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()


console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos`)

if (hora <= 12 && hora >= 5) {
    console.log('Bom dia!')
} else if (hora < 18 && hora > 12) {
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora <= 24) {
    console.log('boa noite')
} else if (hora >= 0 && hora <= 4) {
    console.log('Boa madrugada')
}
  else if (hora >= 25) {
    console.log('esse valor não existe no ciclo horário.')
} 