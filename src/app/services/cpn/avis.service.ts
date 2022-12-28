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
export class AvisService {


  headers = new HttpHeaders().set('Content-Type', 'application/json');
url="http://crm.cpn-aide-aux-entreprises.com"
  constructor(private http: HttpClient) { }

  /*********************** avis/add ****************************/
  public addAvis(form:any): Observable<any>{
    return this.http.post<any>(this.url+"/api/avis/save",form,  {headers, withCredentials: false })
  }
}
