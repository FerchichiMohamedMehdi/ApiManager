import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../model/Entities/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  listCategorie: Observable<Categorie[]> = this.getCategorie() ;
  categorie:Categorie=new Categorie();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getCategorie():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/api/Categories/list`);
  }

  public addCategorie(data: Categorie):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/Categories/add`, data);
}

public deleteCategorie(id : number):void{
   this.http.delete(`${this.apiServerUrl}/api/Categories/delete/${id}`);
}

public updateCategorie(data : Categorie,id:number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/Categories/update/${id}`, data);
}

public getCategorieById(id: number):Observable<Categorie>{
  return this.http.get<Categorie>(`${this.apiServerUrl}/api/Categories/getById/${id}`);
}
}
