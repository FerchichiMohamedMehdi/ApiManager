
import { Categorie } from "./Categorie";
import { Etat } from "../enum/Etat";

import { Intervenant } from "./Intervenant";
import { Ressources } from "./Ressources";
import { Tag } from "./Tag";
import { TypeApi } from "./TypeApi";

export class Api {
    idApi:number;
	nomApi:String;
	description:String;
    type :TypeApi;
	etat:Etat;
	 listFiles :String;
	 url:String;
	 version:String;
     isDefault:boolean;
     dateVersion: Date;
	 intervenant: Intervenant= new Intervenant;
	 tags:Tag[];
     categorie:Categorie;
     resources:Ressources[];

    constructor(){
        
    }


   

}