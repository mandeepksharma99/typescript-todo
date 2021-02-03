
export interface  ITask {
    id: number;
    taskName: string;
    completed: boolean;
}

class IdGen {
    private static nextId: number = 0;
     static nextID(): number {
        return ++(IdGen.nextId);
    }
}

export  class Task implements ITask{

    
    id: number;
    taskName: string;
    completed: boolean = false;
    
    constructor(taskName: string, completed:boolean = false, deleted:boolean = false){
        this.taskName = taskName;
        this.id = IdGen.nextID();
    }
    

}



