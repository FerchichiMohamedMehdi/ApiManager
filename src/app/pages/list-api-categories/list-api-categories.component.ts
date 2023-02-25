import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Api } from 'src/app/model/Entities/Api';
import { ApiService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-list-api-categories',
  templateUrl: './list-api-categories.component.html',
  styleUrls: ['./list-api-categories.component.css']
})
export class ListApiCategoriesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private apiService:ApiService) { }
  apis:Api[]=[];
  ngOnInit(): void {
    this.getApisByCat();
  }
  getApisByCat(){
    this.apiService.getApisByCat(this.data.id).subscribe(
      (response: Api[]) => {
      this.apis = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
  }

}
