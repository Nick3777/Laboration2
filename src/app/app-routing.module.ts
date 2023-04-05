import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './co/input/input.component';
import { DefaultComponent } from "./co/default/default.component";
import { BestSongComponent} from "./co/best-song/best-song.component";
import {IconicSongComponent} from "./co/iconic-song/iconic-song.component";
import {LoggedComponent} from "./co/logged/logged.component";
import {SongComponent} from "./co/song/song.component";
import {LinkListComponent} from "./co/link-list/link-list.component";

const routes: Routes = [
  { path: 'login', component: InputComponent },
  { path: '', component: DefaultComponent },
  { path: 'bestSong', component: BestSongComponent },
  { path: 'iconicSong', component: IconicSongComponent },
  { path: 'logged', component: LoggedComponent },
  { path: 'linklist/:id', component: SongComponent},
  { path: 'linklist', component: LinkListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
