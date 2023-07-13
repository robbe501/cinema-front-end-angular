import { Component, ViewChild, ElementRef } from '@angular/core';
import { Booking } from 'src/app/interfaces/booking.interface';
import { FilmScreening } from 'src/app/interfaces/film.screening.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  filmScreenings!: FilmScreening[];
  uniqueFilmTitles: string[] = [];
  filmTime: Date[] = [];

  constructor() {
    fetch(`${this.ENDPOINT}findAllByIsBookableTrue`)
        .then((res) => res.json())
        .then((json) => {
            this.filmScreenings = json;
            this.uniqueFilmTitlesFilter()
            console.log(this.uniqueFilmTitles)
        })
  }

  private uniqueFilmTitlesFilter() {
    this.filmScreenings.forEach(fs => {
        if(this.uniqueFilmTitles.indexOf(fs.title) == -1)
            this.uniqueFilmTitles.push(fs.title);
    });
  }

  getTimeBySelected(title: EventTarget) {
    this.filmTime = [];
    this.filmScreenings.forEach(fs => {
        if(fs.title == (<HTMLSelectElement>title).value){
            this.filmTime.push(fs.time);
        }
    });
  }

  postData(firstName: string, lastName: string, title: string, nTickets: string, time: string) {
    var screeningIdToInsert: number = -1;
    this.filmScreenings.forEach(fs => {
      if(fs.title == title && fs.time.toString() == time)
          screeningIdToInsert = parseInt(fs.screeningId);
    });

   var booking: Booking = {
      firstName: firstName,
      lastName: lastName,
      numTickets: parseInt(nTickets, 10),
      screeningId: screeningIdToInsert
    }

  const requestOptions: RequestInit = {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify(booking),
    headers: {
        "Content-Type": "application/json"
    }
  };

  fetch(`${this.ENDPOINT}saveBooking`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
    // Gestisci gli errori
    });



  }


}


