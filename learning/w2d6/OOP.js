const book1 = {
    title: 'Book One',
    author: 'xxx',
    year: '2025',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'xxx',
    year: '2025',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSummary())
console.log(Object.values(book2));
console.log(Object.keys(book2));

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Initiate an object
const book3 = new Book('Book Three', 'yyy', '2023');
console.log(book3.getSummary())
console.log(book3.getAge())

book3.revise("2018");
console.log(book3)

// Inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)
// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Mag One', 'adf', '2020', 'Jan')

console.log(mag1)

// Object of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
const bookx = Object.create(bookProtos, {
    title: {value: 'BookX'},
    author: {value: 'wis'},
    year: {value: '2019'}
});


class BookClass {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return "get summary..."
    }

    static topBookStore() {
        return 'Barns & Noble';
    }
}

const booky = new BookClass('Book Y', 'wihd', '2020');

console.log(BookClass.topBookStore())

// Subclass
class MagazineClass extends BookClass {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}