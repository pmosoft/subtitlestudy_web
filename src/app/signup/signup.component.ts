import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usr } from '../layout/usr/usr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signupForm : FormGroup
  
    USR_EMAIL : string = '';
    // USR_PW : string;
    // USR_PW2 : string;
    // usr : Usr = {
    //     USR_ID     : '',
    //     USR_EMAIL  : 'lihelp@gmail.com',
    //     USR_PW     : '',
    //     USR_NM     : '',
    //     USR_AGE    : '',
    //     USE_YN     : '',
    //     REG_USR_ID : '',
    //     UPD_USR_ID : ''
    //   };
    
    constructor(private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }
      
 
    ngOnInit() {
    }

    onRegister() {
        alert("USR_EMAIL=="+this.USR_EMAIL);
    }

    createForm(){
        this.signupForm = this.fb.group({
            email : ['',Validators.required,Validators.minLength(2)],    
            password : ['',Validators.required],
            passwordConfirm : ['',Validators.required]
        });
    }

    // get email(){
    //     return this.signupForm.get('email')
    // }

    // get password(){
    //     return this.signupForm.get('password')
    // }

    // get passwordConfirm(){
    //     return this.signupForm.get('passwordConfirm')
    // }


} 