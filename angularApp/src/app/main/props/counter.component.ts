import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  counter: number = 0;
  constructor() { }
  onIncrement() {
    this.counter++;
  }
  ngOnInit() {
  }

}
