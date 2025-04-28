import { Component, Input, OnInit, Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MarkdownModule } from 'ngx-markdown';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-input-markdown',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, MarkdownModule, FormsModule],
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.css'
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  contenidoMarkDown= '';

  @Input()
  placeHolderTextarea: string= 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter <string>();

  constructor(){}
  ngOnInit(): void {
  }

 
}
