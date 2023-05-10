import { Component } from '@angular/core';
import { SongList} from "../../services/songList";
import { Song } from "../song";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{ServiceService} from "../../services/service.service";
import { loggedIn} from "../../services/loggedIn";
import {Link} from "../link";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent{
  dummy = new Song('','');
  lel = new Link('','','', 0, []);
  urlRegEx =
      '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';
  id: string;
  urlForm: FormGroup;
  constructor(private songService: SongList, private ser: ServiceService , private lgI: loggedIn) {
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
      desc: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
    });
  }

  formProcess(){
    let formValue = this.urlForm.value;
    this.lel = new Link(formValue.title, formValue.desc, formValue.url, 0, []);
    this.ser.create(this.lel);
  }
  onSubmit() {
    if(!this.urlForm.valid)
      return;
    else{
      if(this.lgI.log)
        this.formProcess()
    }
  }
}
