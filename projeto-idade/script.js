function verificar() {
    let data = new Date() 
        let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //formulario ano
    let res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('ERRO! verifique os dados')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
            img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
               
            } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'imagens/foto-jovem-m.png',)
                    
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/foto-adulto-m.png')
            } else {
                    //idoso
                    img.setAttribute('src','imagens/foto-idoso-m.png')
                    
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade <10) {
                //criança
            } else if (idade < 21) {
                    //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                    //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    } 
    