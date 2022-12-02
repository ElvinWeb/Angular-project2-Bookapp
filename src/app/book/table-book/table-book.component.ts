import { Component, Input } from '@angular/core';
import { BookList } from 'src/app/models/booklist';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css'],
})
export class TableBookComponent {
  @Input('booklist') BookDetails: Array<BookList> = [];
}
