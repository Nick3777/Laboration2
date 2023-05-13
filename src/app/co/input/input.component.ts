import {Component } from '@angular/core';
import { ServiceU } from "../../services/auth";
import {loggedIn} from "../../services/loggedIn";
import { Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
    users!: any[];
  constructor(private service: ServiceU,private  ServiceLog: loggedIn, private router:Router, private snacki: MatSnackBar) {
      this.service.getUsers().subscribe(data => {
          this.users = data;
      });
  }

    validation(u:string, p:string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].nickname == u && this.users[i].pass == p) {
                this.ServiceLog.log = true;
                this.ServiceLog.nickn = this.users[i].nickname;
                this.router.navigate(['/logged']);
                return;
            }
        }
        this.snacki.open('Username or password incorrect', 'Close', {
            duration: 3000
        });
    }


}