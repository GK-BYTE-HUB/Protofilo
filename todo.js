
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            toggleTaskCompletion(event.target);
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        todoList.appendChild(taskItem);
    }

    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
