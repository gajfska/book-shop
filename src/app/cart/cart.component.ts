import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subscription} from 'rxjs';
import {CartService} from './cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

    books: Book[];
    private subscription: Subscription;
    editedItemIndex: number;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.books = this.cartService.getBook();
        this.subscription = this.cartService.booksChanged
            .subscribe(
                (books: Book[]) => {
                    this.books = books;
                },
            (index: number) => {
                this.editedItemIndex = index;
            }
            );
    }

    onDelete() {
        this.cartService.deleteBook(this.editedItemIndex);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
