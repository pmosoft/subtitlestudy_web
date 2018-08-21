import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-view',
  templateUrl: './subtitle-view.component.html',
  styleUrls: ['./subtitle-view.component.scss']
})
export class SubtitleViewComponent implements OnInit {

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute
             ,private subtitle : Subtitle) { }

  ngOnInit() {
    this.onSelectUsrSttl();
  }

  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');
  
  foreignSubtitle = "";
  motherSubtitle = "";

  onSelectUsrSttl() {

    
  
    const sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    console.log("sttlNm=="+sttlNm);
    console.log("usrId=="+localStorage.getItem('usrId'));
    
    this.subtitle.usrId = localStorage.getItem('usrId');
    this.subtitle.sttlNm = sttlNm;
    
    this.subtitleService.selectUsrSttl(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.subtitleListVo);  
      } 
    });
  }

  onSelectRecentlySubtitle() {
    this.subtitleService.selectRecentlySubtitle(this.usrId)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.subtitleListVo);  
      } 
    });
  }

}
