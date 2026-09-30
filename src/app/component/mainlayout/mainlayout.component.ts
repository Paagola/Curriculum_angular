import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mainlayout',
  imports: [NgOptimizedImage],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {
  texto =
    'Este es el portfolio de proyectos durante el curso de Desarrollo de Aplicaciones Multiplataforma. Durante estos proyectos se han investigado nuevas herramientas y librerías para ofrecer un proyecto más profesional.';
  ciudad = 'Málaga';
  telefono = 685766528;
  correo_electronico = 'victorpagola.w@gmail.com';
  github = 'https://github.com/Paagola';
  idiomas = 'Certificado B1 Cambridge, cursando para nivel B2';
  about = 'Sobre mí';
  description_about = 'Soy una persona muy proactiva, siempre me gusta meterme en proyectos o problemas díficiles de solucionar porque son lo que realmente tienen gracia.';
  titulo_experiencia = "Experiencia"
  empresa1 = 'Idiliq Group';
  puesto1 = 'IT Support' ;
  periodo1 = '1 año';
  descripcion1 = 'Reparación de equipos a distancia y en persona, actualización de recursos en servidores, configuración de firewalls, trato con el cliente y autonomía para poder llevar toda la parte de reparación físicas de dispositivos electrónicos por mi cuenta.';
  empresa2 = 'Rewe Digital';
  puesto2 = 'Abap Junior Developer';
  periodo2 = '3 meses';
  descripcion2 = 'Durante este periodo de prácticas de perido de 3 meses aprendimos como se comportaba el ecosistema SAP con ABAP como lógica interna, esto nos ayudó a entender sistemas SAP mucho más rápido y a ofrecer nuestrar propias soluciones a desarrollar para problemas encontrados.' ;
  titulo_formacion = 'Desarrollo de Aplicaciones Multiplataforma';
  texto_formacion = 'Durante este grado superior aprendemos desde las bases del código hasta la implentación con servidores, apis, bases de datos y todo lo necesario para ofrecer a los clientes un producto final totalmente seguro y funcional'
  titulo_tecno  = 'Tecnologías';
  array_tecnologias = 
    [
      'HTML',
      'CSS',
      'JavasScript',
      'TypeScript',
      'Angular',
      'Java',
      'Kotlin'
    ]
  ;

}
