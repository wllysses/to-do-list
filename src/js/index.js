let inputAdd = document.getElementById('inputAdd')
let btnAdd = document.getElementById('btn-add')
let taskList = document.querySelector('ul')

//função para adicionar as tarefas
function addTask(input) {
    if(input.value === '') {
        alert('Preencha o campo com alguma tarefa.')
        return
    }
    let task =  `
                       <li class="task"> 
                            
                            <p>${input.value}</p>

                            <button 
                            class="btn-remove"
                            >
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
    let tasks = document.querySelectorAll('p')
    tasks.forEach(task => {
        task.addEventListener('click', (e) => {
            e.target.classList.toggle('taskChecked')
        })
    })
}

function removeTask() {

    // let btnRemove = document.getElementsByClassName("btn-remove");
    // for (let i = 0; i < btnRemove.length; i++) {
    //     btnRemove[i].onclick = function() {
    //         let task = this.parentElement;
    //         console.log(task)
    //     }
    // }

    let btnRemove = document.querySelectorAll('.btn-remove')
    btnRemove.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let task = e.composedPath()[2]
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