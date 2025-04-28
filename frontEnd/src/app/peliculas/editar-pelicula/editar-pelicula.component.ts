import { Component, OnInit } from '@angular/core';
import { FormularioPeliculaComponent } from "../formulario-pelicula/formulario-pelicula.component";
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {
  constructor(){}

  modelo: PeliculaDTO ={titulo:'Lilo & Stitch', 'trailer':'abc', enCines: true, resumen: 'cosa', 
    fechaLanzamiento: new Date(), poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjhUoGAhxQhwX6Qf_oQJDD_m4WBa-if5i4Q&s' };
  ngOnInit(): void {
    
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
   console.log(pelicula);
  }

}
