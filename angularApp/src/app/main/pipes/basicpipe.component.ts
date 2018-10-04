import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicpipe',
  templateUrl: './basicpipe.component.html',
  styleUrls: ['./basicpipe.component.css']
})
export class BasicpipeComponent implements OnInit {
name = 'Blah';
today = new Date();
product = {
  id: 1,
  name: 'phone'
};
  constructor() { }

  ngOnInit() {
  }

}
