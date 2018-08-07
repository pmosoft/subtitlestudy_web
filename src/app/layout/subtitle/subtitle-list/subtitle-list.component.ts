import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';

@Component({
  selector: 'app-subtitle-list',
  templateUrl: './subtitle-list.component.html',
  styleUrls: ['./subtitle-list.component.scss']
})
export class SubtitleListComponent implements OnInit {

  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  usrId = 'lifedomy@gmail.com';

  onSelectUsrSttlMstrList() {
    this.subtitleService.selectUsrSttlMstrList(this.usrId)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        console.log(result.subtitleListVo);  
      } 
    });
  }



}
