import { Component, OnInit } from '@angular/core';
import { UiService } from '../..//services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  //runs when an object is initialized
  //add to constructor when using service
  //set up subscription to the toggle
  constructor(private uiService: UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value )
   }

  //when you want something to run when the component loads like an http request
  ngOnInit(): void {}

  //button toggle
  toggleAddTask(){
  	//console.log('toggle');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
