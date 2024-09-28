import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent {
  books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A story about the Jazz Age.',image:"" },
    { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel about surveillance.',image:"" },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice.',imaeg:""},
  ];
}
