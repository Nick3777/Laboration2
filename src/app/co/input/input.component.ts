import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ServiceU } from "../../services/auth";
import {loggedIn} from "../../services/loggedIn";
import { Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
    users!: any[];
    @ViewChild("message1") private messs1!: ElementRef;
    mess1 = document.getElementById('message2');
  constructor(private service: ServiceU,private  ServiceLog: loggedIn, private router:Router) {
      this.service.getUsers().subscribe(data => {
          this.users = data;
      });
  }

    validation(u:string, p:string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].nickname == u && this.users[i].pass == p) {
                this.ServiceLog.log = true;
                this.router.navigate(['/logged']);
            }
        }
    }


}