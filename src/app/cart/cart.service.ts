import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {FormService} from '../form/form.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CartService {
    private books: Book[] = [];
    booksChanged = new Subject<Book[]>();

    constructor(private formService: FormService) {}

    getBooks() {
        return this.books;
    }

    addBook(book: Book) {
        this.books.push(book);
        // this.booksChanged.next(this.books);
    }

    deleteBook(index: number) {
        this.books.splice(index, 1);
        // this.booksChanged.next(this.books.slice());
    }

}
