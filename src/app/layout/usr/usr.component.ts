import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Usr } from './usr';
import { UsrService } from './usr.service';

@Component({
  selector: 'app-usr',
  templateUrl: './usr.component.html',
  styleUrls: ['./usr.component.scss']
})
export class UsrComponent implements OnInit {

  result : any;
  usr1 : Usr;

  constructor(private usrService: UsrService
             ,private http: HttpClient) { }

  ngOnInit() {
  }

  saveUsr(usr) {
    console.log("saveUsr start")
    console.log("usrEmail=="+usr.usrEmail);     
    console.log("usrPw=="+usr.usrPw);   
    console.log("usrPw2=="+usr.usrPw2);  
    
    this.result = this.usrService.saveUsr(usr as Usr)
      .subscribe(result => {
        console.log("result=="+result.isSuccess);
        console.log("result=="+result.errUsrMsg);
        console.log("result=="+result.usrMsg);
          });

    console.log("result1=="+this.result.isSuccess);
    console.log("result1=="+this.result.errUsrMsg);
    console.log("result1=="+this.result.usrMsg);

    }    


  saveUsr3(usr) {
    console.log("saveUsr start")
    console.log("usrEmail=="+usr.usrEmail);     
    console.log("usrPw=="+usr.usrPw);   
    console.log("usrPw2=="+usr.usrPw2);  
     
    this.usrService.saveUsr(usr as Usr)
      .subscribe(usr => {
        this.usr1 = usr;
        console.log("saveUsr res=="+this.usr1.usrEmail);
      });
  }    
  saveUsr2(usr) {
    console.log("saveUsr start")
    
    console.log("usrEmail=="+usr.usrEmail);     
    console.log("usrPw=="+usr.usrPw);   
    console.log("usrPw=="+usr.usrPw2);  
    const fd = new FormData();
    fd.append('usrId', usr.usrEmail);
    fd.append('usrEmail', usr.usrEmail);
    fd.append('usrPw'   , usr.usrPw);

    this.http.post<Usr>('http://localhost:8085/usr/saveUsr',fd)
    .subscribe(result => {
      console.log("saveUsr res=="+result);
    });
  }    

  selectUsr(usrEmail) {
    console.log("selectUsr start")    
    const fd = new FormData();
    fd.append('usrEmail', usrEmail);
    this.http.post('http://localhost:8085/usr/selectUsr',fd)
    .subscribe(result => {
      console.log("selectUsr res=="+result);
    });    
  }

  selectUsrLogin(usrEmail,usrPw) {
    console.log("selectUsrLogin start")    
    const fd = new FormData();
    fd.append('usrEmail', usrEmail);
    fd.append('usrPw', usrPw);
    this.http.post('http://localhost:8085/usr/selectUsrLogin',fd)
    .subscribe(result => {
      console.log("selectUsr res=="+result);
    });    
  }
  
  deleteUsr() {
    alert("aaaaa");
  }    
}
