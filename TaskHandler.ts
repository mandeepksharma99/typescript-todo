import { Task } from "./model/Task";

export class TodoList {
    public static tasks: Map<number, Task> = new Map<number, Task>();

    allTasks(){
        return TodoList.tasks.values;
    }
    addTask(taskName: string): Task {
        let task: Task = new Task(taskName);
        TodoList.tasks.set(task.id, task);
        return task;
    }
    deleteTask(id: number){
        TodoList.tasks.delete(id);
    }
    
    completeTask(id: number, complete: boolean){
        let task = TodoList.tasks.get(id);
        
        if(task)
        {
            task.completed = complete;
        }    
    }
}