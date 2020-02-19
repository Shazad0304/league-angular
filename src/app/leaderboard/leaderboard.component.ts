import { Component, OnInit } from '@angular/core';
import { TeampickerService } from '../teampicker.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  participants = [];
  team = [];
  constructor(private data:TeampickerService) { }

  ngOnInit() {
    this.data.getParticipants().subscribe(x => this.participants = x.map(o => o.payload.doc.id));
  }

  getTeam(name){
    this.data.getplayers(name).subscribe(x => this.team = x.map(o => o.payload.doc.data()));
  }
}
