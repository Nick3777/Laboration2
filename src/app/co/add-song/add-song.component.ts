import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongList} from "../../services/songList";
import { Song } from "../song"
import { ServiceFbS } from "../../services/fbAddSong"
import { FormControl, FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  dummy = new Song('','');
  urlRegEx =
      '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';
  id: string;
  urlForm: FormGroup;
  constructor(private songService: SongList, private aFbs: ServiceFbS) {
    this.id ='';
    this.urlForm = new FormGroup({
      url: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.urlRegEx)],
        updateOn: 'blur',
      }),
      title: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
    });
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

  onSubmit() {
    let formValue = this.urlForm.value;
    this.dummy = new Song(formValue.title,formValue.url);
    this.songService.addSongs(this.dummy);
    this.id = this.makeString();
    this.aFbs.addNewSong(this.id.toString(),this.dummy.songTitle,this.dummy.songLink);
    this.dummy = new Song('','');
    this.urlForm.reset();
  }
}
