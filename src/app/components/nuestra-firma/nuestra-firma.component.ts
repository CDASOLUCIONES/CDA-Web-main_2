import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestra-firma',
  templateUrl: './nuestra-firma.component.html',
  styleUrls: ['./nuestra-firma.component.scss']
})
export class NuestraFirmaComponent {

  public scrollToSection(): void {

    const section = document.getElementById('historia-valores');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }

}