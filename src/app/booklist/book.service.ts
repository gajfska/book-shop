import {Book} from '../shared/book.model';

export class BookService {
   private books: Book[] = [
        new Book('Marina', 'Carlos Ruiz Zafon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWpFJVU19Pm_6E-cRpFS5O-eDE28TwvfIwIxieMIVdfIT5gFiDwqY78tdb4w&usqp=CAc', 301, 26.99, 1),
        new Book('Droga Królów', 'Brandon Sanderson', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB5Vvrr5Z-xYPY60UdLkOXmP0WmMRog0rIYvPMvtAb5JHGXvQOEAne1yJWEbuLLHlbDZ5lpYU&usqp=CAc', 1136, 48.99, 1),
        new Book('Mistrz i Małgorzata', 'Michaił Bułhakow', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8_B4m7IAXRfskOpCOakorpErp757aFAPnqbjPGKD9LdAhYvIBoht_AjE9JmwmsHQOOrrhWQSL&usqp=CAc', 584, 32.99, 1),
        new Book('Wiedźmin: Ostatnie życzenie', 'Andrzej Sapkowski', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTGaVQaQMDe74atXT8mNO7uFdN3z5C8RmoxLINZammvzLIhqDLrq4Z8czzhda2ptJ2H9nnCHsx&usqp=CAc', 332, 27.99, 1),
    ];

   getBook() {
       return this.books.slice();
   }
}
