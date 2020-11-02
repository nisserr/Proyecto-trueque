import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';



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
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
