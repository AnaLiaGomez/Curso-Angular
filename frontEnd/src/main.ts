import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MarkdownModule } from 'ngx-markdown'; // Importa el MarkdownModule si es necesario


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
