import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";
import { cineCreacionDTO, cineDTO } from '../cines';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CinesService } from '../cines.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner' 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-cine',
  standalone: true, 
  imports: [MatButtonModule, FormularioCineComponent, RouterModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})

export class EditarCineComponent implements OnInit {
  constructor(private router: Router, 
      private cinesService: CinesService, 
      private activatedRoute:ActivatedRoute){}
  
     modelo: cineDTO;
     errores: string[]= [];
  
     ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
      this.cinesService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo= genero;
      }, () => this.router.navigate(['/cines']))
    });
       
     }
     
     guardarCambios(cine: cineCreacionDTO) {
      this.cinesService.editar(this.modelo.id, cine)
        .subscribe(() => {
          this.router.navigate(['/cines']);
        }, error => this.errores = parsearErroresAPI(error));
    }
    
  
  }
  


