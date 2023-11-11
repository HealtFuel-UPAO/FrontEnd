import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [RegistroUsuarioComponent, LoginUsuarioComponent],
  imports: [CommonModule, MaterialModule]
})
export class LoginModule {}
