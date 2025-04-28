import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { cineCreacionDTO, cineDTO } from './cines';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'cines';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    console.log('Request Params:', params.toString());  // Log de los parámetros enviados
    return this.http.get<cineDTO[]>(this.apiURL, { observe: 'response', params });
  }

    public obtenerPorId(id: number): Observable<cineDTO> {
      return this.http.get<cineDTO>(`${this.apiURL}/${id}`);
    }
    

    public borrar (id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
    }
  
    public crear (cine:cineCreacionDTO){
      return this.http.post(this.apiURL, cine);
    }

    
    public editar(id: number, cine: cineCreacionDTO){
        return this.http.put(`${this.apiURL}/${id}`, cine);
    }
 
}
