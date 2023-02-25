import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiDto } from 'src/app/model/DTO/ApiDTO';
import { Api } from 'src/app/model/Entities/Api'
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/services/api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-apis',
  templateUrl: './list-apis.component.html',
  styleUrls: ['./list-apis.component.css']
})
export class ListApisComponent implements OnInit {
   id: number;
  public apis: ApiDto[] = [];
  public api: ApiDto = new ApiDto;
  searchKey: string;
  displayedColumns = ['idApi','nomApi','etat','type','version','nomFournisseur','actions'];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;
  datasource: MatTableDataSource<any>;
  //applyFilter(event: Event) {
  //  const filterValue = (event.target as HTMLInputElement).value;
  //  this.datasource.filter = filterValue.trim().toLowerCase();
 // }
  constructor(private apiService : ApiService , private router:Router){}
  ngOnInit() {
    this.apiService.getApis().subscribe((response:any)=>{
      this.datasource = new MatTableDataSource(response);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.matSort;
      console.log(this.datasource);

    });
    
  }

  public getApis(): void {
    this.apiService.getApis().subscribe(
      (response: ApiDto[]) => {
      this.apis = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
      }
    
     
     
      supprimerApi(api: Api){
        let conf = confirm("Etes-vous sur?");
        if(conf){
         this.deleteFunction(api);
          this.supprimeApi(api);
          this.apiService.deleteApi(this.id);
            alert("Api supprimé");
        
            window.location.reload();
        }

      }
  supprimeApi(api: Api) {
   this.apis.forEach((cur, index)=>{
     if(api.idApi === cur.idApi){
       this.apis.splice(index,1);
     }
   });
  }
  deleteFunction(api:Api){
    this.datasource.data.splice(this.datasource.data.indexOf(api.idApi), 1);
}
onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

applyFilter() {
  this.datasource.filter = this.searchKey.trim().toLowerCase();
}

}
