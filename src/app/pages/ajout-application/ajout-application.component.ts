import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Application } from 'src/app/model/Entities/Application';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplicationService } from 'src/app/services/application-service.service';
import { ApplicationDTO } from 'src/app/model/DTO/ApplicationDTO';
@Component({
  selector: 'app-ajout-application',
  templateUrl: './ajout-application.component.html',
  styleUrls: ['./ajout-application.component.css']
})
export class AjoutApplicationComponent implements OnInit {

  application:ApplicationDTO= new ApplicationDTO();
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private appService:ApplicationService ) { }
   form!:FormGroup
   submitted=false;
   nomApp:string="";
  ngOnInit(): void {
    
    
  }
 onSubmit(){
  this.submitted =true;
  this.application.idIntervenant = this.data.id;
  console.log(this.application.idIntervenant);
  console.log(this.application.nomApplication);
  
  this.appService.addApplication(this.application)
  .subscribe(data => {
    console.log(this.application.nomApplication);
    console.log(data)},
    (error:any) =>{console.log(error)});

}
valuechange(event:any){
  this.application.nomApplication = event.target.value;
console.log(this.application.nomApplication);
}
 close(){}
}
