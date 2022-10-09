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
                        <input type="checkbox">
                        <p>${input.value}</p>
                    </div>
                    <div class="buttons">
                        <input type="date" name="taskDate" class="taskDate">
                        <button class="btn-remove">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    `
    
    document.querySelector('.todoResult').appendChild(task)
    input.value = ''

    checkTask()
    removeTask()
}

//função para marcar as tarefas como concluidas
function checkTask() {
    let checkBox = document.querySelectorAll('.check > input')
    checkBox.forEach(check => {
        console.log(check)
        check.addEventListener('click', (e) => {
            let taskText = e.target.nextElementSibling
            if(check.checked) {
                taskText.classList.add('taskChecked')
                check.setAttribute('checked', 'checked')
            } else {
                taskText.classList.remove('taskChecked')
                check.removeAttribute('checked')
            }
        })
    })
}

//função para remover tarefas
function removeTask() {
    let btnRemove = document.querySelectorAll('.btn-remove')
    btnRemove.forEach(btn => {
        btn.addEventListener('click', () => {
            let task = btn.closest('li')
            task.remove()
        })
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