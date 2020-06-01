export class Book {
    public name: string;
    public author: string;
    public image: string;
    public pages?: number;
    public price: number;
    public amount: number;

    constructor(name: string, author: string, image: string, pages: number, price: number, amount: number) {
        this.name = name;
        this.author = author;
        this.image = image;
        this.pages = pages;
        this.price = price;
        this.amount = amount;
    }

}
