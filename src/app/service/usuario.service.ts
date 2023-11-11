import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private URL: String = 'http://localhost:8080/usuarios';

  constructor(private HttpClient: HttpClient) {}

  obtenerUsuarioId(id: number): Observable<Object> {
    return this.HttpClient.get<Usuario>(`${this.URL}/${id}`);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.HttpClient.get<Usuario[]>(`${this.URL}`);
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.HttpClient.post<Usuario>(`${this.URL}`, usuario);
  }

  autenticarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.HttpClient.post<Usuario>(`${this.URL}/auth`, usuario);
  }
}
