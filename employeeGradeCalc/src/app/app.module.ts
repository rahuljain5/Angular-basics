import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeGradeCalcComponent } from './employee-grade-calc/employee-grade-calc.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeGradeCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
