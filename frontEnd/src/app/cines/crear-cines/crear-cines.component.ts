import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormularioCineComponent } from '../formulario-cine/formulario-cine.component'; // Ajusta la ruta si es necesario
import { cineCreacionDTO } from '../cines';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CinesService } from '../cines.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';


@Component({
  selector: 'app-crear-cines',
  imports: [RouterModule, FormularioCineComponent, ReactiveFormsModule,
    MatButtonModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css'
})
export class CrearCinesComponent {
  errores: string[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private cinesService: CinesService) { }


  guardarCambios(cine: cineCreacionDTO) {
    this.cinesService.crear(cine).subscribe(() => {
      this.router.navigate(['/cines'])
    }, error => this.errores = parsearErroresAPI(error));

  }


}


