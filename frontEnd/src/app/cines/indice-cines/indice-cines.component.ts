import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CinesService } from '../cines.service';
import { cineDTO } from '../cines';
import { MatButtonModule } from '@angular/material/button';
import { ListadoGenericoComponent } from "../../utilidades/listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-cines',
  imports: [RouterModule, MatButtonModule, ListadoGenericoComponent, MatTableModule, MatPaginatorModule],
  templateUrl: './indice-cines.component.html',
  styleUrl: './indice-cines.component.css'
})
export class IndiceCinesComponent implements OnInit {
constructor(private cinesService: CinesService){}

  cines: cineDTO[];
  columnasAMostrar= ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual= 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar ){
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<cineDTO[]>) => {
      this.cines= respuesta.body;
      this.cantidadTotalRegistros =respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual=datos.pageIndex +1;
    this.cantidadRegistrosAMostrar= datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  borrar(id: number){
    this.cinesService.borrar(id)
    .subscribe(() =>{
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}



