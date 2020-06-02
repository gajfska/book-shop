import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {CartService} from '../cart/cart.service';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];

    constructor( private cartService: CartService) {}


   setBook(books: Book[]) {
       this.books = books;
       this.booksChanged.next(this.books.slice());
   }

   addBookToCart(book: Book) {
       this.cartService.addBook(book);
   }
}
