import { Component, OnInit } from '@angular/core';
import { ServiceFbA } from "../../services/auth";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
    users!: Observable<any[]>;
  constructor(private afs: AngularFirestore) {}
 getUsers(){
     let userDoc = this.afs.firestore.collection(`users`);
     userDoc.get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             console.log(doc.id, "=>", doc.data());
         })
     })

 }

}