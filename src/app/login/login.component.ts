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
    usr : Usr = {
        usrId     : '',
        usrEmail  : 'lifedomy@gmail.com',
        usrPw     : '12345678',
        usrPw2    : '12345678',
        usrNm     : '',
        usrAge    : '',
        useYn     : '',
        regUsrId : '',
        updUsrId : ''
         };

    constructor(public router: Router
               ,private usrService: UsrService) {}

    ngOnInit() {
    }
 
    onLoggedin() {
        // this.usrComponent.selectUsrLogin(usrEmail, usrPw);
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
                localStorage.setItem('usrNm', result.usr.usrNm);

                this.router.navigate(['/subtitle-regist']);
            }   
        });
        
    }
}
