let a = parseInt(prompt("Digite o primeiro número:"))
let b = parseInt(prompt("Digite o segundo número:"))
let escolha = parseInt(prompt("Digite o número da operação desejada.\n 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão."))


switch(escolha){
    case 1:
        console.log(a + b)
        break
    case 2:
        console.log(a - b)
        break
    case 3:
        console.log(a * b)
        break
    case 4:
        console.log(a / b)
        break
    default:
        alert("Digite um número!")
}