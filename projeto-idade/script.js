function verificar() {
    let data = new Date() 
        let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //formulario ano
    let res = document.querySelector('div#res')
    if (fano <= 1900 || fano < ano) {
        window.alert('Verifique os dados e tente novamente!')
    } 
    }