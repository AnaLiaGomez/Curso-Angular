import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoGenericoComponent } from "../../utilidades/listado-generico/listado-generico.component";  // Asegúrate de importar CommonModule
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,  // Esto indica que el componente es independiente
  imports: [CommonModule, ListadoGenericoComponent, MatButtonModule],  // Agregar CommonModule para usar directivas como ngIf
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
  
})
export class ListadoPeliculasComponent implements OnInit {
  @Input  ()
  peliculas;

  ngOnInit(): void {
    
  }

  remover(indicePelicula: number):void{
    this.peliculas.splice(indicePelicula, 1);
  }
}