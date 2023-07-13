import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    nomeTab: string = 'home'

    @Output()
    inviaTabEvento = new EventEmitter<string>()

    mandaTab(nomeTab: string) {
      this.nomeTab = nomeTab
      this.inviaTabEvento.emit(this.nomeTab);
    }



}
