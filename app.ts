import { addTask } from "./TodoRender";

window.onload = function(){
    //HTMLInput Element for Task and description
    let addButton = <HTMLInputElement>document.querySelector("#addTask");
    let taskName = <HTMLInputElement>document.querySelector("#taskName");
    let todoList = <HTMLInputElement>document.querySelector("#todo-list");
    
    // added a event listner for add click
    addButton.addEventListener('click', () => addTask(taskName, todoList));    
}