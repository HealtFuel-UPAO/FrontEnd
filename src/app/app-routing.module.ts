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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
