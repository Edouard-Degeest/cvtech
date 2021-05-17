import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component'; 

const routes: Routes = [
  {path: 'profil', component: ProfilComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent, ProfilComponent]