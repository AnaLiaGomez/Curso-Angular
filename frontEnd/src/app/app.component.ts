import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';  // Mantén RouterModule aquí, pero sin AppRoutingModule
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MarkdownModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
