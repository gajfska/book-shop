import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {NgForm} from '@angular/forms';

export class CartService {
    private books: Book[] = [];
    booksChanged = new Subject<Book[]>();

    getBook() {
        return this.books.slice();
    }

    addBook(book: Book) {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
        console.log(this.books.slice());
    }

    deleteBook(index: number) {
        this.books.splice(index, 1);
        this.booksChanged.next(this.books.slice());
    }

}
