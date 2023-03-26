import { Component } from '@angular/core';
import { loggedIn} from "../../services/loggedIn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent {
  constructor(private log: loggedIn, private router:Router){
  }

  signOut(){
    this.log.log = false;
    this.router.navigate(['/login']);
  }

}
