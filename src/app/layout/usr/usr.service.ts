import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usr } from './usr';
import { DOCUMENT } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
;

@Injectable({
  providedIn: 'root'
})
export class UsrService {

  constructor(private http: HttpClient
    ,@Inject(DOCUMENT) private document: any) { }

  insertUsr (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/insertUsr', usr, httpOptions)
    ;
  }

  selectUsr (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/selectUsr', usr, httpOptions)
    ;
  }

  selectUsrList (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/selectUsrList', usr, httpOptions)
    ;
  }

  selectUsrLogin (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/selectUsrLogin', usr, httpOptions)
    ;
  }

  saveUsr (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/saveUsr', usr, httpOptions)
    ;
  }

  saveUsrLang (usr: Usr): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/usr/saveUsrLang', usr, httpOptions)
    ;
  }


  addUsr2 (usr: Usr): Observable<Usr> {
    return this.http.post<Usr>('http://'+this.document.location.hostname+':8085/usr/saveUsr', usr, httpOptions)
    ;
  }

}
