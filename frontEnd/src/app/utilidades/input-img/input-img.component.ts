import { Component, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-img',
  imports: [RouterModule, CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent implements OnInit{

  constructor(){}
  imagenBase64: string;

  @Input()
  urlImagenActual: string;

  @Output()
  archivoSeleccionado: EventEmitter<File>= new EventEmitter<File>();

  ngOnInit(): void {
  }

  change (event){
   if (event.target.files.length >0){
    const file: File =event.target.files[0];
    toBase64(file).then((value: string) =>this.imagenBase64=value)
    .catch(error => console.log(error));
    this.archivoSeleccionado.emit(file);
    this.urlImagenActual =null;
   }
  }

}
