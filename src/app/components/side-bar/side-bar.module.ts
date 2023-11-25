import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideUserComponent } from './side-user/side-user.component';
import { SideAdminComponent } from './side-admin/side-admin.component';


@NgModule({
  declarations: [
    SideUserComponent,
    SideAdminComponent
  ],
  imports: [
    CommonModule,
    SideBarRoutingModule,
  ],

  exports: [
    SideUserComponent,
    SideAdminComponent
  ]
})
export class SideBarModule { }
