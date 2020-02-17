import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rout:Router){}
  title = '';
  check = false;
  ngOnInit() {
   

    if(localStorage.getItem('verify')){
      this.title = localStorage.getItem('verify');
      this.check = true;
    }
    else{
      this.check = false;
      this.title = 'login'
    }
  
  }

  redirect(){
    this.rout.navigate(['login']);
  }

  signout(){
    localStorage.clear();
  }
}
