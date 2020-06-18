import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Book} from '../shared/book.model';
import {CartService} from '../cart/cart.service';
import {FormService} from './form.service';
import {Addres, User} from './form.model';



@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent  implements OnInit, DoCheck {
    @ViewChild('f' , {static: false}) singForm: NgForm;
    submitted = false;
    books: Book[];
    sum: number;


    constructor(private formService: FormService,
                private cartService: CartService) {}

    onSubmit() {

        const user = new User(
            this.singForm.value.userInfo.name,
            this.singForm.value.userInfo.surname,
            this.singForm.value.userInfo.phone,
            this.singForm.value.userInfo.email);

        const addres = new Addres(
            this.singForm.value.userAdres.street,
            this.singForm.value.userAdres.buildNumber,
            this.singForm.value.userAdres.city,
            this.singForm.value.userAdres.zipCode);

        this.formService.setUser(user, addres);
        this.submitted = true;
    }

    onDelete(index: number) {
        this.cartService.deleteBook(index);
    }

    ngOnInit() {
        this.books = this.cartService.getBooks();
        console.log(this.books);
    }

    ngDoCheck() {
        this.sum = this.cartService.count();
    }

}
