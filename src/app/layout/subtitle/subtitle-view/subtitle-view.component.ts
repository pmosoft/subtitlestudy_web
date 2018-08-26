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

  subtitle : Subtitle = new Subtitle();
  usrId : string;

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.usrId = localStorage.getItem('usrId'); 
    this.subtitle.usrId = this.usrId;
    console.log("this.subtitle.usrId=="+ this.subtitle.usrId);
    this.onSelectUsrSttl();
  }


  //subtitle : Subtitle = [];

  //usrId = 'lifedomy@gmail.com';
  //usrId = localStorage.getItem('usrId');
  
  foreignSubtitle = "";
  motherSubtitle = "";

  onSelectUsrSttl() {
  
    const sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    console.log("sttlNm=="+sttlNm);
    console.log("usrId1=="+localStorage.getItem('usrId'));
    console.log("usrId2=="+this.usrId);
    
    this.subtitle.usrId = this.usrId;
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
    this.subtitle.usrId = this.usrId;
    this.subtitleService.selectRecentlySubtitle(this.subtitle)
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
