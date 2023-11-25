import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FormsModule } from '@angular/forms';
import { SideBarModule } from '../side-bar/side-bar.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RutinasUsuarioComponent } from './rutinas-usuario/rutinas-usuario.component';


@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    RutinasUsuarioComponent

  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    SideBarModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
