console.log()
console.log("Perigo!, um asteroide enorme esta a caminho da terra e só voce descobriu, \nVoce precisa resolver os prolemas para descobrir como evita-lo, \nAssim que resolver deve ser enviado a Nasa!")
console.log("---------------------------------------------------------")
let contador = 0
const prompt = require('prompt-sync')();
console.log("Responda corretamente as perguntas do detector!");
console.log("---------------------------------------------------------")
console.log("detector informa: Asteroide esta 31000km ha 1000km por hora")
let a = prompt("confirma que ele chegara em 31 horas? s/n: ").toLowerCase();
console.log()
console.log('detector informa: irá  atingir entre honduras e costa rica')
console.log('Dica: o país começa com G')
let b = prompt("o País atingido seria Gana? s/n: ").toLowerCase();
console.log()
console.log('Detector informa: a Nasa tomara as providencias')
let c = prompt("Deseja informar a nasa? s/n: ").toLowerCase();
console.log()
console.log('o numero da nasa é esta entre 359-999 e 360-001')
let d = prompt(" O numero a discar é 359-000? s/n: ").toLowerCase();
console.log()
console.log('detector informa: NASA questiona!')
let e = prompt("Essas informações estão corretas ? s/n: ").toLowerCase();
console.log("--------------------------------------------------------")
console.log('NASA: ok vamos confirmar')
console.log("--------------------------------------------------------")

if (a === "s"){
    contador += 1
}else{
    contador += 0
}if (b === "n"){
    contador += 1
}else{
    contador += 0
}if (c === "s"){
    contador += 1
}else{
    contador += 0
}if (d === "n"){
    contador += 1
}else{
    contador += 0
}if (e === "s"){
    contador += 1
}else{
    contador += 0
}
//contador /////////
if(contador === 0){
    console.log("NASA: Voce falhou! não localizamos")
    console.log(`Acertou: ${contador}, respostas`)
}else if (contador === 1 && 2){
    console.log("NASA: Voce quase conseguiu! não foi confirmado")
    console.log(`Acertou: ${contador}, respostas`)
}else if( contador === 3 && 4){
    console.log("NASA: Voce falhou por pouco! porem nos ajudou")
    console.log(`Acertou: ${contador}, respostas`)
}else{
    console.log(`NASA: Voce obteve sucesso`)
    console.log(`Acertou: ${contador}, respostas`)
}console.log()