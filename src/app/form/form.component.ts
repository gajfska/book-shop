import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Book} from '../shared/book.model';
import {CartService} from '../cart/cart.service';
import {FormService} from './form.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent  implements OnInit, DoCheck {
    @ViewChild('f' , {static: false}) singForm: NgForm;
    user = {
        name: '',
        surname: '',
        phone: '',
        email: ''
    };
    adres = {
        street: '',
        buildNumber: '',
        city: '',
        zipCode: ''
    };
    submitted = false;

    books: Book[];
    sum: number;


    constructor(private formService: FormService,
                private cartService: CartService) {}

    onSubmit() {
        this.submitted = true;
        this.user.name = this.singForm.value.userInfo.name;
        this.user.surname = this.singForm.value.userInfo.surname;
        this.user.phone = this.singForm.value.userInfo.phone;
        this.user.email = this.singForm.value.userInfo.email;
        this.adres.street = this.singForm.value.userAdres.street;
        this.adres.buildNumber = this.singForm.value.userAdres.buildNumber;
        this.adres.city = this.singForm.value.userAdres.city;
        this.adres.zipCode = this.singForm.value.userAdres.zipCode;
    }

    onDelete(index: number) {
        this.cartService.deleteBook(index);
    }

    ngOnInit() {
        // this.books = this.formService.getBooks();
        this.books = this.cartService.getBooks();
    }

    ngDoCheck() {
        this.sum = this.cartService.count();
    }

}
