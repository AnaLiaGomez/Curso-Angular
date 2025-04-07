import { Component, OnInit, Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MarkdownModule } from 'ngx-markdown';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-input-markdown',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, MarkdownModule],
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.css'
})
export class InputMarkdownComponent implements OnInit {
  contenidoMarkDown= '';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter <string>();

  constructor(){}
  ngOnInit(): void {
  }

  inputTextArea(texto: string){
    this.contenidoMarkDown= texto;
    this.changeMarkdown.emit(texto);
  }
}
