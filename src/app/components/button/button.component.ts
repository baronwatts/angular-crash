import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //properties from your button by importing Input
  //use ! after the variable for error if using newer TS
  /*! is basically the developer telling the typescript compiler: "This value will be present and available, don't worry about it". TS complains that the variable is being declared but it can't see it actually being assigned to anywhere e.g. a default assignment or in the constructor. So if you were to write @Input() text: string = 'this is a default assignment'; then the TS compiler would see that and relax. As it is, Angular takes care of assigning the value when we pass the data into the component e.g. <button text="Add">.
Using ! simply instructs the compiler that we are assigning this variable a value elsewhere in the code and that it is not an unassigned error despite looking like one.*/

  //inputs for the button
  @Input() text!: string;
  @Input() color!: string;

  //outputs for a custom event for a specific action for a button
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onClick(){
  	this.btnClick.emit();
  }

}
