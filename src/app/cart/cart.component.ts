import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {Subscription} from 'rxjs';
import {CartService} from './cart.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

    books: Book[];
    book: Book;
    private subscription: Subscription;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.books = this.cartService.getBook();
        // this.subscription = this.cartService.booksChanged
        //     .subscribe(
        //         (books: Book[]) => {
        //             this.books = books;
        //             console.log(this.books);
        //         }
        //     );
    }

    upQuantity() {
        console.log(this.books);
    }

    onDelete() {
    }

    onSubmit(form: NgForm) {}

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

}
