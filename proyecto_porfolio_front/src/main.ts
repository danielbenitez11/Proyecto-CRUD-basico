import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms';

// Utiliza bootstrapApplication en lugar de @NgModule
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    FormsModule // Asegúrate de incluir FormsModule aquí
  ]
}).catch((err) => console.error(err));
