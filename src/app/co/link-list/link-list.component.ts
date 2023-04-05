import {Component, Inject} from '@angular/core';
import {map} from "rxjs";
import {ServiceService} from "../../services/service.service";
import {Link} from "../link";


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
  displayedColumns: string[] = ['title', 'desc'];
  Linkkk?: Link[];
  constructor(private ser: ServiceService) {
  }
  ngOnInit(){
    this.getLinks();
  }
  getLinks(): void {
    this.ser.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Linkkk = data;
    });
  }
}
