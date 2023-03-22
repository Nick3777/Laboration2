import { Injectable } from '@angular/core';
import { Song } from "../co/song"

@Injectable({
    providedIn: 'root'
})
export class SongList {

    songs: Song[];
    constructor() {
        this.songs = [
            new Song('Heat Waves','https://www.youtube.com/watch?v=mRD0-GxqHVo'),
            new Song('Sunflower','https://www.youtube.com/watch?v=ApXoWvfEYVU'),
            new Song('Enemy','https://www.youtube.com/watch?v=D9G1VOjN_84')
        ]
    }
    getSongs(): Song[] {
        return this.songs;
    }

    addSongs(addS: Song){
        this.songs.push(addS);
    }
}