import {Injectable} from '@angular/core';
import {Addres, User} from './form.model';

@Injectable({ providedIn: 'root'})
export class FormService {
    user: User;
    addres: Addres;

    setUser(user: User, addres: Addres) {
        this.user = user;
        this.addres = addres;
    }

}
