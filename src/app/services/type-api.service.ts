import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeApi } from '../model/Entities/TypeApi';

@Injectable({
  providedIn: 'root'
})
export class TypeApiService {

  listTypeApis: Observable<TypeApi[]> = this.getTypeApis() ;
  categorie:TypeApi=new TypeApi();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getTypeApis():Observable<TypeApi[]>{
    return this.http.get<TypeApi[]>(`${this.apiServerUrl}/api/TypeApis/list`);
  }

  public addTypeApi(data: TypeApi):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/TpyeApi/add`,data);
}

public deleteTypeApi(id : number):Observable<TypeApi>{
  return this.http.delete<TypeApi>(`${this.apiServerUrl}/api/TypeApis/delete/${id}`);
}

public updateTypeApi(data : TypeApi,id:number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/TypeApis/update/${id}`, data);
}

public getTypeApiById(id: number):Observable<TypeApi>{
  return this.http.get<TypeApi>(`${this.apiServerUrl}/api/TypeApis/getById/${id}`);
}
}
