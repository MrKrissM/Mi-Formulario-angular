import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
selector: 'app-bienvenida',
templateUrl: './bienvenida.component.html',
styleUrls: ['./bienvenida.component.css'],
standalone: true,
imports: [DatePipe, CommonModule]
})
export class BienvenidaComponent {
usuario = 'Carlos';
fechaActual = new Date();
obtenerSaludo(): string {
return `Hola, ${this.usuario}`;
}
}
