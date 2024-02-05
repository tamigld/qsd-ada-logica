//  Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido 
// e continue pedindo até que o usuário informe um valor válido.

function ex01() {
    let nota = parseInt(prompt("Digite um número entre 0 e 10."))

    while (nota < 0 || nota > 10) {
        alert("Esse não é um número válido! Tente novamente.")
        nota = parseInt(prompt("Digite um número entre 0 e 10."))
    }
}

// Faça um programa que leia um nome de usuário e a sua senha e não 
// aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

function ex02() {
    let user = prompt("Digite o nome de usuário.")
    let password = prompt("Digite a senha.")

    while (user === password) {
        alert("Dados não podem ser iguais, tente novamente.")

        user = prompt("Digite o nome de usuário.")
        password = prompt("Digite a senha.")
    }
    alert("Dados corretos!")

}

// Faça um programa que leia 5 números e informe o maior número

function ex03() {
    let numeros = []

    numeros[0] = parseInt(prompt("Digite o primeiro número."))
    numeros[1] = parseInt(prompt("Digite o segundo número."))
    numeros[2] = parseInt(prompt("Digite o terceiro número."))
    numeros[3] = parseInt(prompt("Digite o quarto número."))
    numeros[4] = parseInt(prompt("Digite o quinto número."))

    alert(`Números informados: ${numeros.join(", ")}\nMaior número: ${Math.max.apply(null, numeros)}`)

    // .max retorna NaN com array, apply() permite que você chame uma função com um determinado valor e argumentos fornecidos como um array
}

// Faça um programa que leia 5 números e informe a soma e a média dos números.

function ex04() {
    let numeros = []
    let soma = 0

    numeros[0] = parseInt(prompt("Digite o primeiro número."))
    numeros[1] = parseInt(prompt("Digite o segundo número."))
    numeros[2] = parseInt(prompt("Digite o terceiro número."))
    numeros[3] = parseInt(prompt("Digite o quarto número."))
    numeros[4] = parseInt(prompt("Digite o quinto número."))

    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    let media = soma / numeros.length

    alert(`Os números digitados são: ${numeros.join(", ")}\nA soma dos números é: ${soma}\nE a média dos números é: ${media}`)
}

// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.

function ex05() {
    let numero = parseInt(prompt("Digite um número inteiro: "));
    let primo;

    // verificar se o número é primo
    if (numero <= 1) {
        primo = false;
    } else {
        // A regra matemática diz que se nenhum número possuir um divisor até a raiz quadrada dele, então é um número primo
        for (i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
            } else {
                primo = true;
            }
        }
    }

    // Verificar se o número é primo ou não
    if (primo) {
        alert(numero + " é um número primo.");
    } else {
        alert(numero + " não é um número primo.");
    }
}

// Crie um programa de cálculo dos números primos, informando, caso o número não seja primo, 
// por quais número ele é divisível.

function ex06() {
    let num = parseInt(prompt("Digite um número inteiro:"));
    let primo = true;
    let divisiveis = [];

    if (num <= 1) {
        primo = false;
    } else {

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primo = false;
                divisiveis.push(i);
            }
        }
    }

    if (primo) {
        alert(num + " é um número primo.");
    } else {
        alert(num + " não é um número primo. Divisível por: " + divisiveis.join(', '));
    }
}