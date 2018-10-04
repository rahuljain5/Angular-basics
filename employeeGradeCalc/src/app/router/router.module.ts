import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { EmployeeGradeCalcComponent } from '../employee-grade-calc/employee-grade-calc.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeGradeCalcComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
