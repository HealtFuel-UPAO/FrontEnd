import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public loginStatusSubject = new Subject<boolean>();

  public loginUser(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  public isLoggetIn() {
    let userStr = localStorage.getItem('user');
    return userStr !== null;
  }
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  // Cerrar sesión
  public logOut() {
    localStorage.removeItem('user');
    return true;
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr !== null) {
      return JSON.parse(userStr);
    } else {
      this.logOut();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.roles[0].name;
  }

}