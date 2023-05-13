import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceU {

    constructor(private db: AngularFirestore) {
    }
    updateUserBio(nickn: string, newBio: string) {
        this.db.collection('users', ref => ref.where('nickname', '==', nickn)).get()
            .subscribe((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.update({ bio: newBio });
                });
            });
    }

    getUsers(): Observable<any[]> {
        return this.db.collection('users').valueChanges();
    }
}