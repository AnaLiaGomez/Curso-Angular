import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-generico',
  standalone: true,  // ✅ Hace que este componente sea independiente
  imports: [CommonModule], // ✅ Necesario para *ngIf y *ngFor
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css'],
})
export class ListadoGenericoComponent implements OnInit {

  @Input()
  listado;
  constructor(){}
  ngOnInit(): void {
    
  }

}
