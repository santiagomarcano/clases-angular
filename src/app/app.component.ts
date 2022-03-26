import { Component } from '@angular/core';

// Decorador.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  dates2: Date[] = [
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2019'),
    new Date('01-01-2020'),
    new Date('01-01-2021'),
    new Date('01-01-2022'),
  ];

  dates3: Date[] = [new Date('01-01-2019')];

  handleEvent(e: string) {
    alert(e);
  }
}
