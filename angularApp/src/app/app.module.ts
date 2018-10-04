import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent, MainComponent]
})
export class AppModule { }
