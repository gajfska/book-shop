import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../booklist/book.service';
import {Book} from './book.model';

@Injectable({providedIn: 'root'})
export class DataShopService {
    constructor( private http: HttpClient,
                 private bookService: BookService) {}

    fetchBooks() {
        this.http
            .get<Book[]>('https://ng-bookshop.firebaseio.com/books.json')
            .subscribe(books => {
                this.bookService.setBooks(books);
            });
    }
}
