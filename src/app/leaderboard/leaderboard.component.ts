import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeampickerService } from '../teampicker.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  participants = [];
  team = [];
pteam = [];
  temp = null;
  count = 0;
  in = 0;

  call = null;
  constructor(public data:TeampickerService) { }

  ngOnInit() {
   this.call= this.data.abc();
  
   
  }

  getTeam(i){
    console.log(this.team);
    console.log(this.team);
    this.pteam = this.data.teams[0].data[0].data[i].team;
    console.log(this.pteam);
   // this.data.temp(this.team);
  //  this.pteam = this.team[1][name];
    this.pteam = this.pteam.sort((left, right) => {
      if (left.type < right.type) return 1;
      if (left.type > right.type) return -1;
      return 0;
  });
  }

  ngOnDestroy(){
    console.log("destroying child...");
    this.call.unsubscribe();
    this.data.pcall.unsubscribe();
   // this.data.Teamuns().unsubscribe();
  }
}
