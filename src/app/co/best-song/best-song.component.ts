import { Component } from '@angular/core';
import { SongList} from "../../services/songList";
import {ServiceService} from "../../services/service.service";
import { Song } from "../song"
import {Link} from "../link";
import {map, Observable} from "rxjs";


@Component({
  selector: 'app-best-song',
  templateUrl: './best-song.component.html',
  styleUrls: ['./best-song.component.css']
})
export class BestSongComponent {
  songs!: Song[];
  Linkkk?: Link[];
  constructor(private songService: SongList, private ser: ServiceService) {
  }
  ngOnInit() {
    this.songs = this.songService.getSongs();
    this.getLinks();
  }

  getLinks(): void {
    this.ser.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Linkkk = data;
    });
  }

}


