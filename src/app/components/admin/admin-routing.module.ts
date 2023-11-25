import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

const routes: Routes = [{ path: 'listar-usuarios', component: ListarUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
