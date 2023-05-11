import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {map} from "rxjs";
import {ServiceService} from "../../services/service.service";
import {Link} from "../link";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddLinkDialogComponent} from "../add-link-dialog/add-link-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from '@angular/material/paginator';
import {loggedIn} from "../../services/loggedIn";
import {likeBehaviour} from "../../services/likes";


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements AfterViewInit{
  displayedColumns: string[] = ['title', 'desc', 'like', 'buttons'];
  Linkkk: Link[] = [];
  dataSource = new MatTableDataSource<Link>();
  log: boolean;

  constructor(private ser: ServiceService, private dialog: MatDialog, private logged: loggedIn, protected lb: likeBehaviour ) {
    this.log = logged.log
  }
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  ngAfterViewInit() {
    if(this.sort){this.dataSource.sort = this.sort}
    if(this.paginator){this.dataSource.paginator = this.paginator}
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
      this.Linkkk = data.map(link => ({
        ...link,
        likes: link.likes !== undefined ? link.likes : 0, // set default value of 0 if likes is undefined
      }));
      this.dataSource.data = this.Linkkk;
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
      likes: 0,
    }
    this.dialog.open(AddLinkDialogComponent, dialogConfig);
  }

}
