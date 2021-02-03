import { Task } from "./model/Task";
import { TodoList } from "./TaskHandler"



export function addTask(taskName1: HTMLInputElement, todoList: Element) {
    let todo = new TodoList();
    let taskName = taskName1.value;
   
    let task = todo.addTask(taskName);
    
    let taskTemplate = <HTMLInputElement>document.querySelector("#taskTemplate")?.cloneNode(true);
    taskTemplate.removeAttribute('id');
    taskTemplate.classList.remove("d-none");
    let remove = <HTMLInputElement> taskTemplate.querySelector(".remove");
    let done = <HTMLInputElement> taskTemplate.querySelector(".done");

    done?.addEventListener('click', (event) => {
        let lable = taskTemplate.querySelector(".taskName");
        if(done.checked) {
            lable?.classList.add("completed");
            todo.completeTask(task.id, true);
        }
        else {
            lable?.classList.remove("completed");
            todo.completeTask(task.id, false);
        }
        
    });

    remove?.addEventListener('click', (event) => {
        if(event.currentTarget)
        {
            taskTemplate.remove();
        }
    });

    let taskNameContainer = taskTemplate.querySelector(".taskName");

    if(taskNameContainer)
    {
        taskNameContainer.innerHTML = taskName;
    }
    todoList.appendChild(taskTemplate);
    taskName1.value = "";
}
