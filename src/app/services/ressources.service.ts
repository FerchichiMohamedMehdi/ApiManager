import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ressources } from '../model/Entities/Ressources';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  listCategorie: Observable<Ressources[]> = this.getRessources() ;
  ressource:Ressources=new Ressources();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getRessources():Observable<Ressources[]>{
    return this.http.get<Ressources[]>(`${this.apiServerUrl}/api/Ressources/list`);
  }

  public addRessource(data: Ressources):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/Ressources/add`, data);
}

public deleteRessource(id : number):Observable<Ressources>{
  return this.http.delete<Ressources>(`${this.apiServerUrl}/api/Ressources/delete/${id}`);
}

public updateRessource(data : Ressources,id:number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/Ressources/update/${id}`, data);
}

public getRessourceById(id: number):Observable<Ressources>{
  return this.http.get<Ressources>(`${this.apiServerUrl}/api/Ressources/getById/${id}`);
}
}
