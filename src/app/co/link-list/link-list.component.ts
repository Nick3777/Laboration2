import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {map} from "rxjs";
import {ServiceService} from "../../services/service.service";
import {Link} from "../link";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddLinkDialogComponent} from "../add-link-dialog/add-link-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements AfterViewInit{
  displayedColumns: string[] = ['title', 'desc', 'buttons'];
  Linkkk?: Link[];
  dataSource = new MatTableDataSource<Link>();


  constructor(private ser: ServiceService, private dialog: MatDialog) {
  }
  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {
    if(this.sort){this.dataSource.sort = this.sort};
  }
  ngOnInit(){
    this.getLinks();
    this.dataSource = new MatTableDataSource(this.Linkkk);
  }

  getLinks(): void {
    this.ser.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.dataSource.data = data;

    });
  }
  openAddLinkDialog(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.data = {
      id: '',
      title: '',
      url: '',
      desc: '',
    }

    this.dialog.open(AddLinkDialogComponent, dialogConfig);
  }
}
