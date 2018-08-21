import { Component, OnInit} from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-subtitle-regist',
  templateUrl: './subtitle-regist.component.html',
  styleUrls: ['./subtitle-regist.component.scss']
})
export class SubtitleRegistComponent implements OnInit {


  constructor(private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  //usrId = 'lifedomy@gmail.com';
  usrId = localStorage.getItem('usrId');

  foreignFile = null;
  foreignFileNm = "Choose Srt or Smi File";
  foreignSubtitle = "";
  motherFile = null;
  motherFileNm = "Choose Srt or Smi File";
  motherSubtitle = "";

  
  onForeignFileSelected(event) {
    this.foreignFile = <File> event.target.files[0];
    this.foreignFileNm = this.foreignFile.name;
    //alert(this.foreignFileNm.indexOf(".smi"));
    if(this.foreignFileNm.indexOf(".srt") == -1 && this.foreignFileNm.indexOf(".smi") == -1){
      alert("Please, choose srt,smi file only" );
      this.foreignFile = null;
      this.foreignFileNm = "Choose Srt or Smi File";
    }  
  }

  onMotherFileSelected(event) {
    this.motherFile = <File> event.target.files[0];
    this.motherFileNm = this.motherFile.name;
    if(this.motherFileNm.indexOf(".srt") == -1 && this.motherFileNm.indexOf(".smi") == -1){
      alert("Please, choose srt,smi file only" );
      this.motherFile = null;
      this.motherFileNm = "Choose Srt or Smi File";
    }
  }
    
  onUpload() {
    //console.log("usrId================"+this.usrId);

    const fd = new FormData();
    fd.append('uploadFile', this.foreignFile);
    fd.append('uploadFile2', this.motherFile);
    fd.append('usrEmail', this.usrId);
    //study english using sutitles (foreign and self)
    this.subtitleService.saveUsrSubtitles(fd).subscribe(result => {
      if(!result.isSuccess) {
        alert(result.errUsrMsg); 
        console.log("errSysMsg====="+result.errSysMsg);

      } else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.usrMsg);  
      }  
    });  
  }

}
