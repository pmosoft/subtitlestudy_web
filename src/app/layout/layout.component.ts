import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PushupService } from './pushup/pushup.service';
import { Pushup } from './pushup/pushup';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    pushupInVo: Pushup = new Pushup();
    usrSttlVoList: Pushup[]
    usrId = localStorage.getItem('usrId');

    constructor(private pushupService: PushupService
        ,private router: Router) {}

    ngOnInit() {
        //this.router.navigate(['/pushup-view/:blank']);

        this.pushupInVo.usrId = this.usrId;
        // this.pushupService.selectUsrSttlMstrList(this.pushupInVo)
        // .subscribe(result => {
        //    if(!result.isSuccess) alert(result.errUsrMsg)
        //   else {
        //     this.usrSttlVoList = result.usrSttlVoList;
        //     if(this.usrSttlVoList.length==0) 
        //          this.router.navigate(['/pushup-regist']);
        //     else this.router.navigate(['/pushup-view/:blank']);
        //   } 
        // });






    }
}
