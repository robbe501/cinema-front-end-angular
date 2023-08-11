import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MoviesComponent } from "./movies.component";
import * as movieEffect from "./store/movie.effects";
import { movieReducer } from "./store/movie.reducer";

@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature(movieEffect),
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
