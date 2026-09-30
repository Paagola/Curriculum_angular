import { Component } from '@angular/core';

@Component({
  selector: 'app-componentheader',
  imports: [],
  templateUrl: './componentheader.component.html',
  styleUrl: './componentheader.component.css'
})
export class ComponentheaderComponent {
  title = 'cv';
  nombre = 'Victor Pagola';
  fecha = new Date();
  titulo = 'Mi CV de Angular';
  grado = 'Desarrollo de Aplicaciones Multiplataforma';
}
