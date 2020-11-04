import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {DialogOverviewExampleDialog} from './dialogo/dialogo.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DialogoComponent} from './dialogo/dialogo.component';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';


//modulo para servicios
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule,} from '@angular/material/button';
import { DialogomensajeComponent, DialogOverviewExampleDialogo } from './dialogomensaje/dialogomensaje.component';
import { PerfilPublicComponent } from './perfil-public/perfil-public.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PerfilComponent,
    RegistroComponent,
    ProductosComponent,
    DialogOverviewExampleDialog,
    DialogoComponent,
    DialogomensajeComponent,
    DialogOverviewExampleDialogo,
    PerfilPublicComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogoComponent,DialogomensajeComponent]

})
export class AppModule { }
