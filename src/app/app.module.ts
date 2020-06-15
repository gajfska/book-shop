import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BooklistComponent} from './booklist/booklist.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';
import {BookItemComponent} from './booklist/book-item/book-item.component';
import {OrderSummaryComponent} from './form/order-summary/order-summary.component';
import {BookService} from './booklist/book.service';
import {CartService} from './cart/cart.service';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';



@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      BooklistComponent,
      CartComponent,
      FormComponent,
      BookItemComponent,
      OrderSummaryComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      MatButtonModule,
      MatIconModule,
      MatBadgeModule,
      MatInputModule,
      MatFormFieldModule,
      MatStepperModule,
      ReactiveFormsModule

  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
