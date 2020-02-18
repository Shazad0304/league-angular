import { Component, OnInit } from '@angular/core';
import { TeampickerService } from '../teampicker.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-maketeam',
  templateUrl: './maketeam.component.html',
  styleUrls: ['./maketeam.component.css']
})
export class MaketeamComponent implements OnInit {

  
  capcheck = false;
  user = '';
  disable = false;
  savedisable = true;
  players = [];
  playersname =[];
  selectedTeam = [];
  bowler =0;
  batsman = 0;
  keeper = 0;
  all = 0;
  checkduplicate = false;
  constructor(private getter:TeampickerService,private rout:Router) { }


  ngOnInit() {
  }

  get(team,type){
    type.value = 'Select Type'; //reseting
    
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
//list khali na ho and duplicate na ho
  add(type1,name1,cap){
    
    if(this.selectedTeam.find(x => x.name == name1)){
      alert('you already select this Player');
    }
    else{
    if(type1 == '' || name1 == ''){
      alert('all fields are mandatory');
    }
    else{
      if(cap.checked == true && this.capcheck != true){
        this.capcheck = true;
        cap.checked = false;
      this.selectedTeam.push({
        name: name1,
        type: type1,
        captain: 'C'
      });
    }
    else{
      this.selectedTeam.push({
        name: name1,
        type: type1,
      }); 
    }
    
    if(this.selectedTeam.length > 10){this.disable = true;this.savedisable = false}

  }
}
  }

  del(i){
    if(this.selectedTeam[i].captain){this.capcheck = false}
    this.selectedTeam.splice(i,1);
    this.disable = false;
    this.savedisable = true;
  }

  save(){
    this.user = localStorage.getItem('verify');
    for(let i of this.selectedTeam){
      if(i.type == 'Batsman'){this.batsman = this.batsman + 1}
      if(i.type == 'Bowler'){this.bowler = this.bowler + 1}
      if(i.type == 'Keeper'){this.keeper = this.keeper +1}
      if(i.type == 'AllRounder'){this.all = this.all + 1}

    }
    if(this.capcheck == false){alert('please select a Captain')}
    else if(this.batsman > 4 || this.bowler > 4 || this.keeper > 1|| this.all > 2){
        alert('Please select 4 batsman,4 bowler,1 keeper,2 AllRounder and choose 1 Captain')
    }
    else{
      if(confirm("Are you sure? it can't be undone.")){
      this.getter.savedata(this.user,this.selectedTeam);
      
      this.getter.deluser(this.user);
      alert('Team Added')
      localStorage.clear();
      this.rout.navigate(['home']);
      }
    }
  }


}
