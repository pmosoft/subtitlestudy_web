import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';

@Component({
  selector: 'app-subtitle-list',
  templateUrl: './subtitle-list.component.html',
  styleUrls: ['./subtitle-list.component.scss']
})
export class SubtitleListComponent implements OnInit {

  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
    this.onSelectUsrSttlMstrList();
  }

  usrSttlVoList: Subtitle[]

  usrId = localStorage.getItem('usrId');

  onSelectUsrSttlMstrList() {
    this.subtitleService.selectUsrSttlMstrList(this.usrId)
    .subscribe(result => {
       if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.usrSttlVoList = result.usrSttlVoList;  
        console.log(result.usrSttlVoList);  
      } 
    });
  }



}
