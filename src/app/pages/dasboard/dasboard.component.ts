import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation-service.service';
import { ApiService } from 'src/app/services/api-service.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';



@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
 nbrApi:number;
 nbrAff:number;
 nbrInt:number;
 constructor(private afService:AffectationService,private apiService:ApiService,private intService:IntervenantService){}
 ngOnInit(){
     this.getApis();
     this.getIntervenant();
     this.getAffectations();
 }
 getApis():any{
  this.apiService.nbrApi().subscribe(
    (response: number) => {
      this.nbrApi = response;});
 }
 getAffectations():any{
  this.afService.nbrAffectations().subscribe(
    (response: number) => {
      this.nbrAff = response;});
 }
 getIntervenant():any{
  this.intService.nbrIntervenant().subscribe(
    (response: number) => {
      this.nbrInt = response;});
 }
 
}
