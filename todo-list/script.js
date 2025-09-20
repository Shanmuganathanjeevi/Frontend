const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

if(todos){
    todos.forEach(todo => addTodo(todo));
}

document.addEventListener('submit', (e) => { 
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    // Get todo text from either the parameter or input field
    const todoText = (todo?.text || input.value).trim();
    
    // Early return if no text provided
    if (!todoText) {
        return;
    }

    // Create todo element
    const todoEl = document.createElement('li');
    todoEl.textContent = todoText;
    
    // Set completed state if provided
    if (todo?.completed) {
        todoEl.classList.add('completed');
    }

    // Add click handler to toggle completion
    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        updateUl();
    });

    // Add right-click handler to remove todo
    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
        updateUl();
    });

    // Add to DOM and clear input
    todosUL.appendChild(todoEl);
    input.value = '';
    
    // Update localStorage
    updateUl();
}

function updateUl(){
    const todosLi = document.querySelectorAll('li');

    const todos = [];

    todosLi.forEach(todoLi => {
        todos.push({
            text: todoLi.innerHTML,
            completed: todoLi.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
    
}