import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iconic-song',
  templateUrl: './iconic-song.component.html',
  styleUrls: ['./iconic-song.component.css']
})
export class IconicSongComponent {
  suggestedSongs: { title: string, suggestedBy: string }[] = [];
  submitted = false;
  songForm = new FormGroup({
    title: new FormControl(''),
    suggestedBy: new FormControl('')
  });

  onSubmit() {
    this.submitted = true;
    if (this.songForm.valid) {
      this.suggestedSongs.push({
        title: this.songForm.value?.title?? '',
        suggestedBy: this.songForm.value?.suggestedBy?? ''
      });
      this.songForm.reset({title:'', suggestedBy: ''})
    }
  }

}