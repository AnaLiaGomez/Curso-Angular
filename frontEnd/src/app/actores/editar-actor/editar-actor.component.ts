import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrearActorComponent } from "../crear-actor/crear-actor.component";
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { actorCreacionDTO } from '../actor';
import { actorDTO } from '../actor';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';



@Component({
  selector: 'app-editar-actor',
  standalone: true,  // Marca el componente como standalone
  imports: [FormularioActoresComponent, MarkdownModule],
  providers: [provideMarkdown()],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {
  constructor(private activetedRoute:ActivatedRoute){}
  
  modelo:actorDTO= {nombre: 'Ana', fechaNacimiento: new Date(), foto: 'https://lumiere-a.akamaihd.net/v1/images/image_8fc56419.jpeg?region=0,0,540,810'}

  ngOnInit(): void{
    this.activetedRoute.params.subscribe(params=>{
    //alert(params.id);
    })

  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }


}
