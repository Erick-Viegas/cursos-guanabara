 let num  = [5,8,2,9,3]
 
 // coloca em ordem
num.push(1) //ordem influencia

console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(num[1])
 let pos = num.indexOf(8)

 if (pos == -1) {
     console.log('O valor não foi encontrado')
 } else {
    console.log(`O valor 8 está na posição ${pos}`)
 }

