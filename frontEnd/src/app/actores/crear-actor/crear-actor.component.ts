import { Component, OnInit } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { actorCreacionDTO } from '../actor';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent implements OnInit {

constructor(){}

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO){
   console.log(actor);
  }

}
