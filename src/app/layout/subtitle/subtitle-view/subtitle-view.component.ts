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

  winHeight : number;

  comboFunc = [
      {name : 'Bookmark' , value : 'bookmark'  }
     ,{name : 'Review'   , value : 'review'    }
     ,{name : 'First'    , value : 'first'     }
  ];
  comboIdx : number = 0;
  selectedValue = "bookmark";
  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.winHeight = window.innerHeight;
    //console.log("window.innerHeight=="+ this.winHeight);
    //document.getElementById("chat1").style.height = this.winHeight/2-(this.winHeight*0.20) + "px";
    //document.getElementById("chat2").style.height = this.winHeight/2-(this.winHeight*0.20) + "px";
    document.getElementById("chat1").style.height = (this.winHeight-150)/2 + "px";
    document.getElementById("chat2").style.height = (this.winHeight-150)/2 + "px";
    this.subtitle.usrId = localStorage.getItem('usrId');
    this.subtitle.sttlNm = this.route.snapshot.paramMap.get('sttlNm');
    //console.log("this.subtitle.usrId=="+ this.subtitle.usrId);
    this.onSelectUsrSttl();
    //this.comboFunc.le
  }

  /****************************************************************************
   * Select
   ****************************************************************************/
  onSelectUsrSttl() {
    //console.log("sttlNm=="+sttlNm);
    //console.log("usrId1=="+localStorage.getItem('usrId'));
    //console.log("usrId2=="+this.usrId);

    this.subtitle.condSttlCd = "0";

    this.subtitleService.selectUsrSttl(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.subtitle.sttlNm = result.foreignSubtitle[0].sttlNm;
        this.foreignSubtitle = result.foreignSubtitle;
        this.motherSubtitle = result.motherSubtitle;
        //console.log("result.sttlNm="+result.foreignSubtitle[0].sttlNm);
      }
    });
  }

  /****************************************************************************
   * Execute
   ****************************************************************************/

  /*************
   * Combo
   *************/
  onChangeCombo(i : number) {
    this.comboIdx = i;
    //console.log(this.comboIdx);
    switch(this.comboIdx) {
      case 0    : this.onSelectBookmark();break;
      case 2    : this.onSelectUsrSttlAll();break;
    }
    this.onUnChk();
  }

  /*************
   * Execute
   *************/
  onClickExecute() {
    switch(this.comboIdx) {
      case 0    : this.onSelectBookmark();break;
      case 1    : this.onSaveReview();break;
      case 2    : this.onSelectUsrSttlAll();break;
    }
    this.onUnChk();
  }
  /**********************
   * Execute - Bookmark
   *********************/
  onSelectBookmark() {
    this.selectedValue = "bookmark";

    this.subtitle.condBookmarkYn = 'Y';
    this.onSelectUsrSttl();

    document.getElementById("chat1").scrollTop = 0;
    document.getElementById("chat2").scrollTop = 0;

    this.onUnChk();

  }

  /**********************
   * Execute - Review
   *********************/
  onSaveReview(){
    //alert("Must Checked check Box in review button and select review subtitles");

    this.subtitle.fsttlDesc = "";
    this.subtitle.msttlDesc = "";

    // foreign
    for (var i = 0; i < this.foreignSubtitle.length; i++) {
      if(this.foreignSubtitle[i].chk) {
        this.subtitle.fsttlDesc += this.foreignSubtitle[i].sttlDesc + "\n";
        //console.log("f["+i+"]="+this.subtitle.fsttlDesc);
      }
    }

    // mother
    for (var i = 0; i < this.motherSubtitle.length; i++) {
      if(this.motherSubtitle[i].chk) {
        this.subtitle.msttlDesc += this.motherSubtitle[i].sttlDesc + "\n";
        //console.log("f="+this.subtitle.msttlDesc);
      }
    }
    //console.log("f="+this.subtitle.fsttlDesc);
    //console.log("m="+this.subtitle.msttlDesc);

    if(this.foreignSubtitle.length > 0) {
      //console.log("saveReviewSttl");
      this.subtitleService.saveReviewSttl(this.subtitle)
      .subscribe(result => {
        if(!result.isSuccess) alert(result.errUsrMsg)
        else {
        	this.onSelectBookmark();
        }
      });
    }

    this.onUnChk();
  }

  /**********************
   * Execute - First
   *********************/
  onSelectUsrSttlAll() {
    this.subtitle.condBookmarkYn = 'N';
    this.onSelectUsrSttl();
  }

  /****************************************************************************
   * Check
   ****************************************************************************/
  onCheckSaveSttlNum(subtitle: Subtitle) {
    //console.log("subtitle.sttlNm=="+subtitle.sttlNm);
    //console.log("subtitle.sttlCd=="+subtitle.sttlCd);
    //console.log("subtitle.sttlNum=="+subtitle.sttlNum);
    if(!subtitle.chk) {
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

  onUnChk() {
    for (var i = 0; i < this.foreignSubtitle.length; i++) {
      this.foreignSubtitle[i].chk = false;
    }
    for (var i = 0; i < this.motherSubtitle.length; i++) {
      this.motherSubtitle[i].chk = false;
    }
  }

  /****************************************************************************
   * Next
   ****************************************************************************/
  onClickkNext(){
	  this.onSelectBookmark();
  }

}
