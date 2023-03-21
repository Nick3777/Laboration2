import { Component, OnInit } from '@angular/core';
import {Pitem} from '../../pitem.mopel'
import { DatajugglerService } from '../../datajuggler.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  pi: Pitem = new Pitem();
  submitted = false;

  constructor(private dj: DatajugglerService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.dj.create(this.pi).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.pi = new Pitem();
  }
}
