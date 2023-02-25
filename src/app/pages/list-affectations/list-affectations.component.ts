import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Affectation } from 'src/app/model/Entities/Affectation';
import { AffectationDto } from 'src/app/model/DTO/AffectationDto';

import { Api } from 'src/app/model/Entities/Api';
import { ApiDto } from 'src/app/model/DTO/ApiDTO';
import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { AffectationService } from 'src/app/services/affectation-service.service';
import { ApiService } from 'src/app/services/api-service.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent implements OnInit {

  constructor(private afService:AffectationService,private apiService:ApiService,private iService:IntervenantService) { }
  affectations:Affectation[]=[];
  clients:Intervenant[]=[];
  searchKey:string;
  displayedColumns = ['Id','api','adressesIP','Date','Clients','Applications'];
  dataSource : MatTableDataSource<any>;


  ngOnInit(): void {
    this.getAllAffectations();
  }

  public getAllAffectations(): void {
    this.afService.getAllAffectations().subscribe(
      (response: Affectation[]) => {
        this.dataSource = new MatTableDataSource(response);
       
        console.log(this.dataSource);
     
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
      }
      
      onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
      }
      
      applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
      }
     
     
}
