import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Affectation } from '../model/Entities/Affectation';
import { AffectationDto } from '../model/DTO/AffectationDto';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  listAffectations: Observable<AffectationDto[]> = this.getAffectations() ;
  affectation:AffectationDto=new AffectationDto();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getAffectations():Observable<AffectationDto[]>{
    return this.http.get<AffectationDto[]>(`${this.apiServerUrl}/api/Affectations/list`);
  }
  public getAllAffectations():Observable<Affectation[]>{
    return this.http.get<Affectation[]>(`${this.apiServerUrl}/api/Affectations/list/Affectations`);
  }

  public addAffectation(data: AffectationDto):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/Affectations/add`, data);
}
public nbrAffectations(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/Affectations/NbrAffectations`);
}

public deleteAffectation(id : number):Observable<AffectationDto>{
  return this.http.delete<AffectationDto>(`${this.apiServerUrl}/api/Categories/delete/${id}`);
}

public updateAffectation(data : AffectationDto,id :number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/Affectations/update/${id}`, data);
}

public getAffectationById(id: number):Observable<AffectationDto>{
  return this.http.get<AffectationDto>(`${this.apiServerUrl}/api/Affectations/getById/${id}`);
}

public getAffectationByNomApi(nom : string):Observable<AffectationDto[]>{
  return this.http.get<AffectationDto[]>(`${this.apiServerUrl}/api/Affectations/listByNomApi/${nom}`);
}
}
