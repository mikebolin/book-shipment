import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrderConfirm } from './book-shipment-button/book-shipment-button.component';

import {ClassChangerDirective } from './book-shipment-button/class-changer.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OrderConfirm ,ClassChangerDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
