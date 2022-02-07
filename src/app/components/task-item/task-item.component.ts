//when creating an event emiiter add output
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //here is where you'll define your properties
  //Task is our interface
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();//define in root selector
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();//define in root selector
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  //defined in ur html tag
  onDelete(task){
    //console.log(task);
    this.onDeleteTask.emit(task); //defined our class
  }

  //defined in our html tag
  onToggle(task){
    this.onToggleReminder.emit(task); //defined our class
  }

}
