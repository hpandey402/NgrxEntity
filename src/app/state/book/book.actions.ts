import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const LOAD_BOOKS = '[book api] load books';
export const LOAD_BOOKS_SUCCESS = '[book api] load books success';
export const LOAD_BOOKS_FAILURE = '[book api] load books failure';

export const ADD_BOOK = '[book api] add book';
export const ADD_BOOK_SUCCESS = '[book api] add book success';
export const ADD_BOOK_FAILURE = '[book api] add book failure';

export const UPDATE_BOOK = '[book api] update book';
export const UPDATE_BOOK_SUCCESS = '[book api] update book success';
export const UPDATE_BOOK_FAILURE = '[book api] update book failure';

export const DELETE_BOOK = '[book api] delete book';
export const DELETE_BOOK_SUCCESS = '[book api] delete book success';
export const DELETE_BOOK_FAILURE = '[book api] delete book failure';

export const SELECT_BOOK = '[book api] select book';



export const loadBooks = createAction(LOAD_BOOKS);
export const loadBooksSuccess = createAction(LOAD_BOOKS_SUCCESS, props<{books:Book[]}>());
export const loadBooksFailure = createAction(LOAD_BOOKS_FAILURE, props<{errMessage:string}>());

export const addBook = createAction(ADD_BOOK, props<{book:Book}>());
export const addBookSuccess = createAction(ADD_BOOK_SUCCESS, props<{book:Book}>());

export const updateBook = createAction(UPDATE_BOOK, props<{book:Book}>());
export const updateBookSuccess = createAction(UPDATE_BOOK_SUCCESS, props<{book:Book}>());

export const deleteBook = createAction(DELETE_BOOK, props<{id:string}>());
export const deleteBookSuccess = createAction(DELETE_BOOK_SUCCESS, props<{id:string}>());

export const selectBook = createAction(SELECT_BOOK, props<{id:string}>());



