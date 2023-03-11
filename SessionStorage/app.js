// SESSİON STORAGE  -  KEY ve VALUE


// Butonları secelim

const btnAdd = document.querySelector("#add");
const btnDel = document.querySelector("#delete");
const btnClear= document.querySelector("#clear");


// Inputları secelim

const keyInput = document.querySelector("#addkey")
const valueInput = document.querySelector("#addvalue")
const delKeyInput = document.querySelector("#deletekey")



btnAdd.addEventListener("click",addItem);
btnDel.addEventListener("click",delItem);
btnClear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(keyInput.value,valueInput.value);

}

function delItem(e){
    sessionStorage.removeItem(delKeyInput.value);
    
}

function clearItem(e){
    sessionStorage.clear();
    
}