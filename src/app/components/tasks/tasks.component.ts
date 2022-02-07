import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
//get data from server. getting it from folder for now
//get interface that we defined
import {Task} from '../../Task'; //interface
//move into service
//import {TASKS} from '../../mock-task';//populated data from interface structures

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //tasks: Task[] = TASKS;
  tasks: Task[] = [];//start with an empty array since we're calling it from our service

  //To use a service you have to provide it as an argument inside the constructor
  //privtae means we're only going to use it from here
  constructor(private taskService: TaskService) { }

  //ng inite fires off right away
  //:void means thsi particular function doesn't return anything

  ngOnInit(): void {
    //have to subscribe to the observable. similar to a promise
    this.taskService.getTask().subscribe((t)=> (this.tasks = t) );
  }

  //task is a single object not an array so we don't need the brackets
  //the iteration in the filter shouldn't be equal to the task that you're deleting
  //.subscribe() is similar to the .then()
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter(t=>t.id !== task.id) ) );
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;//set it to the opposite
    //console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    //console.log(task);
    this.taskService.addTask(task).subscribe((t)=> (this.tasks.push(t)) );
  }

}
