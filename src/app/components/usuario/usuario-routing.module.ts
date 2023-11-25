import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RutinasUsuarioComponent } from './rutinas-usuario/rutinas-usuario.component';

const routes: Routes = [{ path: 'perfilUsuario', component: PerfilUsuarioComponent },
{ path: 'rutinasUsuario', component: RutinasUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
