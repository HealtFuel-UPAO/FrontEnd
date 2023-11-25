import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine } from '../model/routine';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  private URL: string = 'http://localhost:8080/rutinas';

  constructor(private httpClient: HttpClient) {}

  registrarRutina(rutina: Routine): Observable<Routine> {
    return this.httpClient.post<Routine>(`${this.URL}`, rutina);
  }

  listarRutinas(): Observable<Routine[]> {
    return this.httpClient.get<Routine[]>(`${this.URL}`);
  }

  eliminarRutina(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }

  modificarRutina(rutina: Routine): Observable<Routine> {
    return this.httpClient.put<Routine>(`${this.URL}/update`, rutina);
  }


}
