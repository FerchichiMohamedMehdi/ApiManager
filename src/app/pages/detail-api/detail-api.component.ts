import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/app/model/Entities/Api';
import { ApiDto } from 'src/app/model/DTO/ApiDTO';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-detail-api',
  templateUrl: './detail-api.component.html',
  styleUrls: ['./detail-api.component.css']
})
export class DetailApiComponent implements OnInit {
   api:ApiDto= new ApiDto();
  activatedRoute: any;
  idApi:number;
  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.idApi = params['id'];
    });
    this.apiService.getApi(this.idApi).subscribe(
      (response: ApiDto) => {
      this.api = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
  }

}
