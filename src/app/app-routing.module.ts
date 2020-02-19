import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaketeamComponent } from './maketeam/maketeam.component';
import { AuthguardService } from './authguard.service';
import { LoginguardService } from './loginguard.service';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent,canActivate:[LoginguardService]},
  {path: 'maketeam',component: MaketeamComponent,canActivate: [AuthguardService]},
  {path: 'rules',component:RulesComponent},
  {path: 'about',component:AboutComponent},
  {path: 'leaderboard',component:LeaderboardComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
