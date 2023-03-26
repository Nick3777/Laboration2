import { Component } from '@angular/core';
import {loggedIn} from "../../services/loggedIn";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private service: loggedIn) {
  }
  logDisplay(){
    if (this.service.log)
    {return 'Logged'}
    return 'Login'
  }
  logRouter(){
    if (this.service.log)
    {return 'logged'}
    return 'login'
  }
}
