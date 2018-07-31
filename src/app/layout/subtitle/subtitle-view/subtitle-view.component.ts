import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';

@Component({
  selector: 'app-subtitle-view',
  templateUrl: './subtitle-view.component.html',
  styleUrls: ['./subtitle-view.component.scss']
})
export class SubtitleViewComponent implements OnInit {

  usrId = 'lifedomy@gmail.com';
  fileNm = "";
  foreignSubtitle = "";
  motherSubtitle = "";
 
  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  onSelectRecentlySubtitle() {
    alert("onSelectRecentlySubtitle");
    this.subtitleService.selectRecentlySubtitle(this.usrId)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.fileNm = result.fileNm;  
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.usrMsg);  
      } 
    });
  }


}
