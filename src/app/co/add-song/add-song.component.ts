import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongList} from "../../services/songList";
import { Song } from "../song"
import { ServiceFbS } from "../../services/fbAddSong"

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  dummy = new Song('','');
  id: string;
  @ViewChild('songForm') form!: NgForm;
  constructor(private courseService: SongList, private aFbs: ServiceFbS) {
    this.id ='';
  }
  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    return outString;
  }
  ngOnInit() {}
  onSubmit({ value }: { value: Song }) {
    this.courseService.addSongs(value);
    this.id = this.makeString();
    this.aFbs.addNewSong(this.id.toString(),this.dummy.songTitle,this.dummy.songLink);
    this.dummy = new Song('','');
    this.form.reset();

  }
}
