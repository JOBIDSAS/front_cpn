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
export class TestEgibiliteService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /*********************** test/activities/get ****************************/
  public getActivites(): Observable<any[]>{
    return this.http.get<any[]>(baseUrl+"/api/test/activities/get")
  }

   /*********************** test/transitions/get ****************************/
  public getTransitions(): Observable<any>{
    return this.http.get<any>(baseUrl+"/api/test/transitions/cat/get?categorie=Développement")
  }
     /*********************** test/transitions/get Services  ****************************/

  public getTransitionsServ(): Observable<any>{
    return this.http.get<any>(baseUrl+"/api/test/transitions/cat/get?categorie=Services")
  }

       /*********************** test/transitions/get Marketing  ****************************/

       public getTransitionsMark(): Observable<any>{
        return this.http.get<any>(baseUrl+"/api/test/transitions/cat/get?categorie=Marketing")
      }
  /*********************** test/grants/region/get ****************************/
     public regionalGrant(region,budget,naf): Observable<any>{
      return this.http.get<any>(baseUrl+"/api/test/grants/region/"+region+"/"+budget+"/"+naf)
    }

 /*********************** test/grants/cpn/get ****************************/
    public cpnGrant(service,budget): Observable<any>{
      return this.http.get<any>(baseUrl+"/api/test/grants/cpn/"+service+"/"+budget)
    }
  
   /*********************** test/events/get ****************************/
  public getEvents(): Observable<any>{
    return this.http.get<any>(baseUrl+"/api/test/events/get")
  }

  /*********************** test/events/add ****************************/
  public addEvents(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/events/add",form)
  }

  /*********************** test/service/turnover ****************************/
  public getServiceTurnover(range): Observable<any>{
    return this.http.get<any>(baseUrl+"/api/test/service/turnover/"+range[0]+"/"+range[1],  { withCredentials: false })
  }

  /*********************** test/company/siren ****************************/
  public getCompanySiren(siret): Observable<any>{
    return this.http.get<any>(baseUrl+"/api/test/company/siren/"+siret,  { withCredentials: false })
  }

  /*********************** test/contact/save ****************************/
  public addContact(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/contact/save",form,  { withCredentials: false })
  }

  /*********************** test/contact/confirm ****************************/
  public contactConfirm(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/contact/confirm",form,  { withCredentials: false })
  }

  /*********************** test/zoom/generate ****************************/
  public addZoom(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/zoom/generate",form,  { withCredentials: false })
  }

  /*********************** test/timer/save ****************************/
  public addTimer(form:any): Observable<any>{
    return this.http.post<any>(baseUrl+"/api/test/timer/save",form,  { withCredentials: false })
  }


}
