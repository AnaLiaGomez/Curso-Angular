import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-mostrar-errores',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './mostrar-errores.component.html',
  styleUrl: './mostrar-errores.component.css'
})
export class MostrarErroresComponent implements OnInit{
  @Input() 
  errores: string[] = []; // Aquí se define el Input


  constructor(){}

  ngOnInit(): void {
    
  }

}
