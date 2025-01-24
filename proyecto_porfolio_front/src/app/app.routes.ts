import { Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent },
    {path:'listar', component:ListarComponent},
    {path:'add', component:AddComponent},
    {path:'edit', component:EditComponent}

];
