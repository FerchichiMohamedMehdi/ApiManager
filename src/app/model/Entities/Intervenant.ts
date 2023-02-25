

import { Application } from "./Application";
import { TypeStructure } from "../enum/TypeStructure";
import { TypeIntervenant } from "../enum/TypeIntervenant";


export class Intervenant{
    idIntervenant : number = 0;
    nomIntervenant : string = '';
    adresse : string = '' ;
    email : string = '';
    numTelephone : string ='';
    fax : string= '';
    structure:TypeStructure;
    applications: Application[];
    type:TypeIntervenant;
    constructor(){}
}