import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideUserComponent } from './side-user/side-user.component';
import { SideAdminComponent } from './side-admin/side-admin.component';

const routes: Routes = [{ path: 'side-user', component: SideUserComponent },
{ path: 'side-admin', component: SideAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideBarRoutingModule { }
