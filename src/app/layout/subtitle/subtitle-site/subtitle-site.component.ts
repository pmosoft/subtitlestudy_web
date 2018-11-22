import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-site',
  templateUrl: './subtitle-site.component.html',
  styleUrls: ['./subtitle-site.component.scss']
})
export class SubtitleSiteComponent implements OnInit {

  sites = [
    {id: 1, url: "http://www.yifysubtitles.com"}
  ]; 

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
  }



}
