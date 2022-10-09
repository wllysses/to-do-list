let inputAdd = document.getElementById('inputAdd')
let btnAdd = document.getElementById('btn-add')

//função para adicionar as tarefas
function addTask(input) {
    if(input.value === '') {
        alert('Preencha o campo com alguma tarefa.')
        return
    }
    let task = document.createElement('li');
    task.classList.add('task')
    task.setAttribute('state', 'pending')
    task.innerHTML = `
                    <div class="check">
                        <input title="Marcar ou desmarcar como concluída" type="checkbox" onClick="checkTask(this)">
                        <p title="${input.value}">${input.value}</p>
                    </div>
                    <div class="buttons">
                        <input title="Adicione uma data limite para a tarefa" type="date" name="taskDate" class="taskDate" onChange="changeDate(this)">
                        <button title="Remover a tarefa" class="btn-remove" onClick="removeTask(this)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    `
    
    let taskList = document.querySelector('.todoResult')
    taskList.appendChild(task)
    taskList.style.maxHeight = `${taskList.children.length * 47.5 + 20}px`
    input.value = ''
}

//função para marcar as tarefas como concluidas
function checkTask(check) {
    const task = check.closest('.task')
    const taskDateInput = task.querySelector('.taskDate')
    let taskText = check.nextElementSibling

    if(check.checked) {
        taskText.classList.add('taskChecked')
        check.setAttribute('checked', 'checked')
        taskDateInput.disabled = true
    } else {
        taskText.classList.remove('taskChecked')
        check.removeAttribute('checked')
        taskDateInput.disabled = false
    }

    verifyAttribute(task)
}

//função para remover tarefas
function removeTask(button) {
    let task = button.closest('.task')
    let taskList = document.querySelector('.todoResult')

    task.style.opacity = '0'
    task.addEventListener('transitionend', () => {
        task.remove()
        taskList.style.maxHeight = `${taskList.children.length * 47.5 + 20}px`
    })
}

//função para alterar data limite
function changeDate(input) {
    const task = input.closest('.task')

    verifyAttribute(task)
}

function verifyAttribute(task) {
    const isChecked = task.querySelector('input[type="checkbox"]').checked
    const taskDate = task.querySelector('.taskDate').value
    const taskDateFormatted = new Date(taskDate).getTime()
    const today = new Date().getTime()

    if (isChecked) {
        task.setAttribute('state', 'done')
    }
    else if (taskDateFormatted < today) {
        task.setAttribute('state', 'late')
    }
    else {
        task.setAttribute('state', 'pending')
    }
}

//evento no botão para adicionar as tarefas
btnAdd.addEventListener('click', () => {
    addTask(inputAdd)
})

//evento para adicionar as tarefas ao apertar a tecla ENTER
inputAdd.addEventListener('keyup', (e) => {
    let keyEnter = e.which || e.keyCode

    if(keyEnter == 13) {
        addTask(inputAdd)
    }
})