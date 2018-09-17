import { Component, OnInit } from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-view-mother',
  templateUrl: './subtitle-view-mother.component.html',
  styleUrls: ['./subtitle-view-mother.component.scss']
})
export class SubtitleViewMotherComponent implements OnInit {

  subtitle : Subtitle = new Subtitle();
  foreignSubtitle : Subtitle[];
  motherSubtitle : Subtitle[];
  usrId : string;

  subtitleInVo: Subtitle = new Subtitle();
  subtitleListVo: Subtitle[]

  condSttlCd = [
    {id: 1, name: "Foreien"},
    {id: 2, name: "Mother"},
    {id: 0, name: "All"}    
  ];
  selectedValue : string = "1";

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.usrId = localStorage.getItem('usrId'); 
    this.subtitle.usrId = this.usrId;
    console.log("this.subtitle.usrId=="+ this.subtitle.usrId);
    this.onSelectUsrSttl();
  }

  customTB(index, item) {
    return `${index}-${item.xrow}-${item.yplace}`
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.selectedValue = deviceValue;
    console.log(this.selectedValue);
    this.onSelectUsrSttl();
  } 

  onSelectUsrSttl() {
    
    console.log("selectedValue=="+this.selectedValue);

    const sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    console.log("sttlNm=="+sttlNm);
    console.log("usrId1=="+localStorage.getItem('usrId'));
    console.log("usrId2=="+this.usrId);

    this.subtitle.usrId = this.usrId;
    this.subtitle.sttlNm = sttlNm;
    this.subtitle.condSttlCd = this.selectedValue;
    this.subtitle.condSttlNum = "0";
    this.subtitle.condBookmarkYn = "Y";

    this.subtitleService.selectUsrSttl(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        this.subtitleListVo = result.subtitleListVo;
        //console.log(result.subtitleListVo);  
      } 
    });
  }


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
 

  onSelectUsrSttlAll() {
    this.subtitle.condBookmarkYn = 'N';
    this.onSelectUsrSttl();
  }

  onSelectUsrSttlBookmark() {
    this.subtitle.condBookmarkYn = 'Y';
    this.onSelectUsrSttl();
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
