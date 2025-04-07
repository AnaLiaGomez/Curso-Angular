import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import{MatCheckboxModule} from '@angular/material/checkbox'
import{MatDatepickerModule} from '@angular/material/datepicker'
import {MatTabsModule} from '@angular/material/tabs'
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTabsModule, 
    MarkdownModule
  ],

  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
