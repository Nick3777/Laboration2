import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";
import { ServiceU} from "../../services/auth";
import {loggedIn} from "../../services/loggedIn";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileName : string | undefined;
  profileEmail : string | undefined;
  profileBio : string | undefined;
  profileJob : string | undefined;
  profileAge : string | undefined;
  profileCountry : string | undefined;

  profileLikedSongs : string[] | undefined;
  profileImageUrl: Observable<string> | undefined;

  constructor(private storage: AngularFireStorage, private lu: ServiceU, private li: loggedIn) {
    this.profileName = this.li.nickn
    this.userInfo()
    const imRef = this.profileName + '.jpg'

    this.searchForImageInStorage(imRef).then((exists) => {
      if (exists) {
        const storageRef: AngularFireStorageReference = this.storage.ref(imRef);
        this.profileImageUrl = storageRef.getDownloadURL();
      } else {
        const storageRef: AngularFireStorageReference = this.storage.ref('general.jpg');
        this.profileImageUrl = storageRef.getDownloadURL();
      }
    });
  }

  userInfo(){
    this.lu.getUsers().subscribe(users => {
      const matchingUser = users.find(user => user.nickname === this.profileName);
      if (matchingUser) {
        // Update the component properties with the matching user data
        this.profileEmail = matchingUser.email;
        this.profileBio = matchingUser.bio;
        this.profileLikedSongs = matchingUser.likedSongs;
        this.profileJob = matchingUser.job;
        this.profileAge = matchingUser.age;
        this.profileCountry = matchingUser.country;
    }
    });
  }
  async searchForImageInStorage(imageName: string): Promise<boolean> {
    try {
      const storageRef: AngularFireStorageReference = this.storage.ref(imageName);
      await storageRef.getDownloadURL().toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }
}

