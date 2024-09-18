const take = document.querySelector('.textarea')
const btn = document.querySelector('.btninput')
const list = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    add() 
}

// adding todoList
function add() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = take.value
    itemall.appendChild(item)

    if (take.value === '' || take.value===' ') {
        return alert("NO TASK TO ADD")

    }


    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    list.appendChild(itemall)
    take.value = ''
}

// checking and delete todoList 
function del(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

btn.addEventListener('click', clickButton)
list.addEventListener('click', del)