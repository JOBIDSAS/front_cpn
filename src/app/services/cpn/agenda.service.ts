import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../baseUrl';
const headers = new HttpHeaders();

headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /*********************** avis/add ****************************/
  public addEvent(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/cpncalendar/add",form,  {headers, withCredentials: false })
  }
}
