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
import {BookService} from './booklist/book.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CartService} from './cart/cart.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BooklistComponent, CartComponent, FormComponent, BookItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      MatButtonModule,
      MatIconModule,
      MatBadgeModule
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
