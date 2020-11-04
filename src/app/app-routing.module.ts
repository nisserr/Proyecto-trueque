import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import {DialogoComponent} from './dialogo/dialogo.component';
import { DialogomensajeComponent } from './dialogomensaje/dialogomensaje.component';
import { PerfilPublicComponent } from './perfil-public/perfil-public.component';



const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path: 'Perfil',
    component:PerfilComponent
  },
  {
    path:'Productos',
    component: ProductosComponent
  },
  {
    path: 'dialogo',
    component: DialogoComponent
  },
  {
    path:'dialogomensaje',
    component: DialogomensajeComponent
  },
  {
    path: 'Perfil-public',
    component: PerfilPublicComponent
  }
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
