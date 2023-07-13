import { Component } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css']
})
export class CaroselloComponent {

  ENDPOINT: string = "http://localhost:8080/api/v1/";
 /*  images = [1182, 1011, 984, 333].map((n) => `https://mr.comingsoon.it/imgdb/locandine/big/${n}.jpg`); */
  films: Film[] = []

  constructor() {
    fetch(`${this.ENDPOINT}findTop5ByOrderByReleaseDateDesc`)
        .then((res) => res.json())
        .then((json) => {
            this.films = json;
        });
    }
}
