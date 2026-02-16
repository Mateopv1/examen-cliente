import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <--- ASEGÚRATE DE QUE ESTA RUTA ES CORRECTA

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));