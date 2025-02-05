function createTodo(txt) {
    const todo = document.createElement('div');
    todo.className = 'todo';
    todo.textContent = txt;
    todo.onclick = deleteTodo;

    return todo;
}

function newTodo() {
    const txt = prompt('Enter a new todo:');
    
    if (txt === null || txt === '') {
        return;
    }

    const todo = createTodo(txt);
    const list = document.getElementById('ft_list');
    list.appendChild(todo);

    saveTodoCookies();
}

function deleteTodo() {
    if (confirm('Delete this todo?')) {
        this.parentElement.removeChild(this);
    }
}

//I am going to cry

function splitCookies() { // -> {dataname: data, dataname: data}
    const cookies = document.cookie.split(';');
    const result = {};
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        result[cookie[0].trim()] = cookie[1];
    }
    return result;
}

function saveTodoCookies() {
    const todos = [];
    const list = document.getElementById('ft_list').children;
    for (let i = 0; i < list.length; i++) {
        todos.push(list[i].textContent);
    }

    const encodedTodos = btoa(JSON.stringify(todos));   //encode
    document.cookie = 'todos=' + encodedTodos + "; path=/";

}

function loadTodoCookies() {
    const cookies = splitCookies();
    if (cookies.todos) {
        const todos = JSON.parse(atob(cookies.todos));  //decode
        for (let i = 0; i < todos.length; i++) {
            const todo = createTodo(todos[i]);
            document.getElementById('ft_list').appendChild(todo);
        }
    }
}

window.onload = loadTodoCookies;