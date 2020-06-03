import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Book} from '../shared/book.model';
import {CartService} from '../cart/cart.service';
import {FormService} from './form.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent  implements OnInit {
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

    constructor(private formService: FormService) {}

    onSubmit() {
        this.submitted = true;
        this.user.name = this.singForm.value.userInfo.name;
        this.adres.street = this.singForm.value.userAdres.street;
    }

    ngOnInit() {
        this.books = this.formService.getBook();
    }

}
