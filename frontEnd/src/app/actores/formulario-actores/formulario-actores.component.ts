import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventEmitter } from '@angular/core';
import { actorCreacionDTO } from '../actor';
import { InputImgComponent } from "../../utilidades/input-img/input-img.component";
import { actorDTO } from '../actor';
import { InputMarkdownComponent } from "../../utilidades/input-markdown/input-markdown.component";
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-formulario-actores',
  imports: [RouterModule, CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatFormField, MatDatepickerModule,
     MatNativeDateModule, InputImgComponent, InputMarkdownComponent, MarkdownModule],
  providers: [provideMarkdown()],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  constructor(private fromBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: actorDTO;

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: '',
      foto: '',
      biografia:''
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }

  }

  archivoSeleccionado(file){
   this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);

  }

  Onsubmit() {
    this.OnSubmit.emit(this.form.value);
  }
}
