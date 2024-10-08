import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registro-validaciones',
  templateUrl: './registro-validaciones.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegistroValidacionesComponent {
  formularioRegistro = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    contraseña: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'),
    ]),
  });
  registrar() {
    if (this.formularioRegistro.valid) {
      console.log('Datos de registro:', this.formularioRegistro.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
