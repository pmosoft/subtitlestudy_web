import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Subtitle } from './subtitle';
import { DOCUMENT } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SubtitleService {

  subtitle : Subtitle;
  private heroesUrl = '/subtitle/test3';  // URL to web api

  constructor(private http: HttpClient
             ,@Inject(DOCUMENT) private document: any) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Subtitle> {
    return this.http.get<Subtitle>('http://'+this.document.location.hostname+':8085/subtitle/test5');
  }

  selectUsrSttlMstrList(usrId: String): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttlMstrList', usrId, httpOptions);
  }

  selectUsrSttl(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttl', subtitle, httpOptions);
  }
 
  selectRecentlySubtitle(usrId: String): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrRecentlySttl', usrId, httpOptions)
    ;
  }
 
  selectUsrSttlDtlList(usrId: String): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttlDtlList', usrId, httpOptions)
    ;
  }
 
  saveUsrSubtitles (fd: FormData): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/saveUsrSubtitles', fd)
    ;
  }
}
