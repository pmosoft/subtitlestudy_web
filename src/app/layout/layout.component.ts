import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubtitleService } from './subtitle/subtitle.service';
import { Subtitle } from './subtitle/subtitle';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    subtitleInVo: Subtitle = new Subtitle();
    usrSttlVoList: Subtitle[]
    usrId = localStorage.getItem('usrId');

    constructor(private subtitleService: SubtitleService
        ,private router: Router) {}

    ngOnInit() {
        //this.router.navigate(['/subtitle-view/:blank']);

        this.subtitleInVo.usrId = this.usrId;
        this.subtitleService.selectUsrSttlMstrList(this.subtitleInVo)
        .subscribe(result => {
           if(!result.isSuccess) alert(result.errUsrMsg)
          else {
            this.usrSttlVoList = result.usrSttlVoList;
            if(this.usrSttlVoList.length==0) 
                 this.router.navigate(['/subtitle-regist']);
            else this.router.navigate(['/subtitle-view/:blank']);
          } 
        });






    }
}
