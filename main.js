const inputVal = document.getElementsByClassName('inputVal')[0]
const addTaskBtn = document.getElementsByClassName('btn')[0]

addTaskBtn.addEventListener('click', function(){
    if(inputVal.value !=0 ){

    
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    if(localTasks === null){
        taskList = []
    }else{
        taskList = localTasks;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localTask', JSON.stringify(taskList));
    inputVal.value = '';
}
    showTask()

})  

function showTask(){
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    if(localTasks === null ){
        taskList = []
        
    }else{
        taskList = localTasks;
    }

let html = '';
let taskShow = document.querySelector('.todoLists');
taskList.forEach((data, index)=>{
    html += `
    <div class="todoList">
    <p class="pText">${data}
    <img class="circle-trash" src="trash-solid.svg" onClick="deleteItem(${index})"></img>
    <img class="circle-check" src="circle-check.svg" onClick="checkItem(${index})"></img>
    
    </p>
    </div>
    `
})
taskShow.innerHTML = html;
}
showTask();

function deleteItem(index){
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    taskList.splice(index, 1)
    localStorage.setItem('localTask', JSON.stringify(taskList));
    showTask()
}


function checkItem(index){
    let localTasks = JSON.parse(localStorage.getItem('localTask'))

    let checked = document.getElementsByClassName('pText')[index]

    checked.classList.toggle('checked')
    localStorage.setItem('localTask', JSON.stringify(taskList));

    setTimeout(deleteItem, 3000)
}

function clearTask(){
    localStorage.clear()
    showTask()
}

//MODO ESCURO E MODO CLARO
let body = document.querySelector('body');
let container = document.querySelector('.container');
let btn = document.querySelector('.btn-theme');
btn.onclick = function() {
    body.classList.toggle('light');
    container.classList.toggle('night');
}