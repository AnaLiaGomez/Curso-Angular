import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { ListadoGenericoComponent } from "../../utilidades/listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { HttpResponse } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-indice-generos',
  imports: [CommonModule, RouterModule, MatButtonModule, 
    ListadoGenericoComponent, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  standalone: true,   
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
  
})
export class IndiceGenerosComponent implements OnInit{
  constructor(private generosService: GenerosService){}

  generos: generoDTO[];
  columnasAMostrar= ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual= 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar ){
    this.generosService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
      this.generos= respuesta.body;
      this.cantidadTotalRegistros =respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual=datos.pageIndex +1;
    this.cantidadRegistrosAMostrar= datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  borrar(id: number){
    this.generosService.borrar(id)
    .subscribe(() =>{
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
