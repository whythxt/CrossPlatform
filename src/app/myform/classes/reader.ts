export class Reader {
    id: number = 0;
    name: string = "";
    address: string = "";
    phone: number = 0;
    email: string = "";
    books: string[] = [];
    
    constructor(id: number, name: string, address: string, phone: number, email: string, books: string[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.books = books;
    }
}