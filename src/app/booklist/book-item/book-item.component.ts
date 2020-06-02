import {Component, Input} from '@angular/core';
import {Book} from '../../shared/book.model';
import {BookService} from '../book.service';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
   @Input() book: Book;

   constructor( private bookService: BookService) {}

    onAddToCart() {
        this.bookService.addBookToCart(this.book);
    }
}
