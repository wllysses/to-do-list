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
                        <input type="checkbox" onclick="checkTask()" id="check">
                        <p>${input.value}</p>
                        <input type="date" name="taskDate" id="taskDate">
                        <button class="btn-remove">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>
                `
    
    document.querySelector('ul').innerHTML += task
    input.value = ''

    checado = false
    //checkTask()
    removeTask()

}

function checkTask() {
    debugger
    if(document.getElementById('check').checked){
        let tasks = document.querySelectorAll('p')
        tasks.forEach(task => {
            task.classList.toggle('taskChecked')
        })
    } else {
        let tasks = document.querySelectorAll('p')
        tasks.forEach(task => {
            task.classList.toggle('taskUnchecked')
        
        })
    }
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