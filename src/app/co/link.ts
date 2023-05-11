export class Link {

  id?: string;
  title?: string;
  desc?: string;
  url?: string;
  likes: number;
  userLikes: string[];
 constructor(t: string, d: string, u: string, l: number, ls: string[]) {
   this.title = t;
   this.desc = d;
   this.url = u;
   this.likes = l;
   this.userLikes = ls;
 }
}
