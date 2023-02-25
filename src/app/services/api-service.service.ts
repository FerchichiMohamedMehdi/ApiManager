import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../model/Entities/Api';
import { ApiDto } from '../model/DTO/ApiDTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  listApis : Observable<ApiDto[]> = this.getApis() ;
  api : ApiDto = new ApiDto;
  
private apiServerUrl = environment.apiBaseUrl;


  constructor(private http : HttpClient) { }
  public getApis(): Observable<ApiDto[]>{
    return this.http.get<ApiDto[]>(`${this.apiServerUrl}/api/apis`);
}
public getAllApis(): Observable<Api[]>{
  return this.http.get<Api[]>(`${this.apiServerUrl}/api/apis/list`);
}
public getApisByCat(id:number): Observable<Api[]>{
  return this.http.get<Api[]>(`${this.apiServerUrl}/api/apis/listByCategories/${id}`);
}
public nbrApi(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/NbrApi`);
}

public addApi(data: ApiDto):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/apis`, data);
}
public deleteApi(id : number):void {
     this.http.delete(`${this.apiServerUrl}/api/apis/${id}`);
}
public updateApi(data : ApiDto,id :number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/apis/update/${id}`, data);
}
public getApi(id : number):Observable<ApiDto>{
  return this.http.get<ApiDto>(`${this.apiServerUrl}/api/apis/${id}`);
   
}
public getOne(id : number):Observable<Api>{
  return this.http.get<Api>(`${this.apiServerUrl}/api/apis/getById/${id}`);
   
}

public nbrApiSoap(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrSoap`);
}
public nbrApiRest(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrRest`);
}
public nbrApiGraphQl(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrGraph`);
}
public apiByNomFournisseur(nom :string):Observable<Api[]>{
  return this.http.get<Api[]>(`${this.apiServerUrl}/api/apis/ByFournisseur/${nom}`);
}

public apiByidCategorie(id :number):Observable<Api[]>{
  return this.http.get<Api[]>(`${this.apiServerUrl}/api/apis/ByCategorie/${id}`);
}
public nbrPublished(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrPub`);
}
public nbrBlocked(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrBlocked`);
}
public nbrRetired(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrRet`);
}
public nbrDeprecated(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrDep`);
}
public nbrPrototyped(): any{
  return this.http.get<any>(`${this.apiServerUrl}/api/apis/nbrPro`);
}
}
