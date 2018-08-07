import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';

@Component({
  selector: 'app-subtitle-view-mother',
  templateUrl: './subtitle-view-mother.component.html',
  styleUrls: ['./subtitle-view-mother.component.scss']
})
export class SubtitleViewMotherComponent implements OnInit {

  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  usrId = 'lifedomy@gmail.com';
  foreignSubtitle = "";
  motherSubtitle = "";

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
