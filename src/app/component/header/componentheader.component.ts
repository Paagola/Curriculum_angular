import { Component } from '@angular/core';

@Component({
  selector: 'app-componentheader',
  imports: [],
  templateUrl: './componentheader.component.html',
  styleUrl: './componentheader.component.css'
})
export class ComponentheaderComponent {
    nombre = 'Victor Pagola';
  fecha = new Date();
  titulo = 'Mi CV de Angular';
  grado = 'Desarrollo de Aplicaciones Multiplataforma';
}

function mostrarResumen() {
  // TODO
  console.log('Mostrando resumen...')
}

function mostrarProyectos() {
  // TODO
  console.log('Mostrando proyectos...');
}

 function mostrarFormacion() {
  // TODO
  console.log('Mostrando formación...');
} 