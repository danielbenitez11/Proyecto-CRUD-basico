import { Component } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router, RouterModule } from '@angular/router';
import { Persona } from '../../Modelo/Persona';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {


  modelPersona = new Persona();
  constructor(private router:Router, private service:ServiceService){}
  
  ngOnInit(){

  }

  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego con Exito.");

      this.router.navigate(["listar"]);
    })
  }

}
