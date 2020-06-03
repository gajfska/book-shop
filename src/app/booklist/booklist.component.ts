import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from './book.service';
import {DataShopService} from '../shared/data-shop.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
    books: Book[];
    subscription: Subscription;

    constructor(private bookService: BookService,
                private dataShopService: DataShopService) {

    }

    ngOnInit() {
        this.subscription = this.bookService.booksChanged
            .subscribe(
                (books: Book[]) => {
                    this.books = books;
                }
            );
        this.dataShopService.fetchBooks();
    }

}
