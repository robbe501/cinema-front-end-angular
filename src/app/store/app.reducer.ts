import { ActionReducerMap } from '@ngrx/store';
import * as movieReducer from '../components/movies/store/movie.reducer';
import { AppState } from "./app.state";

export const appReducer: ActionReducerMap<AppState> = {
  movies: movieReducer.movieReducer
}
