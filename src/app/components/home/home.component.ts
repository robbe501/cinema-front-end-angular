import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [1182, 1011, 984, 333].map((n) => `https://mr.comingsoon.it/imgdb/locandine/big/${n}.jpg`);


}
