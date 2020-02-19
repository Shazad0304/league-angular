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
  participants = [];
  checked = true;

  ngOnInit() {

    this.data.getusers().subscribe(x => this.users = x.map(o => o.payload.doc.data()));
    this.data.getParticipants().subscribe(x => this.participants = x.map(o => o.payload.doc.id));
    
  }

  check(user,pass){
    if(this.participants.find(x => x == user)){alert('you already created the team, Your team will be shown in leaderboard after 1st match');}
    else{
    for(let users of this.users){
      if(users.name == user && users.pass == pass){
        localStorage.setItem('verify',user);
        this.checked = false;
        alert('Login successfull');
        
      }
    }
    if(this.checked){alert('Invalid Credentials')}
    
  }
  }
}
