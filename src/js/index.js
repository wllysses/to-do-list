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
    task.innerHTML = `
                    <div class="check">
                        <input type="checkbox" onClick="checkTask(this)">
                        <p>${input.value}</p>
                    </div>
                    <div class="buttons">
                        <input type="date" name="taskDate" class="taskDate">
                        <button class="btn-remove" onClick="removeTask(this)">
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
    let taskText = check.nextElementSibling
    if(check.checked) {
        taskText.classList.add('taskChecked')
        check.setAttribute('checked', 'checked')
    } else {
        taskText.classList.remove('taskChecked')
        check.removeAttribute('checked')
    }
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