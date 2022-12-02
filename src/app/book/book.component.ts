import { Component } from '@angular/core';
import { BookList } from '../models/booklist';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  BookDetails: Array<BookList> = [];

  onAddnewBook(book: BookList) {
    this.BookDetails.push(book);
  }
}
