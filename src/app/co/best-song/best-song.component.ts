import {Component} from '@angular/core';
import {map} from "rxjs";
import {ServiceService} from "../../services/service.service";
import {Link} from "../link";
import {OnInit} from "@angular/core";
import {likeBehaviour} from "../../services/likes";
import {loggedIn} from "../../services/loggedIn";

@Component({
  selector: 'app-best-song',
  templateUrl: './best-song.component.html',
  styleUrls: ['./best-song.component.css']
})
export class BestSongComponent implements OnInit {
    bestSongs: Link[] = [];
    log: boolean;
    constructor(private ser: ServiceService, protected lb: likeBehaviour, private l: loggedIn) {
        this.log = l.log;
    }

    ngOnInit() {
        this.ser.getAll().snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                    ({ id: c.payload.doc.id, ...c.payload.doc.data() })
                )
            )
        ).subscribe(data => {
            this.bestSongs = data.sort((a, b) => b.likes - a.likes).slice(0, 6);
        });
    }
}



