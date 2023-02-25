import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/model/Entities/Application';
import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';
import { AjoutApplicationComponent } from '../ajout-application/ajout-application.component';

@Component({
  selector: 'app-detail-intervenant',
  templateUrl: './detail-intervenant.component.html',
  styleUrls: ['./detail-intervenant.component.css']
})
export class DetailIntervenantComponent implements OnInit {
  
  f:Intervenant=new Intervenant();
  application:Application;
  activatedRoute: any;
  idIntervenant:number;
  constructor(private route:ActivatedRoute,private iService:IntervenantService,public dialog: MatDialog) { }
  nomApp:string;
  ngOnInit(): void {
    this.activatedRoute = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.idIntervenant = params['id'];
    });
    this.iService.getIntervenantById(this.idIntervenant).subscribe(
      (response: Intervenant) => {
      this.f = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
  }
  openDialog(){
   let dialogRef = this.dialog.open(AjoutApplicationComponent,{data:{id:this.idIntervenant}});
   dialogRef.afterClosed().subscribe(resul=>{
    
   });
  }

}
