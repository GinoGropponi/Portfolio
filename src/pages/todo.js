import "./todo.scss";

//selectors
const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');
const filterOption = document.querySelector('.filterTodo')



//event listeners

document.addEventListener('DOMcontentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event) {
    event.preventDefault();

    //crea todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //crea li
    const newTodo = document.createElement('li');
    if (todoInput.value == "") return;
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo);
    //guardar en local storage
    saveLocalTodos(todoInput.value);
    //crea checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completedButton');
    todoDiv.appendChild(completedButton);
    //crea delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteButton');
    todoDiv.appendChild(deleteButton);
    //apend to list
    todoList.appendChild(todoDiv);
    //limpiar el input
    todoInput.value = "";
}
//delete and check buttons

function deleteCheck(e) {
    console.log(e.target);

    const item = e.target;

    if (item.classList[0] === 'deleteButton') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })


    }
    if (item.classList[0] === 'completedButton') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }

}

//filtrado loco random

function filterTodo(e) {
    const todos = todoList.children;
    console.log(todos);
    for (const todo of todos) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    }

}

function saveLocalTodos(todo) {
    //checkeamos si ya hay algo guardado
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    //checkeamos si ya hay algo guardado
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    for (const todo of todos) {
        //crea todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //crea li
        const newTodo = document.createElement('li');
        if (todoInput.value == "") return;
        newTodo.innerText = todo;
        newTodo.classList.add('todoItem');
        todoDiv.appendChild(newTodo);
        //crea checkmark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('completedButton');
        todoDiv.appendChild(completedButton);
        //crea delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('deleteButton');
        todoDiv.appendChild(deleteButton);
        //apend to list
        todoList.appendChild(todoDiv);

    };


}
