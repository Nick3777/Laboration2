import { Component } from '@angular/core';
import {Song} from '../song'

@Component({
  selector: 'app-iconic-song',
  templateUrl: './iconic-song.component.html',
  styleUrls: ['./iconic-song.component.css']
})
export class IconicSongComponent {

  iSongs : Song[];

  constructor(){
    this.iSongs = [
      new Song('Blinding Lights','https://youtu.be/fHI8X4OXluQ'),
      new Song('Shape of You','https://youtu.be/JGwWNGJdvx8'),
      new Song('Dance Monkey','https://youtu.be/q0hyYWKXF0Q'),
      new Song('Someone You Loved','https://youtu.be/zABLecsR5UE'),
      new Song('Rockstar','https://youtu.be/UceaB4D0jpo')
    ]
  }

}
