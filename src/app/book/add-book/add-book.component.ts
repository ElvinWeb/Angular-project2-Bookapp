import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { from } from 'rxjs';
import { BookList } from 'src/app/models/booklist';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  BookName: string = '';
  Author: string = '';
  Pagecount: any;
  Price: any;
  Title: string = '';

  @Input() BookDetails: Array<BookList> = [];
  @Output('addBook') Book = new EventEmitter<BookList>();
  NgForm: any;
  addnewbook(): void {
    this.Book.emit({
      bookname: this.BookName,
      author: this.Author,
      pagecount: this.Pagecount,
      price: this.Price,
      title: this.Title,
    });
  }

  submit: boolean = false;
  onSubmit(Bookappform: NgForm) {
    if (!Bookappform.valid) {
      this.submit = true;
      return;
    }
  }
}
