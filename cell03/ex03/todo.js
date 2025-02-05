function newTodo() {
    const txt = prompt('Enter a new todo:');
    
    if (txt === null || txt === '') {
        return;
    }
    
    const todo = document.createElement('div');
    todo.className = 'todo';
    const list = document.getElementById('ft_list');
    list.appendChild(todo);

    todo.textContent = txt;
}