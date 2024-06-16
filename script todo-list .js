document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button onclick="removeTodoItem(this)">x</button>
            `;

            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }
});

function removeTodoItem(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}
