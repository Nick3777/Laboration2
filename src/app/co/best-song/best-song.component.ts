import { Component } from '@angular/core';
import { SongList} from "../../services/songList";

import { Song } from "../song"



@Component({
  selector: 'app-best-song',
  templateUrl: './best-song.component.html',
  styleUrls: ['./best-song.component.css']
})
export class BestSongComponent {
  songs!: Song[];
  constructor(private songService: SongList) {
  }
  ngOnInit() {
    this.songs = this.songService.getSongs();
  }



}


