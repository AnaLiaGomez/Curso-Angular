import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPeliculaComponent } from "../formulario-pelicula/formulario-pelicula.component";
import { PeliculaCreacionDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/Multiple-Selector-Model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { parsearErroresAPI } from '../../utilidades/utilidades';


@Component({
  selector: 'app-crear-pelicula',
  imports: [CommonModule, FormularioPeliculaComponent, MatProgressSpinnerModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent implements OnInit{
  constructor(private peliculasService: PeliculasService){}
  
  errores: string[]=[];
  generosNoSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];


  ngOnInit(): void {
    this.peliculasService.postGet()
      .subscribe(resultado => {
        this.generosNoSeleccionados = resultado.generos.map(genero => {
          return <MultipleSelectorModel>{ llave: genero.id, valor: genero.nombre };
        });

        this.cinesNoSeleccionados = resultado.cines.map(cines => {
            return <MultipleSelectorModel>{ llave: cines.id, valor: cines.nombre };
        });
      }, error =>console.error(error));
  }
  

  guardarCambios(pelicula:PeliculaCreacionDTO){
   this.peliculasService.crear(pelicula)
   .subscribe(()=> console.log('exitoso'),
  error=>this.errores=parsearErroresAPI(error));

  }

}
