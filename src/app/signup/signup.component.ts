import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usr } from '../layout/usr/usr';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    reactiveForm : FormGroup
  
    USR_EMAIL : string = '';
    USR_PW : string;
    USR_PW2 : string;
    usr : Usr = {
        USR_ID     : '',
        USR_EMAIL  : 'lihelp@gmail.com',
        USR_PW     : '',
        USR_NM     : '',
        USR_AGE    : '',
        USE_YN     : '',
        REG_USR_ID : '',
        UPD_USR_ID : ''
      };
    
    constructor() {}

    ngOnInit() {
    
      this.createForm();
    
    }
 
    onRegister() {
        alert("USR_EMAIL=="+this.USR_EMAIL);
    }

    createForm(){
        this.reactiveForm = new FormGroup({
            email : new FormControl('',Validators.required),    
            password : new FormControl('',Validators.required),
            passwordConfirm : new FormControl('',Validators.required),
        })
    }

    get email(){
        return this.reactiveForm.get('email')
    }

    get password(){
        return this.reactiveForm.get('password')
    }

    get passwordConfirm(){
        return this.reactiveForm.get('passwordConfirm')
    }


} 