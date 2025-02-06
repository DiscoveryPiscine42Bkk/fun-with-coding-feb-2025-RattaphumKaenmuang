$(document).ready(function() {
    function createTodo(txt) {
        const todo = $('<div></div>')
                        .addClass('todo')    
                        .text(txt)
                        .click(deleteTodo);
        return todo;
    }

    function newTodo() {
        const txt = prompt('Enter a new todo:');
        
        if (txt === null || txt === '') {
            return;
        }

        const todo = createTodo(txt);
        $('#ft_list').append(todo);

        saveTodoCookies();
    }

    function deleteTodo() {
        if (confirm('Delete this todo?')) {
            $(this).remove();
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
        $('#ft_list').children().each(function() {
            todos.push($(this).text());
        });

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
                $('#ft_list').append(todo);
            }
        }
    }

    loadTodoCookies();
    $('#new_todo_button').click(newTodo);
});