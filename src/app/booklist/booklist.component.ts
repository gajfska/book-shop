import {Component} from '@angular/core';
import {Book} from './book.model';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {

    book: Book[] = [];

}