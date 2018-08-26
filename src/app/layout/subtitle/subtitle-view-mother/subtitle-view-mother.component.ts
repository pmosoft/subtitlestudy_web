import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';

@Component({
  selector: 'app-subtitle-view-mother',
  templateUrl: './subtitle-view-mother.component.html',
  styleUrls: ['./subtitle-view-mother.component.scss']
})
export class SubtitleViewMotherComponent implements OnInit {

  subtitleInVo: Subtitle = new Subtitle();
  subtitleListVo: Subtitle[]

  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');

  foreignSubtitle = "";
  motherSubtitle = "";

  onSelectRecentlySubtitle() {
    this.subtitleInVo.usrId = this.usrId;
    this.subtitleInVo.sttlCd = "2";    
    this.subtitleService.selectRecentlySubtitle(this.subtitleInVo)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        this.subtitleListVo = result.subtitleListVo;
        console.log(result.subtitleListVo);  
      } 
    });
  }

  onClick() {
    this.subtitleInVo.usrId = this.usrId;
  }


}
