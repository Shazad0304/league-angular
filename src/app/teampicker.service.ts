import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeampickerService {

  constructor(private fire:AngularFirestore) {
   }

   getplayers(team){
     return this.fire.collection('/'+team).snapshotChanges();
   }

   getusers(){
     return this.fire.collection('/users').snapshotChanges();
   }

   savedata(name,list){
     for(let i in list){
      this.fire.collection('/'+name).doc(i.toString()).set(list[i])
     }
      
   }

   deluser(name){
     this.fire.collection('/users').doc(name).delete();
   }

   saveParticipant(name){
    this.fire.collection('/participants').doc(name).set({teamAdded:true});
   }

   getParticipants(){
     return this.fire.collection('/participants').snapshotChanges();
   }
}
