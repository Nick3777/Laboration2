import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {sugg_S} from "../sugg_song";
import {Observable} from "rxjs";

@Component({
  selector: 'app-iconic-song',
  templateUrl: './iconic-song.component.html',
  styleUrls: ['./iconic-song.component.css']
})
export class IconicSongComponent {
  LinkRef: AngularFirestoreCollection<sugg_S>;
  suggestedSongs: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.LinkRef = db.collection("SuggS");
    this.suggestedSongs = this.LinkRef.valueChanges();
  }

  submitted = false;
  songForm = new FormGroup({
    title: new FormControl('', Validators.required),
    suggestedBy: new FormControl('', Validators.required)
  });

  onSubmit() {
    this.submitted = true;
    if (this.songForm.valid) {
      const data: sugg_S = {
        title: this.songForm.value.title || '',
        sugg_by: this.songForm.value.suggestedBy || '',
      };
      this.LinkRef.add(data);
      this.songForm.reset()
      this.submitted = false;
    }
  }

  deleteAll(){
    this.LinkRef.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
  }
}