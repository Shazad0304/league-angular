import { Component, OnInit } from '@angular/core';
import { TeampickerService } from '../teampicker.service';

@Component({
  selector: 'app-maketeam',
  templateUrl: './maketeam.component.html',
  styleUrls: ['./maketeam.component.css']
})
export class MaketeamComponent implements OnInit {

  disable = false;
  players = [];
  playersname =[];
  selectedTeam = [];
  bowler =0;
  batsman = 0;
  keeper = 0;
  all = 0;
  checkduplicate = false;
  constructor(private getter:TeampickerService) { }


  ngOnInit() {
  }

  get(team){
    this.playersname = [];
    this.getter.getplayers(team).subscribe(x => this.players = x.map(o => o.payload.doc.data()));
    console.log(this.players);
  }

  getplayername(type){
    this.playersname = [];
    for(let it of this.players){
      if(it.type == type){
          this.playersname.push(it);
      }

    }
  }

  add(type1,name1){
    for(let i of this.selectedTeam){
      if(i.name == name1){
        alert('you already selected that player');
        this.checkduplicate = true;
      }
      else{this.checkduplicate = false}
    }
    if(!this.checkduplicate){
    this.selectedTeam.push({
      name: name1,
      type: type1
    });}
    if(this.selectedTeam.length > 10){this.disable = true}

  }

  del(i){
    this.selectedTeam.splice(i,1);
    this.disable = false;
  }

  save(){
    for(let i of this.selectedTeam){
      if(i.type == 'Batsman'){this.batsman = this.batsman + 1}
      if(i.type == 'Bowler'){this.bowler = this.bowler + 1}
      if(i.type == 'Keeper'){this.keeper = this.keeper +1}
      if(i.type == 'AllRounder'){this.all = this.all + 1}

    }

    if(this.batsman > 4 || this.bowler > 4 || this.keeper > 2|| this.all > 1){
        alert('Please select exact 4 batsman,4 bowler,2 keeper,1 AllRounder')
    }
    else{}
  }


}
