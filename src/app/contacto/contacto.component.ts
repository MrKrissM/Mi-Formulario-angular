import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    email: '',
    mensaje: '',
  };
  enviado = false;

  enviarFormulario() {
    if (this.contacto.nombre && this.contacto.email &&
      this.contacto.mensaje) {
      this.enviado = true;
      console.log('Formulario enviado:', this.contacto);
    }
  }
}
