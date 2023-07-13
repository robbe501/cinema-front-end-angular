import { Component, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  film!: Film;

}
