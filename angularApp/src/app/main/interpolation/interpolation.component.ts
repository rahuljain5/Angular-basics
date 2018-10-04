import { Component, OnInit } from '@angular/core';
import { Customer, People } from '../../types/CustomerType';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  // name: string = 'ABC';
  // salary: number = 1000;
  // isActive: boolean = true;

  customer: Customer = {
    name: 'ABC',
    id: 1
  };

  arr: Array<number> = [1, 2, 4, 5];

  customers: Array<Customer> = [
    { id: 1, name: 'A' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
    { id: 6, name: 'f' }
  ];

  // isHidden: boolean = true;

  people: People[] = [
    {
      name: 'Douglas',
      age: 25
    },
    {
      name: 'A',
      age: 29
    },
    {
      name: 'B',
      age: 35
    },
    {
      name: 'C',
      age: 55
    },
    {
      name: 'D',
      age: 30
    }
  ];

  constructor() {}

  ngOnInit() {}
}
