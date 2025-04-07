import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  standalone: true, // Este decorador es necesario si tu componente es standalone
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  guardarCambios(genero:generoCreacionDTO) {
    //...guardar cambios 
    console.log(genero);
    this.router.navigate(['/generos'])
  }

 

}

