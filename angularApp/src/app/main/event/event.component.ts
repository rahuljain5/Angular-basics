import { Component, OnInit } from '@angular/core';
import { Customer } from '../../types/CustomerType';
import { ProfileForm } from '../../formModels/Profile';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  profileForm = new ProfileForm();
  customers: Array<Customer> = [
    { id: 1, name: 'A' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
    { id: 6, name: 'f' }
  ];
  selectedCustomer: Customer;
  onSelect(customer: Customer) {
    this.selectedCustomer = customer;
    console.log(customer);

  }
  // like = 0;
  // onLike(e) {
  //   this.like++;
  //   console.log(e.target.innerHTML);
  // }
  // onDislike() {
  //   if (this.like > 0)
  //     this.like--;
  //   else this.like = 0
  // }
  // // 'onFNUpdate(e) {
  //   this.profileForm.firstName = e.target.value || "Loading...."
  //   console.log(e.target.value);
  // }
  // onLNUpdate(e) {
  //   this.profileForm.lastName = e.target.value
  //   console.log(e.target.value);
  // }
  // onEmailUpdate(e) {
  //   this.profileForm.email = e.target.value
  //   console.log(e.target.value);
  // }
  // onPasswordUpdate(e) {
  //   this.profileForm.password = e.target.value
  //   console.log(e.target.value);
  // }'
  constructor() { }

  ngOnInit() {
  }

}
