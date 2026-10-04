import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentheaderComponent } from './component/header/componentheader.component';
import { MainlayoutComponent } from './component/mainlayout/mainlayout.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ComponentheaderComponent, MainlayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'cv';
}