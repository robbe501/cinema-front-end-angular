import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinema-front-end-angular';
  tabAttiva: string = 'home';

  riceviTab(tabAttiva: string) {
    console.log(tabAttiva)
    this.tabAttiva = tabAttiva
  }

}
