import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventComponent } from './event/event.component';
import { MainComponent } from './main.component';
import { PropComponent } from './props/prop.component';
import { CounterComponent } from './props/counter.component';
import { CounterViewComponent } from './props/counter-view.component';
import { ProductListComponent } from './props/product-list.component';
import { ProductViewComponent } from './props/product-view.component';
import { ProductViewDetailComponent } from './props/product-view-detail.component';
import { BasicpipeComponent } from './pipes/basicpipe.component';
import { DecimalPipe } from './pipes/decimal.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MyColorDirective } from './directives/my-color.directive';
import { MyColorComponent } from './directives/my-color.component';
import { ParentComponent, ChildComponent } from './compComm/parent.component';
import { ProdListComponent } from './compComm/prod-list.component';
import { ProdAddComponent } from './compComm/prod-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterpolationComponent, EventComponent, MainComponent, PropComponent, CounterComponent, CounterViewComponent, ProductListComponent, ProductViewComponent, ProductViewDetailComponent, BasicpipeComponent, DecimalPipe, SortPipe, MyColorDirective, MyColorComponent, ParentComponent, ChildComponent, ProdListComponent, ProdAddComponent],
  exports: [MainComponent]
})
export class MainModule { }
