import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Pitem} from './pitem.mopel';

@Injectable({
  providedIn: 'root'
})
export class DatajugglerService {
  dblist: AngularFireList<Pitem>;
  constructor(private db:AngularFireDatabase) {
    this.dblist=db.list('/Angular/Turnup');
  }

  getAll(): AngularFireList<Pitem> {
    return this.dblist;
  }

  create(yo: Pitem): any {
    return this.dblist.push(yo);
  }

  update(key: string, value: any): Promise<void> {
    return this.dblist.update(key, value);
  }

}


