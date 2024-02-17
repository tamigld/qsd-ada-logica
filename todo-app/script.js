let listaTarefas = [
    {
        titulo: "Fazer compras de supermercado",
        descricao: "Comprar itens essenciais como leite, pão, frutas e vegetais.",
        prioridade: "Média",
        id: 1,
        status: false
    },
    {
        titulo: "Estudar para o exame de matemática",
        descricao: "Revisar os capítulos de álgebra e geometria para o exame da próxima semana.",
        prioridade: "Alta",
        id: 2,
        status: false
    },
    {
        titulo: "Limpar o banheiro",
        descricao: "Limpar o vaso sanitário, a pia e o chuveiro.",
        prioridade: "Baixa",
        id: 3,
        status: false
    },
    {
        titulo: "Preparar relatório para o trabalho",
        descricao: "Reunir dados e preparar um relatório para a reunião de equipe.",
        prioridade: "Alta",
        id: 4,
        status: false
    },
    {
        titulo: "Fazer exercícios físicos",
        descricao: "Realizar uma sessão de treino cardiovascular e exercícios de força.",
        prioridade: "Média",
        id: 5,
        status: false
    },
    {
        titulo: "Assistir ao novo episódio da série",
        descricao: "Assistir ao último episódio lançado da série favorita.",
        prioridade: "Baixa",
        id: 6,
        status: false
    },
    {
        titulo: "Ligar para o amigo para marcar um encontro",
        descricao: "Entrar em contato com um amigo para marcar um encontro.",
        prioridade: "Média",
        id: 7,
        status: false
    },
    {
        titulo: "Organizar a gaveta de roupas",
        descricao: "Dobrar e organizar roupas na gaveta.",
        prioridade: "Baixa",
        id: 8,
        status: false
    },
    {
        titulo: "Fazer reserva no restaurante para o jantar",
        descricao: "Fazer uma reserva em um restaurante para um jantar especial.",
        prioridade: "Alta",
        id: 9,
        status: false
    },
    {
        titulo: "Estudar vocabulário em inglês",
        descricao: "Revisar o vocabulário em inglês para a aula de conversação.",
        prioridade: "Média",
        id: 10,
        status: false
    },
    {
        titulo: "Passear com o cachorro",
        descricao: "Levar o cachorro para um passeio no parque.",
        prioridade: "Baixa",
        id: 11,
        status: false
    },
    {
        titulo: "Fazer a lista de afazeres da próxima semana",
        descricao: "Organizar as tarefas e compromissos para a próxima semana.",
        prioridade: "Alta",
        id: 12,
        status: false
    }
];

// let listaTarefas = []

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
            id: id,
            status: false
        }

        listaTarefas.push(tarefa)
        listarTarefas()

        let titleInput = document.getElementById("title")
        titleInput.value = ""
        let descInput = document.getElementById("descricao")
        descInput.value = ""
        let escolhas = document.getElementsByName('priority')
        for (i = 0; i < escolhas.length; i++) {
            escolhas[i].checked = false
        }
    }
}

function listarTarefas() {
    let lista = document.getElementById('tbody')

    if (listaTarefas.length !== 0) {
        // se a lista de tarefas for diferente de zero, o bloco abaixo é realizado
        lista.innerHTML = listaTarefas.map((tarefa) => {
            return (
                `<tr id="task-row-${tarefa.id}">
                    <td class="td-title">${tarefa.titulo}</td>
                    <td class="td-prio">${tarefa.prioridade}</td>
                    <td class="td-desc">${tarefa.descricao}</td>
                    <td class="td-action">
                        <label class="container-checkbox">
                            <span class="text-checkbox-${tarefa.id}"> A fazer </span>
                            <input onclick=updateStatus(${tarefa.id}) type="checkbox" name="name-task-${tarefa.id}" id="input-task-${tarefa.id}">
                            <span class="checkmark"></span>
                        </label>
                        <button onclick=editarTarefa(this.id) class="btn-def btn-edit" id="${tarefa.id}">Editar</button>
                        <button onclick=deletarTarefa(this.id) class="btn-def btn-del" id="${tarefa.id}">Excluir</button>
                    </td>
                </tr>`
            )
        }).join('')
    } else {
        // se o a lista de tarefas  for igual a 0, a mensagem é exibida:
        document.getElementById('message').innerText = "Não há tarefas a serem exibidas. Crie alguma! 😜"
    }
}


function updateStatus(id) {
    const showModal = () => {
        let modal = document.getElementById('modal-group-task')
        modal.style.visibility = 'visible'
        modal.style.opacity = '1'
    }
    
    let checkbox = document.querySelector(`input[name="name-task-${id}"]`)
    let taskStatus = document.querySelector(`span.text-checkbox-${id}`)
    
    if (checkbox.checked) {
        setTimeout(() => {
            showModal()
            listaTarefas.find(function (tarefa) {
                if (tarefa.id == id) { 
                    tarefa.status = true;
                    document.getElementById(`task-row-${tarefa.id}`).style.opacity = '0.2'
                    taskStatus.innerText = 'Feito!'
                    document.getElementById('btn-delete-task').addEventListener('click', () => {deletarTarefa})
                }
            });
        }, 600);
    } else {
        listaTarefas.find(function (tarefa) {
            if (tarefa.id == id) {
                tarefa.status = false;
                document.getElementById(`task-row-${tarefa.id}`).style.opacity = '1'
                taskStatus.innerText = 'A fazer'
            }
        });
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
    let modal = document.getElementById("modalGroup")
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'

    let botaoTeste = document.getElementById('button-modal')
    botaoTeste.innerHTML = `<button onclick=atualizarTarefa(${id}) class="btn-def" type="button">Salvar</button>`
}

function atualizarTarefa(id) {
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

    let newTitle = document.getElementById('newTitle').value
    let newDescricao = document.getElementById('newDescricao').value
    let newPrioridade = createOutput()

    if (newTitle) {
        listaTarefas.find(function (tarefa) {
            if (tarefa.id == id) {
                tarefa.titulo = newTitle;
            }
        });
    }

    if (newDescricao) {
        listaTarefas.find(function (tarefa) {
            if (tarefa.id == id) {
                tarefa.descricao = newDescricao;
            }
        });
    }

    if (newPrioridade) {
        listaTarefas.find(function (tarefa) {
            if (tarefa.id == id) {
                tarefa.prioridade = newPrioridade;
            }
        });
    }

    listarTarefas()
    closeModal()
}

function closeModal() {
    let modal = document.getElementById("modalGroup")
    let modalCompleteTask = document.getElementById('modal-group-task')
    
    modalCompleteTask.style.visibility = 'hidden'
    modalCompleteTask.style.opacity = '0'
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'

    // esvaziar inputs do modal ao fechar o mesmo
    document.getElementById("newTitle").value = ""
    document.getElementById("newDescricao").value = ""
    let escolhas = document.getElementsByName('newPriority')
    for (i = 0; i < escolhas.length; i++) {
        escolhas[i].checked = false
    }
}