import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {
  book: any;
    books = [
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A story about the Jazz Age.', image: 'https://covers.openlibrary.org/b/id/7222166-L.jpg' },
      { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel about surveillance.', image: 'https://covers.openlibrary.org/b/id/1539272-L.jpg' },
      { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice.', image: 'https://covers.openlibrary.org/b/id/8220293-L.jpg' },
      { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A classic romance novel.', image: 'https://covers.openlibrary.org/b/id/8083826-L.jpg' },
      { id: 5, title: 'Moby Dick', author: 'Herman Melville', description: 'A novel about a whaling voyage.', image: 'https://covers.openlibrary.org/b/id/7890671-L.jpg' },
    ];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      // Convert bookId to a number and then compare
      this.book = this.books.find(book => book.id === Number(bookId));
    }
  }
}
