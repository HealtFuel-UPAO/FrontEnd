import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login/login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './components/login/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', component: LoginUsuarioComponent },
  {
    path: 'registro',
    component: RegistroUsuarioComponent,
  },
  { path: 'sideBar', loadChildren: () => import('./components/side-bar/side-bar.module').then(m => m.SideBarModule) },
  { path: 'usuario', loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
