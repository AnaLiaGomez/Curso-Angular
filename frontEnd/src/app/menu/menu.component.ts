import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon'
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true, //  Necesario para Standalone Components
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule], // Importar Angular Material
  styleUrls: ['./menu.component.css'] 
})

export class MenuComponent {

}
