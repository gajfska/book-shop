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

    setUser(user: User) {
        console.log('service')
        console.log(user);
        this.user = user;
    }

    getBook() {
        return this.books.slice();
    }

    addBook(book: Book) {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    }

}
