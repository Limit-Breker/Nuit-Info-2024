export class CreneauEvenement {
    date_debut_semaine: Date;
    date_fin_semaine: Date;
    id?:number;
    constructor(date_debut_semaine: Date,id?:number) {
        this.date_debut_semaine = new Date(date_debut_semaine);
        this.date_fin_semaine = new Date(new Date(date_debut_semaine).getTime() + 7 * 24 * 60 * 60 * 1000);
        this.id=id;
    }
    
}