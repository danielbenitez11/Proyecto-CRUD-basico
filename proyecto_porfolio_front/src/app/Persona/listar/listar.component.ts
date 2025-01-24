import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Persona } from '../../Modelo/Persona';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  personas:Persona[];

  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit(){
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);

  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado");
    })
  }
}
