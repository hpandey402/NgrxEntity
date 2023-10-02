import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { addBook, addBookSuccess, deleteBook, deleteBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess, selectBook, updateBook, updateBookSuccess } from "./book.actions";

export interface BookState extends EntityState<Book> {
    selectedBookId: string | number | null,
    loading: boolean,
    errMessage: string
}

export const bookAdapter = createEntityAdapter<Book>();
export const initialBookState: BookState = bookAdapter.getInitialState({
    selectedBookId: null,
    loading: false,
    errMessage: ''
});

export const bookReducer = createReducer(initialBookState,
    on(loadBooks, (state, action) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(loadBooksSuccess, (state, action) => {
        return bookAdapter.setAll(action.books, { ...state, loading: false })
    }),
    on(loadBooksFailure, (state, action) => {
        return {
            ...state,
            errMessage: action.errMessage,
            loading: false
        }
    }),
    on(addBook, (state, action) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(addBookSuccess, (state, action) => {
        return bookAdapter.addOne(action.book, { ...state, loading: false })
    }),
    on(updateBook, (state, action)=>{
        return {
            ...state,
            loading:true
        }
    }),
    on(updateBookSuccess, (state, action)=>{
        return bookAdapter.updateOne({id:action.book.id, changes:action.book}, {...state, loading:false})
    }),
    on(deleteBook, (state)=>{
        return {
            ...state,
            loading: true
        }
    }),
    on(deleteBookSuccess, (state, action)=>{
        return bookAdapter.removeOne(action.id, {...state, loading:false})
    }),
    on(selectBook, (state, action)=>{
        return{
            ...state,
            selectedBookId: action.id
        }
    })


);