// Local Storage

//SetItem

// localStorage.setItem("hareket","kosu");

// // Get Item

// // const value = localStorage.getItem("hareket");


// // console.log(value);
// // console.log(typeof value);

// // Cleear Local Storage

// localStorage.clear();



// localStorage.setItem("hareket","kosu");



// local Storage a Array yazma

// const todos = ["Todo1","Todo2","Todo3"];

// // localStorage.setItem("todos",JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);





const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");


form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));




    e.preventDefault();
}

// console.log(todoInput);





















