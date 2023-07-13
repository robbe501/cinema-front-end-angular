import { Component, TemplateRef } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from 'src/app/interfaces/actor.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  // Pagina corrente e numero di record visualizzati per pagina
  page: number = 0;
  filmsPerPage: number = 2;

  ENDPOINT: string = "http://localhost:8080/api/v1/";
  films: Film[] = []

  filmVisibili: Film[] = []

  closeResult = '';

  actors: Actor[] = [

  ];

  constructor(private modalService: NgbModal) {
    fetch(`${this.ENDPOINT}findAllFilms`)
        .then((res) => res.json())
        .then((json) => {
            this.films = json;
            this.filmVisibili = [];
            this.filmVisibili = this.films.slice(0, this.filmsPerPage)
        })
  }

  indietro() {
    // Controllo di non essere alla zeresima pagina
    if(this.page > 0) {
      // Diminuisco la pagina di uno e ricarico le righe
      this.page--;
      this.filmVisibili = [];
      this.filmVisibili = this.films.slice(this.page, this.page + this.filmsPerPage)
    }
  }

  avanti() {
    // Controllo che ci siano ancora record disponibili da stampare
    if(this.films.length - (this.page + 1) * this.filmsPerPage >= 0) {
      // Incremento la pagina di uno e ricarico le righe
      this.page++;
      this.filmVisibili = [];
      this.filmVisibili = this.films.slice(this.page*this.filmsPerPage, this.page*this.filmsPerPage + this.filmsPerPage)
    }
  }

  open(content: TemplateRef<any>, filmId: number) {
    fetch(`${this.ENDPOINT}findActorsByFilmId/${filmId}`)
        .then((res) => res.json())
        .then((actors: Actor[]) => {
          this.actors = actors;
          })
        .then(() => {
          this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
              this.closeResult = `Closed with: ${result}`;
            }
          );
        });
	}
}
