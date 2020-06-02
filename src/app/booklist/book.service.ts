import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';

export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];

   getBook() {
       return this.books.slice();
   }

   setBook(books: Book[]) {
       this.books = books;
       this.booksChanged.next(this.books.slice());
   }

   addBookToCart(book: Book) {
       this.books.push(book);
       this.booksChanged.next(this.books.slice());
       console.log(book);
   }
}
