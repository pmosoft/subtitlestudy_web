import { Component, OnInit } from '@angular/core';
import { Usr } from '../../usr/usr';
import { UsrService } from '../../usr/usr.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-stat-usr',
  templateUrl: './stat-usr.component.html',
  styleUrls: ['./stat-usr.component.scss']
})
export class StatUsrComponent implements OnInit {

  usr: Usr = new Usr();
  usrs: Usr[]

  constructor(private usrService: UsrService
             ,private router: Router) { }

  ngOnInit() {
    this.usr.usrId = localStorage.getItem('usrId');
    this.onSelectUsrList();
  }

  onSelectUsrList() {
    this.usrService.selectUsrList(this.usr)
    .subscribe(result => {
       if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.usrs = result.usrList;
      }
    });
  }

  onClickQuery() {
    this.onSelectUsrList();
  }

}
