import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {BooklistComponent} from './booklist/booklist.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';
import {CartEditComponent} from './cart/cart-edit/cart-edit.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BooklistComponent, CartComponent, FormComponent, CartEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
