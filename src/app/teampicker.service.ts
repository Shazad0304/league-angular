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
}
