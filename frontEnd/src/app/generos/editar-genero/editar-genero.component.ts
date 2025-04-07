import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-genero',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent implements OnInit {
   constructor(private router: Router){}

   modelo: generoCreacionDTO = {nombre: 'Drama'};

   ngOnInit(): void {
     
   }
   guardarCambios(genero:generoCreacionDTO) {
      //...guardar cambios 
      console.log(genero);
      this.router.navigate(['/generos'])
    }
  

}
