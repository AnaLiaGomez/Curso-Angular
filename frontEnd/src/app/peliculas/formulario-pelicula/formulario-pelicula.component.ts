import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { InputImgComponent } from '../../utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from '../../utilidades/input-markdown/input-markdown.component';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown'; 
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { SelectorMultipleComponent } from "../../utilidades/selector-multiple/selector-multiple.component";
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/Multiple-Selector-Model';
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";
import { actorPeliculaDTO } from '../../actores/actor';
import { MostrarErroresComponent } from "../../utilidades/mostrar-errores/mostrar-errores.component";



@Component({
  selector: 'app-formulario-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule, MatButtonModule, InputImgComponent, InputMarkdownComponent, MarkdownModule, SelectorMultipleComponent, AutocompleteActoresComponent, MostrarErroresComponent],
  providers: [provideMarkdown()],
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css'
})
export class FormularioPeliculaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  form: FormGroup;

  @Input()
  errores: string[]= [];

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO>= new  EventEmitter<PeliculaCreacionDTO>();

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[] = [];
  generosSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[] = [];
  cinesSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[]= [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '', 
      generosIds: '',
      cinesIds:'',
      actores:''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    const generosID = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosIds')?.setValue(generosID);

    const cinesID = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesIds')?.setValue(cinesID);

    const actores= this.actoresSeleccionados.map(val =>{
      return {id: val.id, personaje: val.personaje}
    });

    this.form.get('actores').setValue(actores);
    this.OnSubmit.emit(this.form.value);

  }

  archivoSeleccionado( archivo: File){
    this.form.get('poster').setValue(archivo);
  }


  changeMardown(texto){
    this.form.get('resumen').setValue(texto);

  }
}
