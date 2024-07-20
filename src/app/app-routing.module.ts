import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule),
  },
  {
    path: 'create-user',
    loadChildren: () => import('./create-user/create-user.module').then(m => m.CreateUserModule),
  },

  {
    path: 'edit-user',
    loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./user-login/user-login.module').then(m => m.UserLoginModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
