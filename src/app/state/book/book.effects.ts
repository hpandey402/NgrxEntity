import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/services/book.service";
import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK, addBookSuccess, deleteBookSuccess, loadBooksFailure, loadBooksSuccess, updateBookSuccess } from "./book.actions";
import { catchError, map, of, switchMap, throwError } from "rxjs";

@Injectable()
export class BookEffects {
    constructor(private actions$:Actions, private service:BookService){}

    _loadBooks = createEffect(()=>{
        return this.actions$.pipe(
            ofType(LOAD_BOOKS),
            switchMap(()=>{
                return this.service.getBooks().pipe(
                    map((data)=> loadBooksSuccess({books: data}) ),
                    catchError(err=> of(loadBooksFailure({errMessage:err.message})))
                )
            })
        )
    });

    _addBook = createEffect(()=>{
        return this.actions$.pipe(
            ofType(ADD_BOOK),
            switchMap((action:any)=>{
                return this.service.addBook(action.book).pipe(
                    map(()=> addBookSuccess({book: action.book}) ),
                    catchError(err=> throwError(()=>new Error(`This is error ${err}`)))
                )
            })
        )
    });

    _updateBook = createEffect(()=>{
        return this.actions$.pipe(
            ofType(UPDATE_BOOK),
            switchMap((action:any)=>{
                return this.service.updateBook(action.book).pipe(   
                    map(()=> updateBookSuccess({book: action.book}) ),
                    catchError(err=> throwError(()=>new Error(`This is error ${err}`)))
                )
            })
        )
    });

    _deleteBook = createEffect(()=>{
        return this.actions$.pipe(
            ofType(DELETE_BOOK),
            switchMap((action:any)=>{
                return this.service.deleteBook(action.id).pipe(   
                    map(()=> deleteBookSuccess({id: action.id}) ),
                    catchError(err=> throwError(()=>new Error(`This is error ${err}`)))
                )
            })
        )
    });
}