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

    count() {
        const quantity = this.books.map(book => book.quantity);
        const price = this.books.map(book => book.price);
        let multiplication = 0;
        for (let i = 0; i < quantity.length; i++) {
            multiplication += quantity[i] * price[i];
        }
        return multiplication;
    }
}
