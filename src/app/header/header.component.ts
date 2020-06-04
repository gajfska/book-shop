import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Book} from '../shared/book.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements DoCheck {

    badgeCounter: number;
    books: Book[];

    constructor(private cartService: CartService) {}

    ngDoCheck() {
        this.books = this.cartService.getBooks();
        this.badgeCounter = this.books.length;
    }
}
