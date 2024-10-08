import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, ValidationErrors,
  ReactiveFormsModule, FormGroup } from '@angular/forms';
  @Component({
  selector: 'app-registro-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-formbuilder.component.html',
  styleUrl: './registro-formbuilder.component.css'
  })
  export class RegistroFormbuilderComponent {
  formularioRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
  this.formularioRegistro = this.fb.group(
  {
  usuario: ['', [Validators.required,
  this.nombreProhibidoValidator(['admin', 'root'])]],
  contraseña: ['', Validators.required],
  confirmarContraseña: ['', Validators.required],
  },
  { validators: this.contrasenasIgualesValidator }
  );
  }
  registrar() {
  if (this.formularioRegistro.valid) {
  console.log('Datos de registro:', this.formularioRegistro.value);
  } else {
  console.log('Formulario inválido');
  }
  }
  nombreProhibidoValidator(nombresProhibidos: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
  if (nombresProhibidos.includes(control.value)) {
  return { nombreProhibido: true };
  }
  return null;
  };
  }
  contrasenasIgualesValidator(group: AbstractControl): ValidationErrors |
  null {
  const contraseña = group.get('contraseña')?.value;
  const confirmarContraseña = group.get('confirmarContraseña')?.value;
  if (contraseña !== confirmarContraseña) {
  return { contraseñasNoCoinciden: true };
  }
  return null;
  }
  }
