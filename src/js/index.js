let inputAdd = document.getElementById('inputAdd')
let btnAdd = document.getElementById('btn-add')


//função para adicionar as tarefas
function addTask(input) {
    if(input.value === '') {
        alert('Preencha o campo com alguma tarefa.')
        return
    }
    let task =  `
                    <li class="task">
                        <div class="check">
                            <input type="checkbox" id="check">
                            <p>${input.value}</p>
                        </div>
                        <input type="date" name="taskDate" id="taskDate">
                        <button class="btn-remove">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>
                `
    
    document.querySelector('ul').innerHTML += task
    input.value = ''

    checkTask()
    removeTask()
}

function checkTask() {
    let checkBox = document.querySelectorAll('#check')
    checkBox.forEach(check => {
        check.addEventListener('click', (e) => {
            let taskText = e.target.nextElementSibling
            if(check.checked) {
                taskText.classList.add('taskChecked')
            } else {
                taskText.classList.remove('taskChecked')
            }
        })
    })
}  

function removeTask() {
    let btnRemove = document.querySelectorAll('.btn-remove')
    btnRemove.forEach(btn => {
        btn.addEventListener('click', () => {
            let task = btn.parentElement
            task.remove()
        })
    })
}

btnAdd.addEventListener('click', () => {
    addTask(inputAdd)
})

inputAdd.addEventListener('keyup', (e) => {
    let keyEnter = e.which || e.keyCode

    if(keyEnter == 13) {
        addTask(inputAdd)
    }
})