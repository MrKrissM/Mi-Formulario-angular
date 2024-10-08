import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from "./contacto/contacto.component";
import { RegistroReactivoComponent } from './registro-reactivo/registro-reactivo.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EncuestaReactivaComponent } from './encuesta-reactiva/encuesta-reactiva.component';
import { RegistroCompletoComponent } from './registro-completo/registro-completo.component';
import { RegistroValidacionesComponent } from './registro-validaciones/registro-validaciones.component';
import { RegistroFormbuilderComponent } from './registro-formbuilder/registro-formbuilder.component';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
standalone: true,
imports: [BienvenidaComponent, CommonModule,LoginComponent, ContactoComponent, RegistroReactivoComponent, EncuestaReactivaComponent, RegistroCompletoComponent, RegistroValidacionesComponent, RegistroFormbuilderComponent],
})
export class AppComponent {
  title = 'mi-formulario';
}
