export class Song {
    constructor (private sTitle: string, private cLink: string){}
    get songTitle(): string{
        return this.sTitle;
    }
    set songTitle(sTitle: string){
        this.sTitle = sTitle;
    }
    get songLink(): string{
        return this.cLink;
    }
    set songLink(cLink: string){
        this.cLink = cLink;
    }
}
