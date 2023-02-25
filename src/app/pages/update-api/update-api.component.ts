import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDto } from 'src/app/model/DTO/ApiDTO';
import { Categorie } from 'src/app/model/Entities/Categorie';
import { Intervenant } from 'src/app/model/Entities/Intervenant';
import { Ressources } from 'src/app/model/Entities/Ressources';
import { Tag } from 'src/app/model/Entities/Tag';
import { TypeApi } from 'src/app/model/Entities/TypeApi';
import { Etat } from 'src/app/model/enum/Etat';
import { Method } from 'src/app/model/enum/Method';
import { ApiService } from 'src/app/services/api-service.service';
import { CategorieService } from 'src/app/services/categorie-service.service';
import { TypeApiService } from 'src/app/services/type-api.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { TagsService } from 'src/app/services/tags-service.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css']
})
export class UpdateApiComponent implements OnInit {

  api : ApiDto = new ApiDto();
  lstFiles : string ='';
  submitted = false;
  
  
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
  id:number;
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
 
 
 

  constructor( private activatedRoute:ActivatedRoute,private router:Router,private apiService:ApiService,private typeService:TypeApiService,private categorieService:CategorieService,private tagService:TagsService,private intervenantService:IntervenantService,private formBuilder: FormBuilder) { }

  selectEtat(event :any){ this.api.etat =event.target.value;
  console.log(this.api.etat);}

  selectMethod(event:any){ this.selectMethod = event.target.value;}
   
  selectFournisseur(event : any){this.api.fournisseur =event.target.value;
  console.log(this.api.fournisseur);}

  selectType(event : any){ this.api.type =event.target.value;
  console.log(this.api.type)}

  selectCategorie(event : any){this.api.categorie = event.target.value;}

  fetchDate(event : any){ this.DateSelected =event.target.value;}
  
   

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getApi(this.id).subscribe(
      (response: ApiDto) => {
        this.api = response;
        console.log(this.api);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
         }
    )
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

      })
      
  }
  onSubmit(){
        
    this.submitted = true;
    if(this.form.invalid){
      return
    }

    this.tags.filter((obj)=>{
     this.api.tags.push(obj.nomTag);
    });
        this.apiService.updateApi(this.api,this.id).subscribe(data =>{this.alert=true;
          console.log(data)},
          (error:any) =>{console.log(error)});

  
  }

    
  
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

 
}
