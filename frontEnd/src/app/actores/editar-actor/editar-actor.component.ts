import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CrearActorComponent } from "../crear-actor/crear-actor.component";
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { actorCreacionDTO } from '../actor';
import { actorDTO } from '../actor';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { ActoresService } from '../actores.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-editar-actor',
  standalone: true,  // Marca el componente como standalone
  imports: [FormularioActoresComponent, MarkdownModule, CommonModule, MatProgressSpinnerModule],
  providers: [provideMarkdown()],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {
  constructor(private router: Router, private actoresService: ActoresService,  
    private activatedRoute:ActivatedRoute){}

   modelo: actorDTO;
   errores: string[]= [];

   ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params=>{
    this.actoresService.obtenerPorId(params.id)
    .subscribe(actor => {
      this.modelo= actor;
    }, () => this.router.navigate(['/actores']))
  });
     
   }
   
   guardarCambios(actor: actorCreacionDTO) {
    this.actoresService.editar(this.modelo.id, actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, error => this.errores = parsearErroresAPI(error));
  }
  

}
