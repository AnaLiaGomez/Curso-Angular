import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModel } from './Multiple-Selector-Model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-selector-multiple',
  imports: [CommonModule],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent implements OnInit {
  constructor(){}

  @Input()
  Seleccionados: MultipleSelectorModel[]=[];

  @Input()
  NoSeleccionados: MultipleSelectorModel[]=[];

  ngOnInit(): void {
    
  }

  seleccionar(item: MultipleSelectorModel, index: number){
    this.Seleccionados.push(item)
    this.NoSeleccionados.splice(index, 1);

  }

  deseleccionar(item: MultipleSelectorModel, index: number){
    this.NoSeleccionados.push(item)
    this.Seleccionados.splice(index, 1);

  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados=[];

  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados=[];
    
  }

}
