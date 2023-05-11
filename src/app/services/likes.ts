import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Link} from "../co/link";
import {loggedIn} from "./loggedIn";
import {ServiceService} from "./service.service";

@Injectable({
    providedIn: 'root'
})
export class likeBehaviour {

    constructor(private logged: loggedIn, private ser: ServiceService) { }
    onLikeClick(event: Event, docId: string, link: Link) {
        event.stopPropagation();
        if (this.logged.log) {
            const userId = this.logged.nickn;
            const userLikes = link.userLikes || [];
            const index = userLikes.indexOf(userId);
            if (index === -1) {
                // User has not liked the song yet
                userLikes.push(userId);
                const updatedLikes = link.likes + 1;
                this.ser.update(docId, {likes: updatedLikes, userLikes: userLikes});
                link.likes = updatedLikes;
                link.userLikes = userLikes;
            } else {
                // User has already liked the song
                userLikes.splice(index, 1);
                const updatedLikes = link.likes - 1;
                this.ser.update(docId, {likes: updatedLikes, userLikes: userLikes});
                link.likes = updatedLikes;
                link.userLikes = userLikes;
            }
        }
    }

    isLiked(link: Link): boolean {
        if (this.logged.log) {
            const userId = this.logged.nickn;
            return link.userLikes && link.userLikes.includes(userId);
        }
        return false;
    }
}
