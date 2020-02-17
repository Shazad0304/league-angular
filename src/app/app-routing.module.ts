import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaketeamComponent } from './maketeam/maketeam.component';
import { AuthguardService } from './authguard.service';
import { LoginguardService } from './loginguard.service';


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent,canActivate:[LoginguardService]},
  {path: 'maketeam',component: MaketeamComponent,canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
