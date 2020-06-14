import {Component, DoCheck, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
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
    user = {
        name: '',
        surname: '',
        phone: '',
        email: ''
    };
    // adres = {
    //     street: '',
    //     buildNumber: '',
    //     city: '',
    //     zipCode: ''
    // };
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
        // console.log(this.singForm.value.userInfo.name);
        //
        // console.log(user);

        this.formService.setUser(user);
        this.submitted = true;

        // this.user.name = this.singForm.value.userInfo.name;
        // this.user.surname = this.singForm.value.userInfo.surname;
        // this.user.phone = this.singForm.value.userInfo.phone;
        // this.user.email = this.singForm.value.userInfo.email;

        // this.formService.user.name = this.singForm.value.userInfo.name;
        // this.formService.user.surname = this.singForm.value.userInfo.surname;
        // this.formService.user.phone = this.singForm.value.userInfo.phone;
        // this.formService.user.email = this.singForm.value.userInfo.email;
        // this.formService.addres.street = this.singForm.value.userAdres.street;
        // this.formService.addres.buildNumber = this.singForm.value.userAdres.buildNumber;
        // this.formService.addres.city = this.singForm.value.userAdres.city;
        // this.formService.addres.zipCode = this.singForm.value.userAdres.zipCode;
    }

    onDelete(index: number) {
        this.cartService.deleteBook(index);
    }

    ngOnInit() {
        // this.books = this.formService.getBooks();
        this.books = this.cartService.getBooks();
        //this.singForm.value.userInfo.name = this.formService.user.name;
    }

    ngDoCheck() {
        this.sum = this.cartService.count();
    }

}
