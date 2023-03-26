import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceU {

    constructor(private db: AngularFirestore) {
    }

    getUsers(): Observable<any[]> {
        return this.db.collection('users').valueChanges();
    }
}