import { Component, OnInit} from '@angular/core';
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
  foreignSubtitle : Subtitle[];
  motherSubtitle : Subtitle[];
  usrId : string;

  sel_sttlNum = [
    {id: 0, name: "All"},
    {id: 1, name: "1-999"},
    {id: 2, name: "1000-1999"},
    {id: 3, name: "2000-2999"},
    {id: 4, name: "3000-3999"},
    {id: 5, name: "4000-4999"},
    {id: 6, name: "5000-5999"},
    {id: 7, name: "6000-6999"}
  ];
  selectedValue : string = "0";

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
  
  onChange(deviceValue) {
    console.log(deviceValue);
    this.selectedValue = deviceValue;
    console.log(this.selectedValue);
  } 

  onSelectUsrSttlAll() {
    this.subtitle.condBookmarkYn = 'N';
    this.onSelectUsrSttl();
  }

  onSelectUsrSttlBookmark() {
    this.subtitle.condBookmarkYn = 'Y';
    this.onSelectUsrSttl();
  }

  onSelectUsrSttl() {
    
    console.log("selectedValue=="+this.selectedValue);
 
    const sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    if(sttlNm==":blank"){
      this.onSelectRecentlySubtitle();
    } else {
      console.log("sttlNm=="+sttlNm);
      console.log("usrId1=="+localStorage.getItem('usrId'));
      console.log("usrId2=="+this.usrId);

      this.subtitle.usrId = this.usrId;
      this.subtitle.sttlNm = sttlNm;
      this.subtitle.condSttlCd = "0";
      this.subtitle.condSttlNum = this.selectedValue;

      this.subtitleService.selectUsrSttl(this.subtitle)
      .subscribe(result => {
        if(!result.isSuccess) alert(result.errUsrMsg)
        else {
          this.foreignSubtitle = result.foreignSubtitle;  
          this.motherSubtitle = result.motherSubtitle; 
          //console.log(result.subtitleListVo);  
        } 
      });
    }
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

  onSaveSttlNum(subtitle: Subtitle) {
    console.log("subtitle.sttlNm=="+subtitle.sttlNm);
    console.log("subtitle.sttlCd=="+subtitle.sttlCd);
    console.log("subtitle.sttlNum=="+subtitle.sttlNum);


    this.subtitleService.saveSttlNum(subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        console.log("success");  
      }  
    });
  }


}
