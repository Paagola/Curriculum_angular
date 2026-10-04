import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-mainlayout',
  imports: [AsideComponent, MainComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {
  

}
