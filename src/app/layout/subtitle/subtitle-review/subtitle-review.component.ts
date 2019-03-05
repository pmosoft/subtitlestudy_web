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

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.subtitle.usrId = localStorage.getItem('usrId');
    this.onSelectReviewSttlList();
  }

  /****************************************************************************
   * Event
   ****************************************************************************/
  /*************
   * Select
   *************/
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


}
