import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-list-intervenants',
  templateUrl: './list-intervenants.component.html',
  styleUrls: ['./list-intervenants.component.css']
})
export class ListIntervenantsComponent implements OnInit {
  intervenants : Intervenant[]=[];
  searchKey:string;
  p:number=1;
  displayedColumns = ['Id','nomIntervenant','email','numTelephone','fax','type','actions'];
  dataSource : MatTableDataSource<any>;
  term:string="";
  constructor(private iService: IntervenantService) { }

  ngOnInit(): void {
    this.getFournisseurs();
    
  }
  
  public getFournisseurs(): void {
    this.iService.getIntervenants().subscribe(
      (response: Intervenant[]) => {
        this.dataSource = new MatTableDataSource(response);
     
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
      }
      supprimerFournisseur(f : Intervenant){
        let conf = confirm("Ete vouz sur?");
        if(conf){
          this.iService.deleteIntervenant(f.idIntervenant).subscribe(()=>{
            console.log("Intervenant Supprimé !");
          
            window.location.reload();
          });
      }
      }
      onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
      }
      
      applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
      }
     
     
}
