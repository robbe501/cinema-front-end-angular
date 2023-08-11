import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Film[]>(`${this.ENDPOINT}findAllFilms`);
  }

}
