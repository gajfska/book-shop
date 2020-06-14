import {Component, Input, OnInit} from '@angular/core';
import {Addres, User} from '../form.model';
import {FormService} from '../form.service';
import {Book} from '../../shared/book.model';
import {CartService} from '../../cart/cart.service';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit{
    user: User;
    addres: Addres;
    books: Book[];
    sum: number;

    constructor(private formService: FormService,
                private cartService: CartService) {}

    ngOnInit() {
        this.user = this.formService.user;
        this.addres = this.formService.addres;
        this.books = this.cartService.getBooks();
        this.sum = this.cartService.count();
    }
}
