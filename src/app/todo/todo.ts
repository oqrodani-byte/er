import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  ngOnInit(){
    this.tastArr = JSON.parse(localStorage.getItem("task")|| "")
  }
  newTask = '';
  priority = 0
  tastArr: Task[] = [];
  edditMode = false
  addText = "Add Task"

  compBtnText  = "Complete"
  sortBtnText = "Sort Asc"

  sort(){
     if(this.sortBtnText == "Sort Asc"){
       this.sortBtnText = "Sort Desc"
      this.tastArr.sort((a,b) => a.priority - b.priority)
     }
     else{
      this.sortBtnText = "Sort Asc"
      this.tastArr.sort((a,b) =>  b.priority - a.priority )
     }
  }

  edit(task : Task, ind : number){

    this.edditMode = true
     this.deleteTask(ind)
     this.newTask = task.title
     this.priority = task.priority

     this.addText = "Save Changes"
  }
  addTask() {
        this.edditMode = false
         this.addText = "Add Task"
    if (this.newTask != '') {
      this.tastArr.push({
        id: this.tastArr.length+1 ,
        title: this.newTask,
        isCompleted: false,
        priority : this.priority
      });
    }
    this.newTask = '';  
    this.set()
  }

  deleteTask(index: number) {
    this.tastArr.splice(index, 1);
      this.set()
  }

  compTask(obj : Task){
     obj.isCompleted = !obj.isCompleted;
      // obj.isCompleted ? this.compBtnText = "Undo" : this.compBtnText =  "Complete"
      this.set()
  }

  
  set(){
    localStorage.setItem("task", JSON.stringify(this.tastArr))
  }
}

