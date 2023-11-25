import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModule } from './components/usuario/usuario.module';
import { SideBarModule } from './components/side-bar/side-bar.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    LoginModule,
    UsuarioModule,
    SideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
