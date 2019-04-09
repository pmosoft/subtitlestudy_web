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

  constructor(private http: HttpClient
             ,@Inject(DOCUMENT) private document: any) { }

  /****************************************************************************
   * Clipboard
   ****************************************************************************/
  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  /****************************************************************************
   * Restful API
   ****************************************************************************/
  saveUsrSubtitles (fd: FormData): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/saveUsrSubtitles', fd);
  }
  saveSttlNum(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/saveSttlNum', subtitle, httpOptions);
  }
  saveReviewSttl(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/saveReviewSttl', subtitle, httpOptions);
  }
  saveOpinion(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/saveOpinion', subtitle, httpOptions);
  }

  selectUsrSttlMstrList(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttlMstrList', subtitle, httpOptions);
  }

  selectUsrSttl(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttl', subtitle, httpOptions);
  }

  selectRecentlySubtitle(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrRecentlySttl', subtitle, httpOptions)
    ;
  }

  selectUsrSttlDtlList(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectUsrSttlDtlList', subtitle, httpOptions)
    ;
  }

  selectReviewSttlList(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectReviewSttlList', subtitle, httpOptions);
  }

  selectOpinionList(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/selectOpinionList', subtitle, httpOptions);
  }

  updateReviewCnt(subtitle: Subtitle): Observable<any> {
	    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/updateReviewCnt', subtitle, httpOptions);
  }

  updateReviewCd(subtitle: Subtitle): Observable<any> {
	    return this.http.post<any>('http://'+this.document.location.hostname+':8085/subtitle/updateReviewCd', subtitle, httpOptions);
  }

}
