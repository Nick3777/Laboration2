import { Injectable } from '@angular/core';
import { Song } from "../co/song"

@Injectable({
    providedIn: 'root'
})
export class SongList {

    songs: Song[];
    constructor() {
        this.songs = [
            new Song('title1','https://www.youtube.com/watch?v=t0LSUxncYaM'),
            new Song('title1','https://www.youtube.com/watch?v=8PKNK4N9IJE'),
            new Song('title1','https://www.youtube.com/watch?v=5hWI9Yw8Lnk')
        ]
    }
    getSongs(): Song[] {
        return this.songs;
    }

    addSongs(addS: Song){
        this.songs.push(addS);
    }
}