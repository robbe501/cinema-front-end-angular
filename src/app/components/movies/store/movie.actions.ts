import { createAction, props } from "@ngrx/store";
import { Film } from "src/app/interfaces/film.interface";

export const retrieve = createAction('[Films] retrieve all');

export const retrieveSuccess = createAction(
  '[Films] retrieve all success',
  props<{ payload: Film[] }>()
);
