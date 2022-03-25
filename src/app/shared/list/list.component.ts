import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title: string = 'Bienvenido a la web';
  today: Date = new Date('01-01-2019');

  dates: Date[] = [
    new Date('01-01-2019'),
    new Date('01-01-2020'),
    new Date('01-01-2021'),
    new Date('01-01-2022'),
  ];

  constructor() {}

  ngOnInit(): void {
    // Llamamos a un servicio??????
    this.title = 'Datos recibidos....';
  }

  handleClick(): void {
    this.title = Math.random().toString();
  }
}
