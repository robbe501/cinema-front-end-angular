import { Film } from "src/app/interfaces/film.interface";

export interface MovieState {
  list: Film[];
}

export const movieInitialState: MovieState = {
  list: [],
}
