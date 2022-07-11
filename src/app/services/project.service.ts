import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __getProjects(){
    return this.http.get('/api/project/GetProject');
  }

  __getProjects_be(){
    return this.http.get('https://localhost:44309/api/project/listar');
  }
}
