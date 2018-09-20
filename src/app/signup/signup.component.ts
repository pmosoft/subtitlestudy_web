import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
//import { AlertsService } from 'angular-alert-module';
import { Usr } from '../layout/usr/usr';
import { UsrService } from '../layout/usr/usr.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
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
    
    constructor(private usrService: UsrService) {
    }
      
    ngOnInit(): void {
        //console.log("usrPw=="+this.usr.usrPw2==''?'a':'b');  
        //if(!ValidationService.emailValidator('lifegmail.com')) return;
        //if(!ValidationService.emailValidator('lifegmail.com')) return;
    }

    onRegister() {
        //this.alerts.setMessage('All the fields are required','error');
        //this.alerts.setMessage('Configurations saved successfully!','success');
        //this.alerts.setMessage('Please save all the changes before closing','warn');
        // Validation
        console.log("usrEmail=="+this.usr.usrEmail);     
        console.log("usrPw=="+this.usr.usrPw);   
        console.log("usrPw=="+this.usr.usrPw2);  
        if(!ValidationService.emailValidator(this.usr.usrEmail)) return;
        if(!ValidationService.passwordValidator(this.usr.usrPw)) return;
        if(this.usr.usrPw != this.usr.usrPw2) {
            //alert("difference password and passwordConfirm");
            return;          
        }
           
        this.usrService.insertUsr(this.usr).subscribe(result => {
            if(!result.isSuccess) alert(result.errUsrMsg)
            else console.log(result.usrMsg);  
        });
    }

    // get passwordConfirm(){
    //     return this.signupForm.get('passwordConfirm')
    // }


} 