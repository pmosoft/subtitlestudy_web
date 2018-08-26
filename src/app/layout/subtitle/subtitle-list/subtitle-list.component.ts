import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtitle-list',
  templateUrl: './subtitle-list.component.html',
  styleUrls: ['./subtitle-list.component.scss']
})
export class SubtitleListComponent implements OnInit {

  constructor(private subtitleService: SubtitleService
             ,private router: Router) { }

  ngOnInit() {
    this.onSelectUsrSttlMstrList();
  }

  subtitleInVo: Subtitle = new Subtitle();
  usrSttlVoList: Subtitle[]

  usrId = localStorage.getItem('usrId');

  onSelectUsrSttlMstrList() {
    this.subtitleInVo.usrId = this.usrId;
    this.subtitleService.selectUsrSttlMstrList(this.subtitleInVo)
    .subscribe(result => {
       if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.usrSttlVoList = result.usrSttlVoList;  
        console.log(result.usrSttlVoList);  
      } 
    });
  }

  onClick(subtitle: Subtitle) {
    
    console.log("subtitle.sttlNm=="+subtitle.sttlNm);
    this.router.navigate(['/subtitle-view/'+subtitle.sttlNm]);
  }

}
