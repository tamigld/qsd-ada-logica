let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o último número:"));

let soma = 0;
let cont = numero1;

while (cont <= numero2) {
    if (cont % 2 === 0) {
        soma += cont;
        console.log(cont)
    }
    cont++;
}

alert(`A soma dos números pares entre ${numero1} e ${numero2} é de: ${soma}`)