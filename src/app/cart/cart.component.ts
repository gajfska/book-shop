import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subscription} from 'rxjs';
import {BookService} from '../booklist/book.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    books: Book[];
    private subscription: Subscription;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.books = this.bookService.getBook();
        this.subscription = this.bookService.booksChanged
            .subscribe(
                (books: Book[]) => {
                    this.books = books;
                }
            );
    }

    onDelete() {

    }

}
