import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core'; // Importar MatOptionModule
import { MatSelectModule } from '@angular/material/select'; // Agregar este módulo
import { CommonModule, NgFor, Location } from '@angular/common' // 🔹 Importa NgFor
import{MatCheckboxModule} from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule, NgFor,
    MatCheckboxModule, MatButtonModule, ListadoPeliculasComponent], // Asegúrate de importar esto
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, 
    private location:Location, private activatedRoute: ActivatedRoute){}

  form: FormGroup;
  generos = [{id: 1, nombre: 'Drama'},
     {id: 2, nombre: 'Acción'},
     {id: 3, nombre: 'Terror'},
     {id: 4, nombre: 'Comedia'},
    ]

    peliculas= [
      {titulo: 'Spider-Man', enCines: false, proximosEstrenos:true, generos:[1,2], poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdlpsJREyFfylSTIHdpJRJrisz5U8kCldXQ&s'},
      {titulo: 'Moana', enCines:true, proximosEstrenos:false, generos:[4], poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc9xx3h1l3NMgC6-TKkawpaY-bi-FVJsj8Q&s'},
      {titulo: 'Lilo & Stitch', enCines:false, proximosEstrenos:false, generos:[4], poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjhUoGAhxQhwX6Qf_oQJDD_m4WBa-if5i4Q&s'},

    ];

    peliculasOriginal=this.peliculas;

    formularioOrginal ={
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    }

  ngOnInit(): void {
    this.form= this.formBuilder.group(this.formularioOrginal);
    this. leerValoresURL();
    this.buscarPeliculas (this.form.value);

    this.form.valueChanges.subscribe(valores=>{
    this.peliculas=this.peliculasOriginal;
    this.buscarPeliculas(valores);
    this.escribirParametrosBusquedaEnURL();

    })
  }

  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
        var objeto: any = {};

        if (params.titulo) {
            objeto.titulo = params.titulo;
        }

        if (params.generoId) {
            objeto.generoId = Number(params.generoId);
        }

        if (params.proximosEstrenos) {
            objeto.proximosEstrenos = params.proximosEstrenos;
        }

        if (params.enCines) {
            objeto.enCines = params.enCines;
        }
        this.form.patchValue(objeto);
    });
}


  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
        queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId != '0') {
        queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos) {
        queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines) {
        queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
}
  
    buscarPeliculas(valores:any){
      if(valores.titulo){
      this.peliculas= this.peliculas.filter(pelicula=> pelicula.titulo.indexOf(valores.titulo) !== -1);
    } 
    if(valores.generoId !== 0){
      this.peliculas= this.peliculas.filter(pelicula=> pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas= this.peliculas.filter(pelicula=> pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas= this.peliculas.filter(pelicula=> pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOrginal);
  }

}
