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
  sttlNm : string;
  preChk : boolean = false;

  winHeight : number;

  comboFunc = [
      {name : 'Bookmark' , value : 'bookmark'  }
     ,{name : 'Review'   , value : 'review'    }
     ,{name : 'First'    , value : 'first'     }
  ];
  comboIdx : number = 0;


  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.winHeight = window.innerHeight;
    console.log("window.innerHeight=="+ this.winHeight);
    //document.getElementById("chat1").style.height = this.winHeight/2-(this.winHeight*0.20) + "px";
    //document.getElementById("chat2").style.height = this.winHeight/2-(this.winHeight*0.20) + "px";
    document.getElementById("chat1").style.height = (this.winHeight-150)/2 + "px";
    document.getElementById("chat2").style.height = (this.winHeight-150)/2 + "px";
    this.usrId = localStorage.getItem('usrId');
    this.sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    this.subtitle.usrId = this.usrId;
    this.subtitle.sttlNm = this.sttlNm;
    //console.log("this.subtitle.usrId=="+ this.subtitle.usrId);
    this.onSelectUsrSttl();
  }

  /****************************************************************************
   * Event
   ****************************************************************************/
  /*************
   * Select
   *************/
  onSelectUsrSttl() {
    //console.log("sttlNm=="+sttlNm);
    //console.log("usrId1=="+localStorage.getItem('usrId'));
    //console.log("usrId2=="+this.usrId);

    this.subtitle.usrId = this.usrId;
    this.subtitle.sttlNm = this.sttlNm;
    this.subtitle.condSttlCd = "0";

    this.subtitleService.selectUsrSttl(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.subtitle.sttlNm = result.sttlNm;
        this.foreignSubtitle = result.foreignSubtitle;
        this.motherSubtitle = result.motherSubtitle;
        //console.log(result.subtitleListVo);
      }
    });
  }

  onSelectRecentlySubtitle() {
    this.subtitle.usrId = this.usrId;
    this.subtitleService.selectRecentlySubtitle(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;
        this.motherSubtitle = result.motherSubtitle;
        //console.log(result.subtitleListVo);
      }
    });
  }

  /*************
   * Execute
   *************/
  onChangeCombo(i) {
    this.comboIdx = i;
    console.log(this.comboIdx);
  }

  onExecute() {
    switch(this.comboIdx) {
      case 0    : this.onSelectBookmark();
      case 1    : this.onSaveReview();
      case 2    : this.onSelectUsrSttlAll();
    }
  }
  /*************
   * Bookmark
   *************/
  onSelectBookmark() {
    // // save - foreign
    // for (var i = 0; i < this.foreignSubtitle.length; i++) {
    //   if(this.foreignSubtitle[i].chk) {
    //     this.foreignSubtitle[i].condBookmarkYn = 'Y';
    //     this.onSaveSttlNum(this.foreignSubtitle[i]);
    //   }
    // }
    //
    // // save - mother
    // for (var i = 0; i < this.motherSubtitle.length; i++) {
    //   if(this.motherSubtitle[i].chk) {
    //     this.motherSubtitle[i].condBookmarkYn = 'Y';
    //     this.onSaveSttlNum(this.motherSubtitle[i]);
    //   }
    // }

    // select
    this.subtitle.condBookmarkYn = 'Y';
    this.onSelectUsrSttl();

    document.getElementById("chat1").scrollTop = 0;
    document.getElementById("chat2").scrollTop = 0;

    this.preChk = false;
    this.onPreChk();

  }

  onSaveSttlNum(subtitle: Subtitle) {
    //console.log("subtitle.sttlNm=="+subtitle.sttlNm);
    //console.log("subtitle.sttlCd=="+subtitle.sttlCd);
    //console.log("subtitle.sttlNum=="+subtitle.sttlNum);
    if(!subtitle.chk && !this.preChk) {
      this.subtitleService.saveSttlNum(subtitle)
      .subscribe(result => {
        if(!result.isSuccess) alert(result.errUsrMsg)
        else {
          //this.subtitle.condBookmarkYn = 'Y';
          //this.onSelectUsrSttl();

          //console.log("success");

        }
      });
    }

  }

  /*************
   * Review
   *************/
  onSaveReview(){
    if(!this.preChk) {
      alert("Must Checked check Box in review button and select review subtitles");
    }

    // save - foreign
    for (var i = 0; i < this.foreignSubtitle.length; i++) {
      if(this.foreignSubtitle[i].chk) {
        this.subtitle.fsttlDesc += this.foreignSubtitle[i].sttlDesc + "\n";
      }
    }

    console.log("f="+this.subtitle.fsttlDesc);
    this.preChk = false;
    this.onPreChk();
  }

  onPreChk() {
    for (var i = 0; i < this.foreignSubtitle.length; i++) {
      this.foreignSubtitle[i].chk = false;
    }
    for (var i = 0; i < this.motherSubtitle.length; i++) {
      this.foreignSubtitle[i].chk = false;
    }
  }

  /*************
   * First
   *************/
  onSelectUsrSttlAll() {
    this.subtitle.condBookmarkYn = 'N';
    this.onSelectUsrSttl();
  }

  onSelectUsrSttlBookmarkNext() {
    this.onSaveSttlNum(this.subtitle);
    this.onSelectUsrSttl();
  }



}
