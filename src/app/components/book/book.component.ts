import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { addBook, deleteBook, loadBooks, selectBook, updateBook } from 'src/app/state/book/book.actions';
import { booksSelector, currentBookSelector, loadingSelector, selectBookEntities } from 'src/app/state/book/book.selectors';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  loading$!: Observable<boolean>;
  books$!: Observable<Book[]>;
  error$!:Observable<any>;
  currentBook$!: Observable<Book| undefined>;
  selectedBook: string = '';


 constructor(private store:Store){

}

ngOnInit(): void {
  this.store.dispatch(loadBooks());
  this.books$ = this.store.select(booksSelector);
  this.loading$ = this.store.select(loadingSelector);
  this.currentBook$ = this.store.select(currentBookSelector)
  // this.store.select(selectBookEntities).subscribe(data=>{
  //   console.log("check entities", data)
  // })
 }

 onAddBook(){
  const rnd = Date.now().toString();
  const random =  Math.floor(Math.random() * 10);
  const book:Book ={
    id:rnd,
    title:'Book Test'+ random,
    price: 200
  }
  this.store.dispatch(addBook({book}));
 }

 onBookSelect(id:string){
  this.store.dispatch(selectBook({id}));
 }

 onBookUpdate(bookId:string){
  const input = window.prompt('Enter title, price (eg. book1,100)');
  if(input){
  const values= input.split(",");
   if(values.length==2 ){
       const book:Book={
                          id:bookId,
                          title:values[0],
                          price:parseInt(values[1])
                       };
      this.store.dispatch(updateBook({book}));
    }
  }
  
}

 onBookRemove(id:string){
  this.store.dispatch(deleteBook({id}));
 }

}
