import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../../baseUrl';

const headers = new HttpHeaders();


headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private previousUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public previousUrl$: Observable<string> = this.previousUrl.asObservable();
  constructor(private http: HttpClient) { }

    setPreviousUrl(previousUrl: string) {
    this.previousUrl.next(previousUrl);
  }
  
  register(form): Observable<any> {
    return this.http.post(baseUrl + '/api/inscription', form,  {headers, withCredentials: false })
  }

  
  login(form): Observable<any> {
    return this.http.post(baseUrl + '/api/login', form,  {headers, withCredentials: false });
  }
  sendMail(mail): Observable<any> {
    return this.http.post(baseUrl + '/api/forgot-password', mail,  {headers, withCredentials: false });
  }
  resetPass(form): Observable<any> {
    return this.http.post(baseUrl + '/api/reset-password', form,  {headers, withCredentials: false });
  }
  getUser(): Observable<any> {
    return this.http.get(baseUrl + '/api/profile',  {headers, withCredentials: false });
  }

 updatUser(form): Observable<any> {
    return this.http.post(baseUrl + '/api/update-profile', form,  {headers, withCredentials: false });
  }

  getFellower(){
    return this.http.get(baseUrl + '/api/linkd',  {headers, withCredentials: false });

  }
}
