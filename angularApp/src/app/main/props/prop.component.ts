import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
