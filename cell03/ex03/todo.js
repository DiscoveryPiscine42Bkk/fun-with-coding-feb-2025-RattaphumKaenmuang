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
        saveTodoCookies();
    }
}

//I am going to cry

function splitCookies() { // -> {dataname: data, dataname: data} (encoded)
    const cookies = document.cookie.split(';');
    const result = {};
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        result[cookie[0].trim()] = cookie[1];
    }
    return result;
}

// I was going to make it return just todos but I might as well make it universal.
function decodeCookies(cookies) { // -> {dataname: data, dataname: data} (decoded)
    const decodedCookies = {};
    for (const key in cookies) {
        try {
            decodedCookies[key] = JSON.parse(atob(cookies[key])); //decode
        } catch (e) {
            decodedCookies[key] = cookies[key];
        }
    }
    return decodedCookies;
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
    const undecoded_cookies = splitCookies();
    const cookies = decodeCookies(undecoded_cookies);
    if (cookies.todos) {
        const todos = cookies.todos;
        for (let i = 0; i < todos.length; i++) {
            const todo = createTodo(todos[i]);
            document.getElementById('ft_list').appendChild(todo);
        }
    }
}

window.onload = loadTodoCookies;