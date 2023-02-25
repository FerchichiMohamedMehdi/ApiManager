import { Api } from "./Api";
import { Application } from "./Application";
import { Intervenant } from "./Intervenant";

export class Affectation {
    idAffectation:number;
	api:Api;
    clients:Intervenant[];
    applications:Application[];
    adressesIP:string;
    dateAffectation:Date;
    constructor(){
        
    }


   

}