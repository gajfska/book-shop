import {Book} from '../shared/book.model';
import {Subject} from 'rxjs';

export class BookService {
    booksChanged = new Subject<Book[]>();

   private books: Book[] = [
        new Book('Droga Królów', 'Brandon Sanderson', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB5Vvrr5Z-xYPY60UdLkOXmP0WmMRog0rIYvPMvtAb5JHGXvQOEAne1yJWEbuLLHlbDZ5lpYU&usqp=CAc', 1136, 48.99, 1),
        new Book('Mistrz i Małgorzata', 'Michaił Bułhakow', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8_B4m7IAXRfskOpCOakorpErp757aFAPnqbjPGKD9LdAhYvIBoht_AjE9JmwmsHQOOrrhWQSL&usqp=CAc', 584, 32.99, 1),
        new Book('Wiedźmin: Ostatnie życzenie', 'Andrzej Sapkowski', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTGaVQaQMDe74atXT8mNO7uFdN3z5C8RmoxLINZammvzLIhqDLrq4Z8czzhda2ptJ2H9nnCHsx&usqp=CAc', 332, 27.99, 1),
    ];

   getBook() {
       return this.books.slice();
   }

   setBook(books: Book[]) {
       this.books = books;
       this.booksChanged.next(this.books.slice());
   }
}
