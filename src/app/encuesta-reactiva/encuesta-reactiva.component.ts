import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
ReactiveFormsModule,
FormGroup,
FormControl,
FormArray,
Validators,
} from '@angular/forms';
@Component({
selector: 'app-encuesta-reactiva',
templateUrl: './encuesta-reactiva.component.html',
standalone: true,
imports: [ReactiveFormsModule,CommonModule]
})
export class EncuestaReactivaComponent {
formularioEncuesta = new FormGroup({
intereses: new FormArray([], Validators.required),
generoMusical: new FormControl('', Validators.required),
pais: new FormControl('', Validators.required),
});
interesesOpciones = ['Deportes', 'Música', 'Arte', 'Tecnología'];
generosMusicales = ['Rock', 'Pop', 'Jazz', 'Clásica'];
paises = ['Argentina', 'Brasil', 'Chile', 'Perú'];
onCheckboxChange(event: any) {
const interesesArray: FormArray =
this.formularioEncuesta.get('intereses') as FormArray;
if (event.target.checked) {
interesesArray.push(new FormControl(event.target.value));
} else {
const index = interesesArray.controls.findIndex(
x => x.value === event.target.value
);
interesesArray.removeAt(index);
}
}
enviarEncuesta() {
if (this.formularioEncuesta.valid) {
console.log('Datos de la encuesta:',
this.formularioEncuesta.value);
} else {
console.log('Formulario inválido');
}
}
}
