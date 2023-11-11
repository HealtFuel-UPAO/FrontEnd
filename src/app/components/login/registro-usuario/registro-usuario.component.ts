import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}
  ngOnInit(): void {}

  onSubmit() {
    this.usuario.rol = 1;
    console.log(this.usuario);
    if (this.usuario != null) {
      this.usuarioService.registrarUsuario(this.usuario).subscribe((data) => {
        this.usuario = data;
      });
      this.router.navigate(['']);
      Swal.fire({
        icon: 'success',
        title:
          'Te registraste ' +
          this.usuario.firstName +
          ' ' +
          this.usuario.lastName,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
