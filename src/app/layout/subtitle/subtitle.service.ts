import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Subtitle } from './subtitle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SubtitleService {

  subtitle : Subtitle;

  private heroesUrl = '/subtitle/test3';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Subtitle> {
    return this.http.get<Subtitle>('/subtitle/test5');
  }

  selectUsrSttlMstrList(usrId: String): Observable<any> {
    return this.http.post<any>('/subtitle/selectUsrSttlMstrList', usrId, httpOptions)
    ;
  }

  selectRecentlySubtitle(usrId: String): Observable<any> {
    return this.http.post<any>('/subtitle/selectUsrRecentlySttl', usrId, httpOptions)
    ;
  }
 
  selectUsrSttlDtlList(usrId: String): Observable<any> {
    return this.http.post<any>('/subtitle/selectUsrSttlDtlList', usrId, httpOptions)
    ;
  }
 
  saveUsrSubtitles (fd: FormData): Observable<any> {
    return this.http.post<any>('/subtitle/saveUsrSubtitles', fd)
    ;
  }
}
