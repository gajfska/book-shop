import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subscription} from 'rxjs';
import {CartService} from './cart.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    books: Book[];
    book: Book;
    sum: number;
    private subscription: Subscription;

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

    whatIsTheCost() {
        this.sum = this.cartService.count();
    }

    onDelete(index: number) {
        this.cartService.deleteBook(index);
    }

}
