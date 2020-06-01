import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {
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

    onSubmit() {
        this.submitted = true;
        this.user.name = this.singForm.value.userInfo.name;
        this.adres.street = this.singForm.value.userAdres.street;
    }

}
