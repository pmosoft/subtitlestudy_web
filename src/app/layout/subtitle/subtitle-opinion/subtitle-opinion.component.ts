import { Component, OnInit} from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtitle-opinion',
  templateUrl: './subtitle-opinion.component.html',
  styleUrls: ['./subtitle-opinion.component.scss']
})
export class SubtitleOpinionComponent implements OnInit {

  subtitle : Subtitle = new Subtitle();
  opinions : Subtitle[];

  isCollapsed = false;
  winHeight : number;

  constructor(private subtitleService: SubtitleService
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.winHeight = window.innerHeight;
    document.getElementById("chat1").style.height = (this.winHeight-150) + "px";

    this.subtitle.usrId = localStorage.getItem('usrId');
    this.onSelectOpinionList();
  }


  /****************************************************************************
   * Select
   ****************************************************************************/
  onSelectOpinionList() {
    this.subtitleService.selectOpinionList(this.subtitle)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.opinions = result.opinions;
        //console.log("result.sttlNm="+result.foreignSubtitle[0].sttlNm);
      }
    });
  }

  /****************************************************************************
   * Save
   ****************************************************************************/
  onChangeOpinionDesc(ev) {this.subtitle.opinionDesc = ev.target.value;}

  onClickSave() {
    if(this.subtitle.opinionDesc.length > 1) {
      this.subtitleService.saveOpinion(this.subtitle)
      .subscribe(result => {
        if(!result.isSuccess) alert(result.errUsrMsg) 
        else {
          this.subtitle.opinionDesc = "";
          this.onSelectOpinionList()
        }
      });
    }  
  }
 
}
