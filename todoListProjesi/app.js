//Elementleri  seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firsCardbody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearBtn.addEventListener("click",clearTodos);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();
    let durum = false;

    if(newTodo === "" ){
        showAlert("danger" , "Lütfen bir todo girin.");
    }
    else{
        let todos = getTodosFromStorage();
        todos.forEach(function(todo){
            if(newTodo === todo){
                durum = true;
              //  showAlert("danger","Bu todo dan zaten 1 tane ekledin.");
              
            }

        });
        if(durum){
            showAlert("danger","Bu todo dan zaten 1 tane ekledin.");
        }
        else{
            addTodoToUI(newTodo);
                addTodoToStorage(newTodo);
                showAlert("success","Todo  başarıyla eklendi.");
        }

    
    }

    e.preventDefault();
}


function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function getTodosFromStorage(){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}


function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);

    todoInput.value = "";
}

function deleteTodo(e){

    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarıyla Silindi.")
    }
    
}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item.d-flex.justify-content-between")

    listItem.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            listItem.setAttribute("style","display: none !important");
        }
        else{
            listItem.setAttribute("style","display : block ");
        }
    })
}

function clearTodos(){
    // Arayüzden todoları Silme
   if(confirm("Tümünü silmek istediğinizden emin misiniz?")){
   // todoList.innerHTML = "";  // Yavaş kullanım
    while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild);
    }
   }

   // Storage dan silme

   localStorage.removeItem("todos");

}

function showAlert(alertType ,mesaj){
    const alert = document.createElement("div")
    alert.className = `alert alert-${alertType}`;
    alert.textContent = mesaj ;

    firsCardbody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },2000);

  /*  <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>*/
}