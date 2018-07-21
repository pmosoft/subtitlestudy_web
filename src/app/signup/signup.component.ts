import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usr } from '../layout/usr/usr';
import { Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    usr : Usr = {
         USR_ID     : '',
         USR_EMAIL  : '',
         USR_PW     : '',
         USR_PW2    : '',
         USR_NM     : '',
         USR_AGE    : '',
         USE_YN     : '',
         REG_USR_ID : '',
         UPD_USR_ID : ''
         };
    
    constructor() {
    }
      
    ngOnInit(): void {
        console.log("USR_PW=="+this.usr.USR_PW2==''?'a':'b');  
        alert("valid=="+ValidationService.emailValidator('lifegmail.com'));
    }

    onRegister() {
        console.log("USR_EMAIL=="+this.usr.USR_EMAIL);     
        console.log("USR_PW=="+this.usr.USR_PW);   
        console.log("USR_PW=="+this.usr.USR_PW2);  
           
             //alert("valid=="+ValidationService.emailValidator(this.usr.USR_EMAIL));     
    }

    // get passwordConfirm(){
    //     return this.signupForm.get('passwordConfirm')
    // }


} 