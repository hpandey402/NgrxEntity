import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState, bookAdapter } from "./book.reducer";

export const getBooksState = createFeatureSelector<BookState>('bookState');

export const booksSelector = createSelector(getBooksState, bookAdapter.getSelectors().selectAll);

export const loadingSelector = createSelector(getBooksState, (state)=>{
    return state.loading;
});
export const selectBookEntities=createSelector(
    getBooksState,
    bookAdapter.getSelectors().selectEntities
  )

export const currentBookIdSelector = createSelector(getBooksState, (state)=>{
    return state.selectedBookId;
});

export const currentBookSelector = createSelector(selectBookEntities,currentBookIdSelector, (entities, id)=>{
    return entities[id as string];
})

