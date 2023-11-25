import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { PerfilUsuarioComponent } from '../usuario/perfil-usuario/perfil-usuario.component';
import { SideBarModule } from '../side-bar/side-bar.module';


@NgModule({
  declarations: [
    ListarUsuariosComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SideBarModule
  ]
})
export class AdminModule { }
