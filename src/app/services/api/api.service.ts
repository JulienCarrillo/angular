import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  get(route: string, data?: any): Observable<any>{
    const params: HttpParams = new HttpParams({fromObject: data});
    return this.http.get(`${environment.serverPath}/${route}`, {params});
  }

  post(route: string, data: any): Observable<any>{
    return this.http.post(`${environment.serverPath}/${route}`, data);
  }
  put(route: string, data: any): Observable<any>{
    return this.http.put(`${environment.serverPath}/${route}`, data);
  }

}
