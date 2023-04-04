export class Link {

  id?: string;
  title?: string;
  desc?: string;
  url?: string;
 constructor(t: string, d: string, u: string) {
   this.title = t;
   this.desc = d;
   this.url = u;
 }
}
