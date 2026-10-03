import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  texto =
    'Este es el portfolio de proyectos durante el curso de Desarrollo de Aplicaciones Multiplataforma. Durante estos proyectos se han investigado nuevas herramientas y librerías para ofrecer un proyecto más profesional.';
  ciudad = 'Málaga';
  telefono = 685766528;
  correo_electronico = 'victorpagola.w@gmail.com';
  github = 'https://github.com/Paagola';
  idiomas = 'Certificado B1 Cambridge, cursando para nivel B2';
}
