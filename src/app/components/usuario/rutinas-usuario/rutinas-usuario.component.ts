import { Component, OnInit } from '@angular/core';
import { Routine } from 'src/app/model/routine';
import { LoginService } from 'src/app/service/login.service';
import { RoutineService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutinas-usuario',
  templateUrl: './rutinas-usuario.component.html',
  styleUrls: ['./rutinas-usuario.component.css']
})
export class RutinasUsuarioComponent implements OnInit {

  misRutinas: Routine[] = [];  // Asegúrate de inicializar con tu lista de rutinas

  constructor(private routineService: RoutineService,
    public  loginService :LoginService) { }

  ngOnInit() {
    this.listarMisRutinas();
  }

  listarMisRutinas() {
    this.routineService.listarRutinas().subscribe(
      (rutinas: Routine[]) => {
        this.misRutinas = rutinas;
      },
      error => {
        console.error('Error al obtener las rutinas:', error);
      }
    );
  }
}