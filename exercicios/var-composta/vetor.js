let valores = [8,1,7,4,2,9]
valores.sort()
//console.log(valores)

//normal
console.log('"normal"')

for(let pos=0; pos< valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('simplificado')
//...

for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`) //simplificado
}