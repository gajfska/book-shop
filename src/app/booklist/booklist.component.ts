import {Component} from '@angular/core';
import {Book} from '../shared/book.model';



export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
    books: Book[] = [
        new Book('Marina', 'Carlos Ruiz Zafon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWpFJVU19Pm_6E-cRpFS5O-eDE28TwvfIwIxieMIVdfIT5gFiDwqY78tdb4w&usqp=CAc', 301, 26.99, 1)
    ];


}
