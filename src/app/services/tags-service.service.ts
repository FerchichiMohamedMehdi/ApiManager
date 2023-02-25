import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TagDTO } from '../model/DTO/TagDTO';
import { Tag } from '../model/Entities/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

 
  tag:Tag=new Tag();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getTags():any{
    return this.http.get<any>(`${this.apiServerUrl}/api/tags/list`);
  }
  
  public getNomTags():Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/tags/listNomTags`);
  }

  public addTag(data: Tag):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/tags/add`, data);
}

public deleteTag(id : number):Observable<Tag>{
  return this.http.delete<Tag>(`${this.apiServerUrl}/api/tags/delete/${id}`);
}

public updateTag(data : Tag):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/tags/update`, data);
}

public getTagById(id: number):Observable<Tag>{
  return this.http.get<Tag>(`${this.apiServerUrl}/api/tags/getById/${id}`);
}
}
