export class Book {
    public name: string;
    public author: string;
    public image: string;
    public pages: number;
    public price: number;

    constructor(name: string, author: string, image: string, pages: number, price: number) {
        this.name = name;
        this.author = author;
        this.image = image;
        this.pages = pages;
        this.price = price;
    }

}