import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { error } from 'console';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-crear-genero',
  standalone: true, // Este decorador es necesario si tu componente es standalone
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {

  errores: string[]= [];

  constructor(private router: Router, private formBuilder: FormBuilder, private generosService: GenerosService) { }


  guardarCambios(genero:generoCreacionDTO) {
   this.generosService.crear(genero).subscribe(() => {
    this.router.navigate(['/generos'])
   }, error => this.errores= parsearErroresAPI(error));
    
  }

 

}

