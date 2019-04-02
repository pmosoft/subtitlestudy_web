import { Component, OnInit} from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-review',
  templateUrl: './subtitle-review.component.html',
  styleUrls: ['./subtitle-review.component.scss']
})
export class SubtitleReviewComponent implements OnInit {

  subtitle : Subtitle = new Subtitle();
  reviewSubtitles : Subtitle[];

  isCollapsed = false;

  winHeight : number;

  one = "①";
  two = "②";
  reviewCnt = "";

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
    this.subtitleService.selectReviewSttlList(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.reviewSubtitles = result.reviewSubtitles;
        //console.log("result.sttlNm="+result.foreignSubtitle[0].sttlNm);
      }
    });
  }

  /****************************************************************************
   * Done
   ****************************************************************************/
  onClickDone() {
    this.onUpdateReviewCnt();
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
    
    //this.onUnChk();
  }

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
