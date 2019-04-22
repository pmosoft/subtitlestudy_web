import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Usr } from '../layout/usr/usr';
import { UsrService } from '../layout/usr/usr.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    usr : Usr = new Usr();
    constructor(public router: Router
               ,private usrService: UsrService) {}

    ngOnInit() {
        this.usr.usrId    = localStorage.getItem('usrId');
        this.usr.usrEmail = localStorage.getItem('usrEmail');
        this.usr.usrPw    = localStorage.getItem('usrPw');
        this.usr.usrPw2   = localStorage.getItem('usrPw');
        this.usr.usrNm    = localStorage.getItem('usrNm');
    }
  
    onLoggedin() {
        // this.usrComponent.selectUsrLogin(usrEmail, usrPw);
        this.usr.usrId    = this.usr.usrEmail;
        this.usrService.selectUsrLogin(this.usr).subscribe(result => {
            if(!result.isSuccess) {
                alert(result.errUsrMsg);
            } else {
                console.log("result.isSuccess=="+result.isSuccess);  
                console.log('usrId==', result.usr.usrId);  
                console.log('usrEmail==', result.usr.usrEmail);  
                console.log('usrNm==', result.usr.usrNm);  

                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('usrId', result.usr.usrId);
                localStorage.setItem('usrEmail', result.usr.usrEmail);
                localStorage.setItem('usrPw', result.usr.usrPw);
                localStorage.setItem('usrNm', result.usr.usrNm);
                console.log('111');  
                this.router.navigate(['/subtitle-regist']);
                console.log('222');  

            }   
        });
        
    }
}
