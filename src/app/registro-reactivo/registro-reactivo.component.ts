import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
ReactiveFormsModule,
FormGroup,
FormControl,
Validators,
} from '@angular/forms';
@Component({
selector: 'app-registro-reactivo',
templateUrl: './registro-reactivo.component.html',
styleUrls: ['./registro-reactivo.component.css'],
standalone: true,
imports: [CommonModule,ReactiveFormsModule],
})
export class RegistroReactivoComponent {
formularioRegistro = new FormGroup({
nombre: new FormControl('', Validators.required),
email: new FormControl('', [Validators.required, Validators.email]),
contraseña: new FormControl('', [
Validators.required,
Validators.minLength(6),
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
