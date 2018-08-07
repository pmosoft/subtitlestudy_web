import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usr } from './usr';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
;

@Injectable({
  providedIn: 'root'
})
export class UsrService {

  constructor(private http: HttpClient) {}

  insertUsr (usr: Usr): Observable<any> {
    return this.http.post<any>('/usr/insertUsr', usr, httpOptions)
    ;
  }
  
  selectUsrLogin (usr: Usr): Observable<any> {
    return this.http.post<any>('/usr/selectUsrLogin', usr, httpOptions)
    ;
  }

  saveUsr (usr: Usr): Observable<any> {
    return this.http.post<any>('/usr/saveUsr', usr, httpOptions)
    ;
  }

  addUsr2 (usr: Usr): Observable<Usr> {
    return this.http.post<Usr>('/usr/saveUsr', usr, httpOptions)
    ;
  }

}
