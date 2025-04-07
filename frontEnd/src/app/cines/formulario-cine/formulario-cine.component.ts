import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventEmitter } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { cineCreacionDTO } from '../cines';
import { MapaComponent } from '../../utilidades/mapa/mapa.component';


@Component({
  selector: 'app-formulario-cine',
  imports: [RouterModule, CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatFormField, MatDatepickerModule,
    MatNativeDateModule, MarkdownModule, ReactiveFormsModule, MapaComponent],
  providers: [provideMarkdown()],
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})

export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;

  @Input()
    modelo: cineCreacionDTO;

  @Output()
    guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();


    ngOnInit(): void {
      this.form = this.formBuilder.group({
        nombre: ['', { validators: [Validators.required] }],
      });

      if(this.modelo !== undefined){
        this.form.patchValue(this.modelo);
      }

    }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

}
