import {Injectable} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {CartService} from '../cart/cart.service';
import {Addres, User} from './form.model';

@Injectable({ providedIn: 'root'})
export class FormService {
    private books: Book[] = [];
    user: User;
    addres: Addres;
    booksChanged = new Subject<Book[]>();

    setUser(user: User, addres: Addres) {
        this.user = user;
        this.addres = addres;
    }

    getBook() {
        return this.books.slice();
    }

    addBook(book: Book) {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    }

}
