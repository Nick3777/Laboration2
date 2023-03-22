import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-best-song',
  templateUrl: './best-song.component.html',
  styleUrls: ['./best-song.component.css']
})
export class BestSongComponent {
  name='Hello'
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
      private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.checkoutForm.reset();
  }
}


