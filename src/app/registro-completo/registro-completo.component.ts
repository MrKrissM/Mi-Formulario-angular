import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
ReactiveFormsModule,
FormGroup,
FormControl,
Validators,
} from '@angular/forms';
@Component({
selector: 'app-registro-completo',
templateUrl: './registro-completo.component.html',
standalone: true,
imports: [ReactiveFormsModule, CommonModule]
})
export class RegistroCompletoComponent {
formularioRegistro = new FormGroup({
informacionPersonal: new FormGroup({
nombre: new FormControl('', Validators.required),
apellido: new FormControl('', Validators.required),
email: new FormControl('', [Validators.required,
Validators.email]),
}),
direccion: new FormGroup({
calle: new FormControl('', Validators.required),
ciudad: new FormControl('', Validators.required),
codigoPostal: new FormControl('', Validators.required),
}),
});
registrar() {
if (this.formularioRegistro.valid) {
console.log('Datos de registro:', this.formularioRegistro.value);
} else {
console.log('Formulario inválido');
}
}
}
