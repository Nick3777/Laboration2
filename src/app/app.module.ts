import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { InputComponent } from './co/input/input.component';
import { MenuComponent } from './co/menu/menu.component';
import { DefaultComponent } from './co/default/default.component';
import { BestSongComponent } from './co/best-song/best-song.component';
import { IconicSongComponent } from './co/iconic-song/iconic-song.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuComponent,
    DefaultComponent,
    BestSongComponent,
    IconicSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
