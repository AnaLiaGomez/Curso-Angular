import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  ngOnInit(): void {
   
     this.peliculasEnCines = [{
       titulo: 'Spider-Man',
       fechadeLanzamiento: new Date(),
       precio: 1400.99,
       poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdlpsJREyFfylSTIHdpJRJrisz5U8kCldXQ&s'
     },
     {
       titulo: 'Moana',
       fechadeLanzamiento: new Date('2016-11-11'),
       precio: 300.50,
       poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc9xx3h1l3NMgC6-TKkawpaY-bi-FVJsj8Q&s'
       
     }
   ];
   }
    peliculasEnCines; 
    peliculasProximosEstrenos=[];
}
