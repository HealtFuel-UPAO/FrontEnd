import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



export const navbarDataUser = [
  {
    routerLink: '/usuario/perfilUsuario',
    icon: 'fa-solid fa-user',
    label: 'Perfil'
  },
  {
    routerLink: '/usuario/rutinasUsuario',
    icon: 'fa-solid fa-bookmark',
    label: 'Rutinas'
  },
];

interface sideNavToggle {
  screenWidth: number,
  collapsed: boolean,
}

@Component({
  selector: 'app-side-admin',
  templateUrl: './side-admin.component.html',
  styleUrls: ['./side-admin.component.css']
})
export class SideAdminComponent implements OnInit {
  @Output() onToogleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarDataUser;


  @HostListener('window:resize ', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.onToogleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToogleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed = false;
    this.onToogleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  constructor(private router: Router,) {

  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }




}
