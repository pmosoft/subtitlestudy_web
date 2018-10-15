import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pushup } from './pushup';
import { DOCUMENT } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PushupService { 

  pushup : Pushup;
  private heroesUrl = '/pushup/test3';  // URL to web api

  constructor(private http: HttpClient
             ,@Inject(DOCUMENT) private document: any) { }

  saveUsrpushups (fd: FormData): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/saveUsrpushups', fd);
  }
  saveSttlNum(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/saveSttlNum', pushup, httpOptions);
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Pushup> {
    return this.http.get<Pushup>('http://'+this.document.location.hostname+':8085/pushup/test5');
  }

  selectUsrSttlMstrList(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/selectUsrSttlMstrList', pushup, httpOptions);
  }

  selectUsrSttl(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/selectUsrSttl', pushup, httpOptions);
  }
 
  selectRecentlypushup(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/selectUsrRecentlySttl', pushup, httpOptions)
    ;
  }
 
  selectUsrSttlDtlList(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/pushup/selectUsrSttlDtlList', pushup, httpOptions)
    ;
  }
 
}
