import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormularioCineComponent } from '../formulario-cine/formulario-cine.component'; // Ajusta la ruta si es necesario
import { cineCreacionDTO } from '../cines';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-cines',
  imports: [RouterModule,FormularioCineComponent, ReactiveFormsModule, 
    MatButtonModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css'
})
export class CrearCinesComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
   
  }

guardarCambios(cine:cineCreacionDTO){
console.log(cine);
}

}


