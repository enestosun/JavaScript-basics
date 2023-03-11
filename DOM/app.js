// // let value;

// // value = document;
// // value = document.all;



// // const element = document.all;






// // value = document.location;
// // value = document.location.hostname;
// // value = document.location.port;


// // value = document.URL;
// // value = document.characterSet;
// // value = document.scripts;
// // value = document.scripts[0];

// // value = document.links[document.links.length-1].getAttribute("class");
// // value = document.links[document.links.length-1].getAttribute("href");
// // value = document.links[document.links.length-1].className;


// // value = document.forms;
// // value = document.forms.length;


// // value = document.forms["form"];
// // value = document.forms[0];
// // value = document.forms[0].id;
// // value = document.forms[0].name;
// // value = document.forms[0].getAttribute("name");
// // value = document.forms[0].method;






// // console.log(value);


// let value = document.getElementById("todo-form");

// value = document.getElementById("tasks-title");

// value = document.getElementsByClassName("justify-content-between")[0];
// value = document.getElementsByClassName("card-header")[0].textContent;

// value = document.getElementsByTagName("li");
// value = document.getElementsByTagName("div");


// value = document.querySelector("#todo-form");
// value = document.querySelector("#tasks-title");
// value = document.querySelector(".list-group-item");

// value = document.querySelector("li");

// value = document.querySelector("div");

// value = document.querySelectorAll(".list-group-item");

// value.forEach(function(e1){
//     console.log(e1);
// })
    









// //console.log(value);































// const element = document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);



// console.log(element.style);

// element.className = "btn btn-primary";
// element.style.color= "#fff";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

// element.textContent= "Silin";
// element.innerHTML="<span style = 'color:green' >Silin</span>"
// console.log(element.textContent);

// const elements=document.querySelectorAll(".list-group-item");
// elements.forEach(function(e1){
//     e1.style.color="red";
//     e1.style.background = "#eee";
// })

// let element = document.querySelector("li:last-child");

// // element = document.querySelector("li:nth-child(2)");
// // element = document.querySelector("li:nth-child(3)");

// element = document.querySelectorAll("li:nth-child(odd)");
// element = document.querySelectorAll("li:nth-child(even)");

// element.forEach(function(e1){
//     e1.style.background= "#ccc";
//     e1.style.color= "red";
// })

// console.log(elements);






// console.log(element);






























// let value ;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");


// value = todoList;
// value = todo;
// value = cardrow;

// value = todoList.childNodes;
// value = todoList.childNodes[0];

// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[todoList.children.length-1];

// value = todoList.children[2].textContent = "Degisti";

// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "Degisti";


// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.childElementCount;


// value = cardrow;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;


// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling.nextElementSibling;



// console.log(value);


























// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>



// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";
// newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

// cardbody.appendChild(newLink);




// console.log(cardbody);
// console.log(newLink);










































// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");


// // todos[1].remove();

// // todoList.removeChild(todoList.lastElementChild);

// // todoList.removeChild(todos[2]);









// console.log(todoList);
// console.log(todos);






























// const cardbody = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Element";

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement,oldElement);


// console.log(newElement);






















// const todoInput = document.getElementById("todo");
// let element;


// element = todoInput;
// // element = todoInput.classList;
// // todoInput.classList.add("newClass");
// // todoInput.classList.remove("form-control");
// // todoInput.setAttribute("class","new2");


// element = todoInput.placeholder;
// todoInput.setAttribute("placeholder","TODO GİR");
// todoInput.setAttribute("title","Input");

// element =  todoInput.hasAttribute("name");

// todoInput.removeAttribute("name");


// element = todoInput;







// console.log(element);


































































//  EVENTLER  



// const filterInput = document.querySelector("#filter");
// const todoForm = document.querySelector("#todo-form");

// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("Submit eventi");


//     e.preventDefault();
// };


// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
    // console.log("Naber");
//})

// filterInput.onfocus = function(){
//     console.log("Naber");
// }


// console.log(filterInput);





















// KLAVYE EVENTLERİ
//keypress 

// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
//     console.log("Naber");

// }


//keydown
// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
//     console.log("Naber");

// }




// //keyup
// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
//     console.log("Naber");

// }










// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");


// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent = e.target.value;
//     console.log(e.target.value);
// }
























// Mouse Eventi
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");



//Click Event

// title.addEventListener("click",run);

//Double Click Event

// title.addEventListener("dblclick",run);

//Mouse Down Event

// title.addEventListener("mousedown",run);

//Mouse Up

// title.addEventListener("mouseup",run);

//Mouse Over

// title.addEventListener("mouseover",run);

//Mouse out

// title.addEventListener("mouseout",run);





// cardBody.addEventListener("mouseover",run);

// Mouse Enter ve Mouse Leave

// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);


// function run(e){
//     console.log(e.type);
// }






// console.log(title);




























































// Input Event 

const filter = document.querySelector("#filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa Yüklendi")
// }




// Focus

// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);

// Paste 
// filter.addEventListener("paste",run);


//Copy
// filter.addEventListener("copy",run);

// Cut

// filter.addEventListener("cut",run);

//Select 
// filter.addEventListener("select",run);



// function run(e){
//     console.log(e.type);
// }


// console.log(filter);



































// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(e){
//     console.log("Container");
// })

// document.querySelector(".card.row").addEventListener("click",function(e){
//     console.log("Card row");
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(e){
//     console.log("card body");
// })





//  Event Capturing 

// const cardbody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("click",run)


// function run(e){

//     if(e.target.className === "fa fa-remove"){
//         console.log("Sil");
//     }
//     if(e.target.id === "filter"){
//         console.log("filter");
//     }
//     if(e.target.id === "clear-todos"){
//         console.log("tümünü Sil");
//     }
//     // console.log(e.target);
// }

















































