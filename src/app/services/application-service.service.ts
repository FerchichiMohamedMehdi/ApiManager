import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplicationDTO } from '../model/DTO/ApplicationDTO';
import { Application } from '../model/Entities/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService{

  listApplication: Observable<Application[]> = this.getApplication() ;


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getApplication():Observable<Application[]>{
    return this.http.get<Application[]>(`${this.apiServerUrl}/api/Applications/list`);
  }
  public getApplicationByClient(id: number):Observable<Application[]>{
    return this.http.get<Application[]>(`${this.apiServerUrl}/api/Applications/listByClient/${id}`);
  }


  public addApplication(data: ApplicationDTO):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/Applications/add`, data);
}

public deleteApplication(id : number):Observable<Application>{
  return this.http.delete<Application>(`${this.apiServerUrl}/api/Applications/getById/${id}`);
}

public updateApplication(data : Application,id:number):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/Applications/update/${id}`, data);
}

public getApplicationById(id: number):Observable<Application>{
  return this.http.get<Application>(`${this.apiServerUrl}/api/Applications/getById/${id}`);
}
public getApplicationByNomClient(nom : string):Observable<Application[]>{
  return this.http.get<Application[]>(`${this.apiServerUrl}/api/Applications/listByClient/${nom}`);
}
public listNomApplications():Observable<string[]>{
  return this.http.get<string[]>(`${this.apiServerUrl}/api/Applications/listNom`);
}

}
