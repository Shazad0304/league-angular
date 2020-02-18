import { Component, OnInit } from '@angular/core';
import { TeampickerService } from '../teampicker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data:TeampickerService,private router:Router) { }
  users=[];
  checked = true;

  ngOnInit() {

    this.data.getusers().subscribe(x => this.users = x.map(o => o.payload.doc.data()));
    
  }

  check(user,pass){
    console.log(this.users);
    for(let users of this.users){
      if(users.name == user && users.pass == pass){
        localStorage.setItem('verify',user);
        this.checked = false;
        alert('Login successfull');
        this.router.navigate(['maketeam']);
      }
    }
    if(this.checked){alert('Invalid Credentials')}
    
  }

}
