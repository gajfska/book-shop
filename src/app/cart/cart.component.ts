import {Component, DoCheck, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {CartService} from './cart.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {deleteAnimation} from '../shared/animations';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    animations: [ deleteAnimation ]
})
export class CartComponent implements OnInit, DoCheck {
    books: Book[];
    book: Book;
    sum: number;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.books = this.cartService.getBooks();
    }

    upQuantity(index: number) {
        if (this.books[index].quantity < this.books[index].amount) {
            this.books[index].quantity++;
        }
    }

    downQuantity(index: number) {
        if (this.books[index].quantity !== 1) {
            this.books[index].quantity--;
        }
    }

    ngDoCheck() {
        this.sum = this.cartService.count();
    }

    onDelete(index: number) {
        this.cartService.deleteBook(index);
    }

}
