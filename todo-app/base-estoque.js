let estoque = [];

function adicionarProduto() {
    let nome = prompt("Digite o nome do produto: ")
    let preco = prompt("Digite o preço do produto: ")
    let quantidade = parseInt(prompt("Digite quantidade do produto: ").replace(",", "."))

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    estoque.push(produto);

    console.log(`Produto "${nome}" adicionado ao estoque.`);
}

function venderProduto() {
    let nomeProduto = prompt("Digite o nome do produto que deseja vender: ");
    // produto que o usuário deseja

    let produtoEncontrado = false;
    // trigger do produto encontrado

    for (let i = 0; i < estoque.length; i++) {
        // esse for percorre cada objeto do array do estoque o procura correspondência do q o usuário digitou pra o que tem no estoque
        if (estoque[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {
            // se o nome do item do estoque for igual ao nome do produto (fornecido pelo user), o bloco de código abaixo é realizado
            produtoEncontrado = true;
            // trigger do produto encontrado para verdadeiro

            let quantidadeVendida = parseInt(prompt(`Digite a quantidade de "${nomeProduto}" que deseja vender:`));
            // usuário insere a quantidade que quer vender

            if (quantidadeVendida > 0 && quantidadeVendida <= estoque[i].quantidade) {
                // se a quantidade vendida for MAIOR que zerio e MENOR OU IGUAL a quantidade disponível lá no estoque, o bloco de código é realizado
                estoque[i].quantidade -= quantidadeVendida;
                // retirada a quantidade que o usuário digitou do estoque original
                console.log(`Venda realizada: ${quantidadeVendida} unidades de "${nomeProduto}" vendidas.`);
                console.log(`Quantidade restante em estoque: ${estoque[i].quantidade}`);
            } else {
                // se for um número inválido ou maior que o disponível que o estoque, essa mensagem é disparada:
                console.log(`Quantidade inválida ou insuficiente em estoque. Tente novamente`);
            }
        }
    }

    if (!produtoEncontrado) {
        // se o trigger do produto continuar false depois do for, esse bloco é realizado
        console.log(`Produto "${nomeProduto}" não encontrado no estoque.`);
    }
}

function exibirEstoque() {
    if(estoque.length !== 0){
        // se o estoque for diferente de zero, o bloco abaixo é realizado
        for (i = 0; i < estoque.length; i++) {
            // para cada objeto do array estoque, é exibida uma tabela
            console.table(estoque[i])
        }
    
        function calcularTotal() {
            // calcula o total do estoque
            let total = 0;
    
            for (let i = 0; i < estoque.length; i++) {
                total += estoque[i].preco * estoque[i].quantidade;
            }
    
            return total;
        }
    
        let totalEstoque = calcularTotal();
        console.log(`O preço total do estoque é: R$${totalEstoque.toFixed(2)}`);
    } else {
        // se o estoque for igual a 0, a mensagem é exibida:
        alert("Não há estoque disponível para consulta.")
    }
}

