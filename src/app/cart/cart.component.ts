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
    private subscription: Subscription;
    editedItemIndex: number;

    constructor(private cartService: CartService) {
        console.log('ojejeu');
    }

    ngOnInit() {
        this.books = this.cartService.getBook();
        console.log('eloszka!');
        // this.subscription = this.cartService.booksChanged
        //     .subscribe(
        //         (books: Book[]) => {
        //             this.books = books;
        //             console.log(this.books);
        //         }
        //     );
    }

    onDelete() {
        this.cartService.deleteBook(this.editedItemIndex);
    }

    onSubmit(form: NgForm) {
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

}
