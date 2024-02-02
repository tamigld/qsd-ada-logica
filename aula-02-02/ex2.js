// FOR ------

function deUmADez(){
    console.log("Imprimir os números de 1 a 10:")
    for(let contador =1; contador <=10; contador++){
        console.log("Número " + contador)
    }
}

function tabuada(num){
    let num = parseInt(prompt("Digite um número até 10: "))
    
    if(num > 10){
        console.log("Esse número é maior que 10.")
    } else {
        console.log(`Tabuada do número ${num}:`)
        for(let conta = 1; conta <= 10; conta++){
            console.log(`${conta} x ${num} = ${num * conta}`)
        }    
    }
}


// WHILE ------

function somaUmACem(){
    console.log("Calcular a soma dos números de 1 a 100 utilizando a estrutura while")
    let contador = 0
    let soma = 0
    
    while(contador <= 100){
        soma = soma + contador
        contador++
        console.log(soma)
    }
}

function maiorDeIdade(idade){
    let idade = parseInt(prompt("Qual a sua idade: "))
    
    while(idade < 18){
        idade = parseInt(prompt("Qual a sua idade: "))
    }
    console.log(`Sua idade é de ${idade}. Você é maior de idade!`)
}