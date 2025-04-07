import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-indice-generos',
  imports: [CommonModule, RouterModule, MatButtonModule],
  standalone: true,   
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
  
})
export class IndiceGenerosComponent {

}
