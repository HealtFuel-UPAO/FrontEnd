import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],
})
export class LoginUsuarioComponent implements OnInit {
  username: string;
  password: string;
  usuario: any;

  constructor(private router: Router, private usuarioService: UsuarioService) {}
  ngOnInit(): void {}

  login() {
    if (this.username != null && this.password != null) {
      console.log(this.username + '...' + this.password);
      this.usuario = { userName: this.username, password: this.password };
      let USER_LOGIN = this.usuarioService
        .autenticarUsuario(this.usuario)
        .subscribe((data) => {
          this.usuario = data;
          if (this.usuario != null || this.usuario != undefined) {
            Swal.fire({
              icon: 'success',
              title:
                'Bienvenido ' +
                this.usuario.firstName +
                ' ' +
                this.usuario.lastName,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Datos no válidos',
              text: 'Datos del usuario no encontrados!',
              footer:
                '<a (click)="irRegistro()" >¿Aun no te registras?</a>',
            });
          }
        });
    }
  }
  irRegistro() {
    this.router.navigate(['/registro']);
  }
}
