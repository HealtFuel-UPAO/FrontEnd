import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public editMode = false;
  public usuario!:any;
  public user!:any;


  dataSource: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['id', 'birthDate', 'description', 'email', 'firstName', 'gender', 'lastName', 'password', 'rol', 'userName'];


  filterForm: FormGroup;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor
(
  private userService: UsuarioService,
  private formBuilder: FormBuilder,
  public  loginService :LoginService,
  private router: Router,

){  
  
  this.filterForm = this.formBuilder.group({
  startDate: ['', Validators.required],
  endDate: ['', Validators.required],});
  this.dataSource = new MatTableDataSource<Usuario>([]);
  }


ngOnInit(): void {
  this.getUser();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
getUser() {
  this.usuario = this.loginService.getUser();
  console.log('usuario extraído', this.usuario);
  console.log('id '+  this.usuario.id);
        this.dataSource.data = [this.usuario];
        this.user=this.usuario;

}



toggleEditMode() {
  if (this.editMode) {


    Swal.fire({
      title: '¿Deseas editar tu perfil?',
      text: "Esta accion no se puede revertir",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo editar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Datos editados',
          'Los datos se actualizaran al reiniciar sesion',
          'success'
        );
        this.userService.modificarUsuario(this.usuario).subscribe(
          (updatedUser: Usuario) => {
            console.log('Datos actualizados:', updatedUser);
          },
          (error: any) => {
            console.error('Error al actualizar los datos:', error);
          }
        );
      }
    });
  }

  this.editMode = !this.editMode;
}



// ... tu código actual ...

deleteUser() {
  // Swal.fire({
  //   title: '¿Deseas eliminar tu perfil?',
  //   text: "Esta acción no se puede revertir",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#d33',
  //   cancelButtonColor: '#3085d6',
  //   cancelButtonText: 'Cancelar',
  //   confirmButtonText: 'Sí, deseo eliminar'
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     // Lógica para eliminar el usuario
  //     this.userService.eliminarUsuario(this.user.id).subscribe(
  //       () => {
  //         Swal.fire(
  //           'Usuario eliminado',
  //           'Tu cuenta ha sido eliminada',
  //           'success'
  //         );
  //         // Puedes redirigir a la página de inicio u otra página después de eliminar
  //         this.router.navigate(['/inicio']);
  //       },
  //       (error: any) => {
  //         console.error('Error al eliminar el usuario:', error);
  //       }
  //     );
  //   }
  // });
}

// ... tu código actual ...



}
