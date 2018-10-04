import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<h1>Parent</h1>
  Child data: {{message}}
  <app-child (onSend) = "getDataFromChild($event)" ></app-child>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message:string = "loading";
  constructor() { }
  getDataFromChild(data){
    console.log(data);
    this.message = data;
  }
  
  
  ngOnInit() {
  }

}

@Component({
  selector: 'app-child',
  template: `<button (click)="send()">SendToParent</button>`
})
export class ChildComponent {
  @Output()
  onSend = new EventEmitter<string>()
  
  send() {
    this.onSend.emit("Hey i'm from Child!");
  }
}
