import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDto } from 'src/app/model/DTO/ApiDTO';
import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { ApiService } from 'src/app/services/api-service.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';
import { TagsService } from 'src/app/services/tags-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Categorie } from 'src/app/model/Entities/Categorie';
import { CategorieService } from 'src/app/services/categorie-service.service';
import { Tag } from 'src/app/model/Entities/Tag';
import { TypeApi } from 'src/app/model/Entities/TypeApi';
import { TypeApiService } from 'src/app/services/type-api.service';
import { Etat } from 'src/app/model/enum/Etat';
import { Ressources } from 'src/app/model/Entities/Ressources';
import { Method } from 'src/app/model/enum/Method';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TypeApiComponent } from '../type-api/type-api.component';

export interface tag {
  nomTags: string;
}
@Component({
  selector: 'app-ajout-api',
  templateUrl: './ajout-api.component.html',
  styleUrls: ['./ajout-api.component.css']
})
export class AjoutApiComponent implements OnInit {

  api : ApiDto = new ApiDto();
  lstFiles : string ='';
  submitted = false;

  ressource : Ressources = new Ressources();
  selectedFournisseur:string ='';
  selectedType:any;
  DateSelected:Date;
  selectedEtat:any;
  selectedCat:any;
  isselected:boolean;
  SelectedMethod:any;
  alert: boolean = false;
  form!:FormGroup
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fournisseurs: Intervenant[]=[];
  categories:Categorie[]=[];
  tags:Tag[]=[];
  types:TypeApi[]=[];
  res:any[]=[];
  ressources:Ressources[]=[];
  currentDate =new Date();
  etats=[
      {name : "Published", value: Etat.published},
      {name : "Prototyped", value: Etat.prototyped},
      {name : "Blocked", value: Etat.blocked},
      {name : "Deprecated", value: Etat.deprecated},
      {name : "Retired", value: Etat.retired}
  ]
  methods=[
    {name : "POST", value: Method.POST},
    {name : "PUT", value: Method.PUT},
    {name : "GET", value: Method.GET},
    {name : "DELETE", value: Method.DELETE},
    {name : "PATCH", value: Method.PATCH},
  ]
 
 
 

  constructor(public dialog: MatDialog,private apiService:ApiService,private router:Router,private typeService:TypeApiService,private categorieService:CategorieService,private tagService:TagsService,private intervenantService:IntervenantService,private formBuilder: FormBuilder) { 
    
  }
   
  selectEtat(event :any){ this.api.etat =event.target.value;
  console.log(this.api.etat);}

  selectMethod(event:any){ this.selectMethod = event.target.value;console.log(this.selectMethod);}
   
  selectFournisseur(event : any){this.api.fournisseur =event.target.value;console.log(this.api.fournisseur);}

  selectType(event : any){ this.api.type =event.target.value;console.log(this.api.type);}

  selectCategorie(event : any){this.api.categorie = event.target.value;console.log(this.api.categorie);}

  fetchDate(event : any){ this.DateSelected =event.target.value;}
  
   

  ngOnInit(): void {
    this.getFournisseurs();
    this.getTypes();
    this.getCategories();
    
    
      this.form = this.formBuilder.group({
       nomApi:['',Validators.required],
       version:['',Validators.required],
       dateVersion:['',Validators.required],
       fournisseur:['',Validators.required],
       type:['',Validators.required],
       etat:['',Validators.required],
       url:['',Validators.required],
       res: this.formBuilder.array([]),

      });
      
  }
  onSubmit(){
        
    this.submitted = true;
    if(this.form.invalid){
      return
    }
    
    
  
    this.tags.filter((obj)=>{
     this.api.tags.push(obj.nomTag);
    })
    console.log(this.api.tags);
    this.api.dateVersion=this.DateSelected;
    console.log(this.api.dateVersion);
      this.apiService.addApi(this.api).subscribe(data => {this.alert=true;
        console.log(data)},
        (error:any) =>{console.log(error)});
        this.api.resources = this.ressources;
        this.api.dateVersion= this.DateSelected;
        this.apiService.addApi(this.api).subscribe(data =>{this.alert=true;
          console.log(data)},
          (error:any) =>{console.log(error)});

  
  }
 /* onChange($event:any,r:any){
    if ($event.target.checked) {
      this.res.push(r);
      
      this.api.resources = this.res;
      console.log(this.api.resources);
    } else {
      let i: number = 0;
      this.res.forEach((item: any) => {
        console.log(item);
        if (item.displayName == r.displayName) {
          this.res.splice(i, 1);
          return;
        }
        i++;
      });
    }
    }*/
    
  
  checked(event:any){
    if(event.target.checked){
      this.api.isDefault = true;
      console.log(this.api.isDefault);
    }else{
      this.api.isDefault= false;
    }
  }

  public getFournisseurs(): void {
    this.intervenantService.getAllFournisseurs().subscribe(
      (response: Intervenant[]) => {
      this.fournisseurs = response;},
    (error : HttpErrorResponse) => {
      alert(error.message);
    });
  }
  closeAlert(){
    this.alert = false;
    this.router.navigateByUrl("ListApis");
  }
  save(event:any): void {
    var selectFile = event.target.files;
    for(var i =0 ; i< selectFile.length;i++){
      this.lstFiles += 'file name: '+selectFile[i].name;
      this.lstFiles += 'file size (bytes): '+selectFile[i].size;
      this.lstFiles += 'file type: '+selectFile[i].type;
         console.log(this.lstFiles);
     }
    }
  
    public getTags(): void {
      this.tagService.getTags().subscribe(
        (response: Tag[]) => {
        this.tags = response;},
      (error : HttpErrorResponse) => {
        alert(error.message);
      });
    }
    public getCategories(): void {
      this.categorieService.getCategorie().subscribe(
        (response: Categorie[]) => {
        this.categories = response;},
      (error : HttpErrorResponse) => {
        alert(error.message);
      });
    }
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();

      if (value) {
        this.tags.push({nomTag:value});
         console.log(this.tags);
      }
  
     
      event.chipInput!.clear();
    }
    remove(tag: Tag): void {
      const index = this.tags.indexOf(tag);
  
      if (index >= 0) {
        this.tags.splice(index, 1);
      }
    }
    public getTypes(): void {
      this.typeService.getTypeApis().subscribe(
        (response: TypeApi[]) => {
        this.types = response;},
      (error : HttpErrorResponse) => {
        alert(error.message);
      });
    }
    saveRessource(event:any):void{
      this.ressource.method = this.SelectedMethod;
      console.log(this.ressource);
      this.ressources.push(this.ressource);
      console.log(this.ressources);
    }
    openDialog(){
      let dialogRef = this.dialog.open(TypeApiComponent);
      dialogRef.afterClosed().subscribe(resul=>{
      });
    }
  }


