import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  template: `
  <h1>Mi Aplicación Angular</h1>
  <router-outlet></router-outlet>
`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_porfolio';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

}
