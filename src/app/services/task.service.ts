import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Observable, of} from 'rxjs';//dealing with fetchinng asynchronous data
import {Observable} from 'rxjs';//no longer need of since http client return that automatically
import {Task} from '../Task'; //interface
//import {TASKS} from '../mock-task';//populated data from interface structures. dont need this sonce we created database

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  //funtion is going to be a task array
   //use observables when dealing with aynchronous data
   //dealing with Task as an observable since it will be asynchronous
  getTask(): Observable<Task[]> {
    //retun an observable
    //const tasks = of(TASKS);
    //return tasks;

    //define in the constructor
    //get from task array
    return this.http.get<Task[]>(this.apiUrl);

  }

  //makes changes stick when refreshing the page
  // service maintain data throughout the life of an application
  // stores the state
  //perform all the operational tasks for the components
  //used to interact with the backend
  deleteTask(task: Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }


   //makes changes stick when refreshing the page
   //services maintain data throughout the life of an application
   //stores the state
   //perform all the operational tasks for the components
   //used to interact with the back end
   //use put request since we're updating
   updateTaskReminder(task: Task): Observable<Task>{
     const url = `${this.apiUrl}/${task.id}`;
     return this.http.put<Task>(url,task, httpOptions);
   }

   addTask(task: Task): Observable<Task>{
     return this.http.post<Task>(this.apiUrl, task, httpOptions);
   }


}
