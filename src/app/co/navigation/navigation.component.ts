import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {loggedIn} from "../../services/loggedIn";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: loggedIn) {}

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

  loggedUser(){
    if(this.service.log)
      return `Logged in as: ${this.service.nickn}`;
    else
      return "Not logged in";
  }

}
