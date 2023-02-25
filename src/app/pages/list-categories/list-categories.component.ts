import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/app/model/Entities/Api';
import { Categorie } from 'src/app/model/Entities/Categorie';
import { ApiService } from 'src/app/services/api-service.service';
import { CategorieService } from 'src/app/services/categorie-service.service';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { ListApiCategoriesComponent } from '../list-api-categories/list-api-categories.component';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories:Categorie[]=[];
  apis:Api[]=[];
  activatedRoute: any;
  idCategorie: any;
 
  constructor(private categorieService:CategorieService,private route:ActivatedRoute,private apiService:ApiService,public dialog: MatDialog) { }
   getValue(){
    
   }
  ngOnInit(): void {
    this.getCategories();
   

  }

  public getCategories(): void {
    this.categorieService.getCategorie().subscribe(
      (response: Categorie[]) => {
      this.categories = response;},
    (error : HttpErrorResponse) => {
      alert(error.message);
    });
   
  }
  listerApis(id:any){
    this.apiService.getApisByCat(id).subscribe(
      (response: Api[]) => {
      this.apis = response;},
    (error : HttpErrorResponse) => {
      alert(error.message);
    });
  }

  openDialog(idC:any){
     let dialogRef = this.dialog.open(ListApiCategoriesComponent,{data:{id:idC}});
   dialogRef.afterClosed().subscribe(resul=>{
    
   });
  }
  openDialog2(){
    let dialogRef = this.dialog.open(AjoutCategorieComponent);
    dialogRef.afterClosed().subscribe(resul=>{
    
    });
  }
  supprimerCat(idcat :number):void{
      console.log(idcat);
      let conf = confirm("Etes-vous sur?");
      if(conf){
          this.categorieService.deleteCategorie(idcat);
           alert("Categorie Supprimé");
      
          window.location.reload();
      }
  }

}
