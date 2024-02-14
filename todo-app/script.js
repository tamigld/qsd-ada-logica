// let listaTarefas = [
//     {
//         titulo: "Agendar médico",
//         descricao: "Preciso agendar o médico para não esquecer, super importante!",
//         prioridade: "Alta",
//         id: 1
//     }
// ];

let listaTarefas = []

listarTarefas()

function adicionarTarefa() {
    let titulo = document.getElementById("title").value
    let descricao = document.getElementById("descricao").value
    const id = listaTarefas.length + 1

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
                `<td id="message" colspan="4"></td>
                <tr>
                        <td>${tarefa.titulo}</td>
                        <td>${tarefa.prioridade}</td>
                        <td>${tarefa.descricao}</td>
                        <td class="td-action">
                            <button onclick=mostrarDescricao(this.id) class="btn-def" id="${tarefa.id}">Descrição</button>
                            <button onclick=editarTarefa(this.id) class="btn-def btn-edit" id="${tarefa.id}">Editar</button>
                            <button onclick=deletarTarefa(this.id) class="btn-def btn-del" id="${tarefa.id}">Excluir</button>
                        </td>
                    </tr>`
            )
        }).join('')
    } else {
        // se o a lista de tarefas  for igual a 0, a mensagem é exibida:
        document.getElementById('message').innerText = "Não há tarefas a serem exibidas!"
    }
}


function deletarTarefa(id) {
    let idAchado = id
    listaTarefas.splice(listaTarefas.findIndex(({ id }) => id == idAchado), 1);

    if (listaTarefas < 1) {
        location.reload()
    } else {
        listarTarefas()
    }
}


function editarTarefa(id) {
    

    const retornarId = () => {
        const idRetornado = id
        console.log(idRetornado)
    
        let modal = document.getElementById("modalGroup")
        modal.style.visibility = 'visible'
        modal.style.opacity = '1'
    
        return idRetornado
    }

    let idBosta = retornarId()

    function createOutput() {
        var prioridade;
        if (document.getElementById('newLow').checked == true) {
            prioridade = "Baixa";
        } else if (document.getElementById('newMedium').checked == true) {
            prioridade = "Média";
        } else if (document.getElementById('newHigh').checked == true) {
            prioridade = "Alta";
        }
        return prioridade
    }

    let newTitle = document.getElementById("newTitle").value
    let newDescricao = document.getElementById("newDescricao").value
    let newPrioridade = createOutput()

    listaTarefas.find(function (tarefa) {
        if (tarefa.id === idBosta) {
            tarefa.titulo = "Karthik";
            tarefa.descricao = "Karthik";
            tarefa.prioridade = "Karthik";
        }
    });


    // listaTarefas[0].titulo = newTitle;
    // listaTarefas[0].descricao = newDescricao;
    // listaTarefas[0].prioridade = newPrioridade;

    listarTarefas()
}

function atualizar() {
    console.log(listaTarefas)
}

function closeModal() {
    let modal = document.getElementById("modalGroup")
    let modalDescricao = document.getElementById("modalGroup-descricao")
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
    modalDescricao.style.visibility = 'hidden'
    modalDescricao.style.opacity = '0'
}