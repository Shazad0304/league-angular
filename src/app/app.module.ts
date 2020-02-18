import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaketeamComponent } from './maketeam/maketeam.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TeampickerService } from './teampicker.service';
import { AuthguardService } from './authguard.service';
import { LoginguardService } from './loginguard.service';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MaketeamComponent,
    RulesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule // firestore
  ],
  providers: [TeampickerService,AuthguardService,LoginguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
