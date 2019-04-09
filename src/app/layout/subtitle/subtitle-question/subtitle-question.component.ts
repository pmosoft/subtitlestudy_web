import { Component, OnInit} from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-question',
  templateUrl: './subtitle-question.component.html',
  styleUrls: ['./subtitle-question.component.scss']
})
export class SubtitleQuestionComponent implements OnInit {

  subtitle : Subtitle = new Subtitle();
  reviewSubtitles : Subtitle[];

  isCollapsed = false;

  winHeight : number;

  one = "①";
  two = "②";
  reviewCnt = "";

  comboFunc = [
      {name : 'Done'     , value : '1'  }
     ,{name : 'Quit'     , value : '3'  }
  ];
  comboIdx : number = 0;

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.winHeight = window.innerHeight;
    document.getElementById("chat1").style.height = (this.winHeight-150) + "px";

    this.subtitle.usrId = localStorage.getItem('usrId');
    this.onSelectReviewSttlList();
  }


  /****************************************************************************
   * Select
   ****************************************************************************/
  onSelectReviewSttlList() {
    this.subtitle.reviewCd = '2';
    this.subtitleService.selectReviewSttlList(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.reviewSubtitles = result.reviewSubtitles;
        //console.log("result.sttlNm="+result.foreignSubtitle[0].sttlNm);
      }
    });
  }

  /*************
   * Check
   *************/
  onCheck(reviewSubtitle : Subtitle){
    console.log("chk");
    this.subtitleService.copyMessage(reviewSubtitle.fsttlDesc);
  }

  /****************************************************************************
   * Save
   ****************************************************************************/
  /*************
   * Combo
   *************/
  onChangeCombo(i) {
    this.comboIdx = i;
    //console.log(this.comboIdx);
    //switch(this.comboIdx) {
      //case 0    : this.onDone();break;
      //case 1    : this.onQuestion();break;
      //case 2    : this.onQuit();break;
    //}
    //this.onUnChk();
  }

  /*************
   * Save
   *************/
  onClickSave() {
    switch(this.comboIdx) {
      case 0    : this.onDone();break;
      case 1    : this.onQuit();break;
    }
    this.onUnChk();
  }

  onDone() {
    this.onUpdateReviewCd('1'); // 일반
    this.onUnChk();
  }
  onUpdateReviewCnt(){
    for (var i = 0; i < this.reviewSubtitles.length; i++) {

      if(this.reviewSubtitles[i].chk) {
        this.subtitleService.updateReviewCnt(this.reviewSubtitles[i])
        .subscribe(result => {
          if(!result.isSuccess) alert(result.errUsrMsg)
          else {
            if(i==this.reviewSubtitles.length) this.onSelectReviewSttlList()
          }
        });
      }
    }
  }
  onQuit() {
    this.onUpdateReviewCd('3'); // 종료
    this.onUnChk();
  }
  onUpdateReviewCd(reviewCd:string){
    for (var i = 0; i < this.reviewSubtitles.length; i++) {
      if(this.reviewSubtitles[i].chk) {
        this.reviewSubtitles[i].reviewCd = reviewCd;
        this.subtitleService.updateReviewCd(this.reviewSubtitles[i])
        .subscribe(result => {
          if(!result.isSuccess) alert(result.errUsrMsg)
          else {
            if(i==this.reviewSubtitles.length) this.onSelectReviewSttlList()
          }
        });
      }
    }
  }

  //this.onUnChk();
  onUnChk() {
    for (var i = 0; i < this.reviewSubtitles.length; i++) {
      this.reviewSubtitles[i].chk = false;
    }
  }

  /****************************************************************************
   * Next
   ****************************************************************************/
  onClickNext(){
	  this.onSelectReviewSttlList();
  }

}
