import {Component, DoCheck} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Book} from '../shared/book.model';
import {BookService} from '../booklist/book.service';
import {searchAnimation} from '../shared/animations';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [searchAnimation]
})

export class HeaderComponent implements DoCheck {

    badgeCounter: number;
    books: Book[];
    book: Book;
    show = false;
    search = '';

    constructor(private cartService: CartService,
                private bookService: BookService) {}

    ngDoCheck() {
        this.books = this.cartService.getBooks();
        this.badgeCounter = this.books.map(book => book.quantity).reduce(this.add, 0);
        this.bookService.filterBySearch(this.search);

    }

    add(accumulator, a) {
        return accumulator + a;
    }

    showSearch(){
        this.show = !this.show;
    }

    onClean(){
        this.search = '';
        this.bookService.filterBySearch(this.search);
    }
}
