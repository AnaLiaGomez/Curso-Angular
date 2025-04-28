import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ListadoGenericoComponent } from "../../utilidades/listado-generico/listado-generico.component";
import { ActoresService } from '../actores.service';
import { actorDTO } from '../actor';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-actores',
  imports: [RouterModule, MatButtonModule, ListadoGenericoComponent, MatPaginatorModule, MatTableModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent implements OnInit {
  constructor(private actoresService: ActoresService){}

  actores: actorDTO[];
  columnasAMostrar= ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual= 1;
  cantidadRegistrosAMostrar = 10;


  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar ){
    this.actoresService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<actorDTO[]>) => {
      this.actores= respuesta.body;
      this.cantidadTotalRegistros =respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual=datos.pageIndex +1;
    this.cantidadRegistrosAMostrar= datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  borrar(id: number){
    this.actoresService.borrar(id)
    .subscribe(() =>{
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }
}
