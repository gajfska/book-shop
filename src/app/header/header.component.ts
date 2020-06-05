import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Book} from '../shared/book.model';
import {BookService} from '../booklist/book.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements DoCheck {

    badgeCounter: number;
    books: Book[];
    book: Book;

    constructor(private cartService: CartService,
                private bookService: BookService) {}

    ngDoCheck() {
        this.books = this.cartService.getBooks();
        this.badgeCounter = this.books.map(book => book.quantity).reduce(this.add, 0);
    }

    add(accumulator, a) {
        return accumulator + a;
    }
}
