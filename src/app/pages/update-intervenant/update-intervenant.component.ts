import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { TypeStructure } from 'src/app/model/enum/TypeStructure';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-update-intervenant',
  templateUrl: './update-intervenant.component.html',
  styleUrls: ['./update-intervenant.component.css']
})
export class UpdateIntervenantComponent implements OnInit {

  currentIntervenant : Intervenant;
  id: number;
  submitted =false;  
  selectedStructure : any ;
  printedAdmin : any;
  structure: TypeStructure;
  alert : boolean = false;

  types=[
    {name : "ministeres", value: TypeStructure.ministeres},
    {name : "collectivité_locale", value: TypeStructure.collectivité_locale},
    {name : "etablissement_public_administratif", value: TypeStructure.etablissement_public_administratif},
    {name : "etablissement_public_non_administratif", value: TypeStructure.etablissement_public_non_administratif},
    {name : "entreprise_public", value: TypeStructure.entreprise_public}

  ]
  print() {
    this.printedAdmin = this.selectedStructure;
  }
  selectedChangeHandler (event : any){
    this.currentIntervenant.structure = event.target.value;
  }
  constructor(private activatedRoute:ActivatedRoute ,private iService:IntervenantService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.iService.getIntervenantById(this.id).subscribe(
      (response: Intervenant) => {
        this.currentIntervenant = response;
        console.log(this.currentIntervenant);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
         }
    );
  }
  onSubmit(){
    this.submitted = true;

    this.iService.updateIntervenant(this.currentIntervenant,this.id).subscribe(data => {
      console.log(this.currentIntervenant);
      console.log(this.id);
      this.alert=true; console.log(data)}, error => {console.log(error)});
  }
  closeAlert(){
    this.alert = false;
    window.location.reload();
  }


}
