import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {BooklistComponent} from './booklist/booklist.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';
import {BookItemComponent} from './booklist/book-item/book-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BooklistComponent, CartComponent, FormComponent, BookItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
