import {Injectable} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {CartService} from '../cart/cart.service';

@Injectable({ providedIn: 'root'})
export class FormService {
    private books: Book[] = [];
    booksChanged = new Subject<Book[]>();

    getBook() {
        return this.books.slice();
    }

    addBook(book: Book) {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    }

}
