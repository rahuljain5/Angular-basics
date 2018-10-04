import { Component, OnInit } from '@angular/core';
import { EmployeeFormModel } from '../formModel/employee.form.model';
import { Employee } from '../types/EmployeeType';

@Component({
  selector: 'app-employee-grade-calc',
  templateUrl: './employee-grade-calc.component.html',
  styleUrls: ['./employee-grade-calc.component.css']
})
export class EmployeeGradeCalcComponent implements OnInit {
  employee: Employee = new EmployeeFormModel(parseInt((Math.random() * 100).toFixed(0)), "", "", 0, 0)
  submitted: boolean = false;
  constructor() {

  }
  ngOnInit() { }

  computeSal() {
    switch (this.employee.grade) {
      case "Manager": this.employee.totalSalary = this.employee.baseSalary * 1.25; break;
      case "Senior_Engineer": this.employee.totalSalary = this.employee.baseSalary * 1.15; break;
      case "Junior_Engineer": this.employee.totalSalary = this.employee.baseSalary * 1.10; break;
      default: this.employee.totalSalary = this.employee.baseSalary * 1.05;
    }
  }
  onSubmit() {
    this.computeSal();
    this.submitted = true;
    console.log(this.employee);

  }

}
