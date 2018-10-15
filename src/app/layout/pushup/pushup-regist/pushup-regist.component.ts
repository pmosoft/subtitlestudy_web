import { Component, OnInit} from '@angular/core';
import { PushupService } from '../pushup.service';
import { Pushup } from '../pushup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pushup-regist',
  templateUrl: './pushup-regist.component.html',
  styleUrls: ['./pushup-regist.component.scss']
})
export class PushupRegistComponent implements OnInit {


  constructor(private pushupService: PushupService
             ,private router: Router) {}

  ngOnInit() {
    console.log('pushup-regist ngOnInit');  
  }

  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');

  foreignFile = null;
  foreignFileNm = "Choose Srt or Smi File";
  foreignPushup = "";
  motherFile = null;
  motherFileNm = "Choose Srt or Smi File";
  motherPushup = "";

  

}
