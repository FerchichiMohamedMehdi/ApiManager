
import { Categorie } from "../Entities/Categorie";
import { Etat } from "../enum/Etat";

import { Intervenant } from "../Entities/Intervenant";
import { Ressources } from "../Entities/Ressources";
import { TypeApi } from "../Entities/TypeApi";


export class ApiDto {
	idApi:number;
	nomApi:String;
	description:String;
	listFiles :String;
	url:String;
	version:String;
	isDefault:boolean;
	dateVersion: Date;
	type :TypeApi;
	fournisseur:Intervenant;
	etat:Etat;
	resources:Ressources[];	 
	tags:String[]=[];
   categorie:Categorie;

    constructor(){
        
    }


   

}