// função composta

// const funcaoComposta = (funcao01, funcao02) => function(){
//     return funcao02(funcao01(...arguments))
// }

// const arrendondamento = funcaoComposta(parseFloat, Math.round)

// console.log(arrendondamento("10.5"))



// // função de alta

// const processarArray = (funcaoDeProcessamento, array) => {
//     const resultado = []
//     array.forEach(element => {
//         resultado.push(funcaoDeProcessamento(element))  
//     })
//     return resultado
// }

// const dobrarValor = (valor) => {
//     return valor * 2
// }

// const quadradoDoValor = (valor) => {
//     return valor * valor
// }

// -------------------

const alunos = [
    {nome: 'Patrícia', idade: 20},
    {nome: 'Guilherme', idade: 24},
    {nome: 'João', idade: 23},
    {nome: 'Sophia', idade: 22}
]

const filtrarAlunos = (array, filtro) => {
    return array.filter(filtro)
}

const filtroMaiorQue20 = (aluno) => {
    return aluno.idade > 20
}

console.log(filtrarAlunos(alunos, filtroMaiorQue20))