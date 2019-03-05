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

  condViewCd = [
    {id: 1, name: "v1"},
    {id: 2, name: "v2"}
  ];

  selectedValue : string = "1";


  constructor(private subtitleService: SubtitleService
             ,private router: Router) { }

  ngOnInit() {
    this.onSelectUsrSttlMstrList();
  }

  subtitleInVo: Subtitle = new Subtitle();
  usrSttlVoList: Subtitle[]

  usrId = localStorage.getItem('usrId');

  onChange(deviceValue) {
    //console.log(deviceValue);
    this.selectedValue = deviceValue;
    //console.log(this.selectedValue);
  }

  onSelectUsrSttlMstrList() {
    this.subtitleInVo.usrId = this.usrId;
    this.subtitleService.selectUsrSttlMstrList(this.subtitleInVo)
    .subscribe(result => {
       if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.usrSttlVoList = result.usrSttlVoList;
        //console.log(result.usrSttlVoList);
      }
    });
  }

  onClick(subtitle: Subtitle) {

    //console.log("subtitle.sttlNm=="+subtitle.sttlNm);
    if(this.selectedValue=="1") {
      this.router.navigate(['/subtitle-view/'+subtitle.sttlNm]);
    } else {
      this.router.navigate(['/subtitle-view-mother/'+subtitle.sttlNm]);
    }
  }


}
