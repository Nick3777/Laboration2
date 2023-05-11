export class sugg_S{
    id?: string;
    title: string;
    sugg_by: string;
    constructor(t: string, sb: string) {
        this.title = t;
        this.sugg_by = sb;
    }
}