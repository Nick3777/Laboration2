import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {Link} from "../link";
import {ServiceService} from "../../services/service.service";
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-link-dialog',
  templateUrl: './add-link-dialog.component.html',
  styleUrls: ['./add-link-dialog.component.css']
})
export class AddLinkDialogComponent {
  lel = new Link('','','');
  id?: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder, private ser: ServiceService, public MatDialogRef: MatDialogRef<AddLinkDialogComponent>) {
    this.lel = new Link(this.data.title, this.data.desc, this.data.url);
    this.id=this.data.id;
  }
  form = this.formBuilder.group({
    title: this.data.title.toString(),
    url: this.data.url.toString(),
    desc: this.data.desc.toString()
  })
  ngOnInit(){
    console.log(this.lel.title);
  }
  save(){

    if(this.id &&this.id !=''){
      console.log('Houston, were updating!');
      this.ser.update(this.id, {
        title: <string>this.form.get('title')?.value,
        url: <string>this.form.get('url')?.value,
        desc: <string>this.form.get('desc')?.value
      });
    }
    else{
      this.lel = new Link(<string>this.form.get('title')?.value, <string>this.form.get('desc')?.value, <string>this.form.get('url')?.value);
      this.ser.create(this.lel);
    }
    this.MatDialogRef.close();
  }
  close(){
    this.MatDialogRef.close();
  }
}
