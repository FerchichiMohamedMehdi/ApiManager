import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AffectationDto } from 'src/app/model/DTO/AffectationDto';
import { Application } from 'src/app/model/Entities/Application';



import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { AffectationService } from 'src/app/services/affectation-service.service';
import { ApplicationService } from 'src/app/services/application-service.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  activatedRoute: any;
  submitted = false;
  alert : boolean = false;
  form!:FormGroup
  idapi:number;
  clients:Intervenant[]=[];
  clientsId:number[]=[];
  appId:number[]=[];
  affectation:AffectationDto = new AffectationDto();
  selectedClient:any;
  apps:Application[]=[];
  shown:Boolean=false; 
  constructor(private route:ActivatedRoute,private appService:ApplicationService,
    private formBuilder: FormBuilder,private afService:AffectationService,
    private iService:IntervenantService) { }

  selectedChangeHandler(event:any,id:number){
    if (event.target.checked) {
      this.shown = !this.shown;
      this.appService.getApplicationByClient(id).subscribe(
         (response: Application[]) => {this.apps = response; } )
      this.clientsId.push(id);
     
    } else  {
      this.shown == this.shown;
      let i: number = this.clientsId.indexOf(event.target);
          this.clientsId.splice(i, 1);
          
      }
      console.log(this.clientsId);
    }
    selectedChange1Handler(event:any,id:number){
      if (event.target.checked){
       this.appId.push(id);
      }else{
        let i: number = this.appId.indexOf(event.target);
        this.appId.splice(i, 1);
      }
      console.log(this.appId);
    }
    
  
  ngOnInit(): void {
   
 this.getClients();
 this.activatedRoute = this.route.params.subscribe(params => {
  this.idapi = params['id'];
});
this.form = this.formBuilder.group({
  adresseAutorise:['',Validators.required]
 
 });
  }

  onSubmit(){
    this.submitted=true;
   
    if(this.form.invalid){
      return
    }
    this.affectation.idApi = this.idapi;
    console.log(this.idapi);
    this.affectation.clients = this.clientsId;
    this.affectation.applications = this.appId;
    this.afService.addAffectation(this.affectation)
    .subscribe(data => {this.alert=true;
      console.log(data)},
      (error:any) =>{console.log(error)});

  }
 
  public getClients(): void {
    this.iService.getAllClients().subscribe(
      (response: Intervenant[]) => {
      this.clients = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
      }
  closeAlert(){
    this.alert = false;
    window.location.reload();
  }
 
}
