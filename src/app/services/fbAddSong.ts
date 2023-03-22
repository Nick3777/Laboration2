import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
    providedIn: 'root'
})
export class ServiceFbS {
    constructor(private db: AngularFirestore) { }
    addNewSong(_newId:any, newTitle:string, newURL:string) {
        this.db.collection("songs").doc(_newId).set({Title:newTitle,URL:newURL});
    }
}