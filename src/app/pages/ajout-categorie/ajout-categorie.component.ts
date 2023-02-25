import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from 'src/app/model/Entities/Categorie';
import { CategorieService } from 'src/app/services/categorie-service.service';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
   categorie:Categorie =new Categorie();
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private catService:CategorieService) { }
  form!:FormGroup
   submitted=false;
   nomCat:string="";
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted =true;
    
    this.catService.addCategorie(this.categorie)
    .subscribe(data => {
      console.log(this.categorie.nomCategorie);
      console.log(data)},
      (error:any) =>{console.log(error)});
      window.location.reload();
  }
  valuechange(event:any){
    this.categorie.nomCategorie = event.target.value;
  }
   close(){}

}
