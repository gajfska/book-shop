import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';
import {CartService} from '../cart/cart.service';
import {Injectable} from '@angular/core';
import {FormService} from '../form/form.service';


@Injectable({providedIn: 'root'})
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];

    constructor( private cartService: CartService,
                 private formService: FormService) {}


   setBooks(books: Book[]) {
       this.books = books;
       this.booksChanged.next(books.slice());
   }

   addBookToCart(book: Book) {
       this.cartService.addBook(book);
   }

    addBookToForm(book: Book) {
        this.cartService.addBook(book);
    }

    filterBySearch(searchParameter: string) {
        const filteredBooks  = this.books.filter( book =>
            book.author.includes(searchParameter) || book.name.includes(searchParameter));
        this.booksChanged.next(filteredBooks.slice());
    }
}
