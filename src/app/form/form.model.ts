export class User {
    name: string;
    surname: string;
    phone: number;
    email: string;

    constructor(name: string, surname: string, phone: number, email: string) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
    }
}

export class Addres {
    street: string;
    buildNumber: number;
    city: string;
    zipCode: number;

    constructor(street: string, buildNumber: number, city: string, zipCode: number) {
        this.street = street;
        this.buildNumber = buildNumber;
        this.city = city;
        this.zipCode = zipCode;
    }
}
