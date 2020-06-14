import {Component, Input, OnInit} from '@angular/core';
import {Addres, User} from '../form.model';
import {FormService} from '../form.service';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit{
    user: User;

    constructor(private formService: FormService) {}

    ngOnInit() {
        this.user = this.formService.user;
    }
}
