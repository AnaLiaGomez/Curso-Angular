import { Component, OnInit } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { actorCreacionDTO } from '../actor';
import { EventEmitter } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Router, RouterModule } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';


@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent, RouterModule],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent implements OnInit {

constructor(private actoresService: ActoresService, private router: Router){}

  ngOnInit(): void {
  }

  errores= [];

  guardarCambios(actor: actorCreacionDTO){
   this.actoresService.crear(actor)
   .subscribe(() =>{
    this.router.navigate(['/actores'])
   }, errores=> this.errores= parsearErroresAPI(errores))
  }

}
