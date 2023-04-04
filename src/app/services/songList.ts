import { Injectable } from '@angular/core';
import { Song } from "../co/song"
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SongList {

    songs: Song[];
    songArray: Observable<any[]>;
    constructor(private db: AngularFirestore) {
        this.songs = [
            new Song('Heat Waves','https://www.youtube.com/watch?v=mRD0-GxqHVo'),
            new Song('Sunflower','https://www.youtube.com/watch?v=ApXoWvfEYVU'),
            new Song('Enemy','https://www.youtube.com/watch?v=D9G1VOjN_84')
        ]
    this.songArray = db.collection("songs").valueChanges();
    }
    getSongs(): Song[] {
        return this.songs;
    }
    getSongArray(): Observable<Song[]>{
      return this.songArray;
    }

    addSongs(addS: Song){
        this.songs.push(addS);
    }
}
