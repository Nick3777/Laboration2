import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongList} from "../../services/songList";
import { Song } from "../song"

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  dummy = new Song('','');
  @ViewChild('songForm') form!: NgForm;
  constructor(private courseService: SongList) {}
  ngOnInit() {}
  onSubmit({ value }: { value: Song }) {
    this.courseService.addSongs(value);
    this.dummy = new Song('','');
    this.form.reset();
  }
}
