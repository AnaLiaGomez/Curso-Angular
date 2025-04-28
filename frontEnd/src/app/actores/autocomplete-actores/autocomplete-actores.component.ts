import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop'
import { actorPeliculaDTO } from '../actor';
import { ActoresService } from '../actores.service';



@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatAutocompleteModule, MarkdownModule, CommonModule, MatInputModule,
    MatOptionModule, MatIconModule, MatTableModule,  FormsModule, DragDropModule
  ],
  providers: [provideMarkdown()],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent implements OnInit {
  constructor(private actoresService: ActoresService) { }

  control: FormControl = new FormControl();

  
  @Input()
  actoresSeleccionados: actorPeliculaDTO[]=[];
  actoresAMostrar: actorPeliculaDTO[]=[];


  columnasMostrar=['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable, { static: false }) table!: MatTable<any>;


  ngOnInit(): void {
    this.control.valueChanges.subscribe(nombre => {
      if (typeof nombre === 'string' && nombre.trim() !== '') {
        this.actoresService.obtenerPorNombre(nombre).subscribe(actores => {
          this.actoresAMostrar = actores;
        });
      } else {
        this.actoresAMostrar = [];
      }
    });
  }
  
  
  optionSelected(event: MatAutocompleteSelectedEvent) {
   // console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !==undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor ===event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();

  }

}
