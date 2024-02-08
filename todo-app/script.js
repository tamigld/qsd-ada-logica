let listaTarefas = [
    {
        titulo: "Agendar médico",
        descricao: "Preciso agendar o médico para não esquecer, super importante!",
        prioridade: "Alta",
        id: 0
    }
];

listarTarefas()

function adicionarTarefa() {
    let titulo = document.getElementById("title").value
    let descricao = document.getElementById("descricao").value
    const id = (listaTarefas[listaTarefas.length - 1].id) + 1

    function createOutput() {
        var prioridade;
        if (document.getElementById('low').checked == true) {
            prioridade = "Baixa";
        } else if (document.getElementById('medium').checked == true) {
            prioridade = "Média";
        } else if (document.getElementById('high').checked == true) {
            prioridade = "Alta";
        }
        return prioridade
    }

    let prioridade = createOutput()

    const validation = (valor, valor2) => {
        let message = document.getElementById('message-error')
        if (!valor || !valor2) {
            message.innerHTML = "Preencha os campos."
            return false
        } else if (valor && valor2) {
            message.innerHTML = ""
            return true
        }
    }

    if (validation(titulo, prioridade) == true) {
        const tarefa = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            id: id
        }

        listaTarefas.push(tarefa)
        listarTarefas()
    }

}

function listarTarefas() {
    let lista = document.getElementById('tbody')

    if (listaTarefas.length !== 0) {
        // se a lista de tarefas for diferente de zero, o bloco abaixo é realizado
        lista.innerHTML = listaTarefas.map((tarefa) => {
            return (
                `<tr>
                        <td>${tarefa.id}</td>
                        <td>${tarefa.titulo}</td>
                        <td id="td-p">${tarefa.prioridade}</td>
                        <td class="td-action">
                            <button class="btn-def">Descrição</button>
                            <button onclick=editarTarefa(this.id) class="btn-def btn-edit" id="${tarefa.id}">Editar</button>
                            <button onclick=excluirTarefa(this.id) class="btn-def btn-del" id="${tarefa.id}">Excluir</button>
                        </td>
                    </tr>`
            )
        }).join('')
    } else {
        // se o a lista de tarefas  for igual a 0, a mensagem é exibida:
        document.getElementById('message').innerHTML = "Não há tarefas a serem exibidas!"
    }
}

function excluirTarefa(id) {
    listaTarefas.splice(id, 1)
    listarTarefas()
}


