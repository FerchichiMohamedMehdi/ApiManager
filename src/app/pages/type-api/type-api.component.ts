import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TypeApi } from 'src/app/model/Entities/TypeApi';
import { TypeApiService } from 'src/app/services/type-api.service';

@Component({
  selector: 'app-type-api',
  templateUrl: './type-api.component.html',
  styleUrls: ['./type-api.component.css']
})
export class TypeApiComponent implements OnInit {
  type:TypeApi;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private typeService:TypeApiService) { }
  form!:FormGroup
  submitted=false;
  libelleTypeApi:string="";
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted =true;
    
    this.typeService.addTypeApi(this.type)
    .subscribe(data => {
      console.log(data)},
      (error:any) =>{console.log(error)});
      window.location.reload();
  }
  valuechange(event:any){
    this.type.libelleTypeApi = event.target.value;
  }
   close(){}


}
