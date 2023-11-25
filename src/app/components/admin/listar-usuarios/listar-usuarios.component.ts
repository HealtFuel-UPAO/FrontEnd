import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  misUsuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe(
      usuarios => {
        this.misUsuarios = usuarios;
      },
      error => {
        console.error('Error al obtener la lista de usuarios', error);
      }
    );
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(
        () => {
          this.obtenerUsuarios();
          console.log('Usuario eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar el usuario', error);
        }
      );
    }
  }
}