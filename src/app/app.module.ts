import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
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
import { AddSongComponent } from './co/add-song/add-song.component';
import { LoggedComponent } from './co/logged/logged.component';
import { SongComponent } from './co/song/song.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './co/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LinkListComponent } from './co/link-list/link-list.component';
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { AddLinkDialogComponent } from './co/add-link-dialog/add-link-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        MenuComponent,
        DefaultComponent,
        BestSongComponent,
        IconicSongComponent,
        AddSongComponent,
        LoggedComponent,
        SongComponent,
        NavigationComponent,
        LinkListComponent,
        AddLinkDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        CdkTableModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatCardModule,
    ],
  providers: [AddLinkDialogComponent, MatSnackBar],
  bootstrap: [AppComponent],
  entryComponents: [AddLinkDialogComponent]
})
export class AppModule { }
