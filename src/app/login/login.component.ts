import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators, FormControl } from
  '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LoginComponent {
  usuario = new FormControl('', Validators.required);
  contrasena = new FormControl('', Validators.required);

  iniciarSesion() {
    if (this.usuario.valid && this.contrasena.valid) {
      console.log('Usuario:', this.usuario.value);
      console.log('Contraseña:', this.contrasena.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
