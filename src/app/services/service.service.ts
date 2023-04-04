import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Link} from "../co/link";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  LinkRef: AngularFirestoreCollection<Link>;
  constructor(private db: AngularFirestore) {
    this.LinkRef = db.collection("links");

  }

  getAll(): AngularFirestoreCollection<Link> {
    return this.LinkRef;
  }
  create(li: Link): any {
    return this.LinkRef.add({ ...li });
  }

  update(id: string, data: any): Promise<void> {
    return this.LinkRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.LinkRef.doc(id).delete();
  }
}
