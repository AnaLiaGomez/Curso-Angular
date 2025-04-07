import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";
import { cineCreacionDTO, cineDTO } from '../cines';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-cine',
  standalone: true, 
  imports: [MatButtonModule, FormularioCineComponent, RouterModule],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})

export class EditarCineComponent implements OnInit {
  constructor(){}

  modelo: cineDTO= {nombre: "Sambil"};
  
  ngOnInit(): void {
   
  }

  guardarCambios(cine:cineCreacionDTO){
  console.log(cine);
  }

}
