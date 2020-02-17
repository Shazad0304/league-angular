import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService {

  constructor(private rout: Router) { }

  canActivate():boolean{
    if(localStorage.getItem('verify')){
      this.rout.navigate(['maketeam']);
      return false;
    }
    else{
      
      return true;
    }
  }

  
}
