import {Component} from '@angular/core';
import {Book} from '../shared/book.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    books: Book[] = [
        new Book('Marina', 'Carlos Ruiz Zafon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWpFJVU19Pm_6E-cRpFS5O-eDE28TwvfIwIxieMIVdfIT5gFiDwqY78tdb4w&usqp=CAc', 301, 26.99, 1)
    ];

}