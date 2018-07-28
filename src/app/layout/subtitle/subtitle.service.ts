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

  private heroesUrl = 'http://localhost:8085/subtitle/test3';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Subtitle> {
    return this.http.get<Subtitle>('http://localhost:8085/subtitle/test5');
  }

  selectSubtitle (subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://localhost:8085/usr/selectSubtitle', subtitle, httpOptions)
    ;
  }

  saveSubtitle (subtitle: Subtitle): Observable<any> {
    return this.http.post<any>('http://localhost:8085/subtitle/saveSubtitle', subtitle, httpOptions)
    ;
  }



}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/