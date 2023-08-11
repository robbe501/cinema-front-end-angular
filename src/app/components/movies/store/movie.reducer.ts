import { Action, createReducer, on } from "@ngrx/store";
import * as movieActions from './movie.actions';
import * as movieState from './movie.state';

export const _movieReducer = createReducer(
  movieState.movieInitialState,
  on(movieActions.retrieveSuccess, (state, { payload }) => ({
    ...state,
    list: [...payload],
  }))
);

export function movieReducer(
  state: movieState.MovieState = movieState.movieInitialState,
  action: Action
) {
  return _movieReducer(state, action);
}

