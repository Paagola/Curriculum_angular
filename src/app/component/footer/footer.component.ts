import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
1
@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  descripcion_footer = 'Currículum desarrollado con Angular';
  fecha = new Date()
}
