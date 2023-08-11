import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import * as movieActions from './movie.actions';

export const loadBooks = createEffect(
  (actions$ = inject(Actions), movieService = inject(MovieService)) => {
    return actions$.pipe(
      ofType(movieActions.retrieve),
      switchMap(() =>
      movieService
          .getAll()
          .pipe(map((data) => movieActions.retrieveSuccess({ payload: data })))
      )
    );
  },
  { functional: true }
);
