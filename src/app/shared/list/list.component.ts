import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dates: Date[] = [];
  @Output() onClickDate = new EventEmitter();

  title: string = 'Bienvenido a la web';
  title2: any = 'NgModel';
  today: Date = new Date();
  placeholder: string = 'One way';

  constructor() {}

  ngOnInit(): void {
    // Llamamos a un servicio??????
    this.title = 'Datos recibidos....';
  }

  handleClick(i: any): void {
    this.onClickDate.emit(i);
    this.title = Math.random().toString();
  }

  handleChange(): void {
    console.log('E');
    // this.title = e.target.value;
  }
}
