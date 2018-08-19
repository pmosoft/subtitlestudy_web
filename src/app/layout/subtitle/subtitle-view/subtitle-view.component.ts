import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';

@Component({
  selector: 'app-subtitle-view',
  templateUrl: './subtitle-view.component.html',
  styleUrls: ['./subtitle-view.component.scss']
})
export class SubtitleViewComponent implements OnInit {

  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');
  
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
