import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Link} from "../link";
import {ServiceService} from "../../services/service.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddLinkDialogComponent} from "../add-link-dialog/add-link-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {

  id: string;
  title?:string;
  desc?: string;
  url?: string;
  ytembedlink?:SafeResourceUrl;

  data?: Link;

  private sub: any;

  constructor(private ser: ServiceService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private dialog: MatDialog, private snacki: MatSnackBar, private router: Router) {
    this.id='';
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.ser.getByID(this.id).snapshotChanges().subscribe(
      res => {
        this.data = {id: res.payload.id, ...res.payload.data() as Link};
        this.sanitizeURL();
      },
      err => {
        console.debug(err);
      }
    )


  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

  sanitizeURL(){
    console.log(this.data?.url);
    if(this.data?.url){
      this.url="https://www.youtube.com/embed/"+this.getId(this.data?.url);
      this.ytembedlink = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }
  getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  openAddLinkDialog(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.data = {
      id: this.id,
      title: this.data?.title,
      url: this.data?.url,
      desc: this.data?.desc,
    }
    this.dialog.open(AddLinkDialogComponent, dialogConfig);
  }
  deleteLinkSnacki(){
    let delSnack = this.snacki.open('Do you really want to delete this?', 'YES!', {duration: 3000});
    delSnack.onAction().subscribe(()=> {
      this.deleteLink();
    })
  }
  deleteLink(): void {
    if (this.id) {
      this.ser.delete(this.id)
        .then(() => {
          this.snacki.open('Delete successful! Bringing you back to home!','Ok cool', {duration: 3000})
          this.router.navigate(['/linklist'])
        })
        .catch(err => {
          console.log(err);
          this.snacki.open('Something went wrong :(', '',{duration: 3000});
        })
      ;

    }
  }
}
