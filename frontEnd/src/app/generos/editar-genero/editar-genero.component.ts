import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { generoCreacionDTO, generoDTO } from '../genero';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GenerosService } from '../generos.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner' 
import { parsearErroresAPI } from '../../utilidades/utilidades';


@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule,
   MatButtonModule, MatInputModule, FormularioGeneroComponent, MatProgressSpinnerModule],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent implements OnInit {
   constructor(private router: Router, 
    private generosService: GenerosService, 
    private activatedRoute:ActivatedRoute){}

   modelo: generoDTO;
   errores: string[]= [];

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    this.generosService.obtenerPorId(params.id)
    .subscribe(genero => {
      this.modelo= genero;
    }, () => this.router.navigate(['/generos']))
  });
     
   }
   
   guardarCambios(genero: generoCreacionDTO) {
    this.generosService.editar(this.modelo.id, genero)
      .subscribe(() => {
        this.router.navigate(['/generos']);
      }, error => this.errores = parsearErroresAPI(error));
  }
  

}
