import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
  modelPersona = new Persona();


  constructor(private router:Router, private service:ServiceService){
  }

  ngOnInit(){
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    
    if (id !== null) { 
      this.service.getPersonaId(+id)
      .subscribe(data=>{
        this.modelPersona = data;
      });
    } else {
      console.error("No se encontró un ID en el localStorage");
      this.router.navigate(["/listar"]); // Redirigir si no hay ID
    }


    
  }
  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.modelPersona=data;
      alert("Se ha actualizado la persona con éxito");
      this.router.navigate(["listar"]);
      
    })
  }
  

}
