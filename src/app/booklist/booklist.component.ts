import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from './book.service';


@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
    books: Book[];

    constructor(private bookService: BookService) {

    }

    ngOnInit() {
        this.books = this.bookService.getBook();
    }

}
