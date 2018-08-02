import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


  subtitle: Subtitle;
  constructor(private http: HttpClient,
             private subtitleService: SubtitleService) { }

  ngOnInit() {
  }

  usrId = 'lifedomy@gmail.com';
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
    const fd = new FormData();
    fd.append('uploadFile', this.foreignFile);
    fd.append('uploadFile2', this.motherFile);
    fd.append('usrEmail', "lifedomy@gmail.com");
    //study english using sutitles (foreign and self)
    this.subtitleService.saveUsrSubtitles(fd).subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.usrMsg);  
      }  
  });  
  }


  onSelectRecentlySubtitle() {
    this.subtitleService.selectRecentlySubtitle(this.usrId)
    .subscribe(result => {
      if(!result.isSuccess) alert(result.errUsrMsg)
      else {
        this.foreignSubtitle = result.foreignSubtitle;  
        this.motherSubtitle = result.motherSubtitle; 
        console.log(result.subtitleListVo);  
      } 
    });
  }

  getHeroes(): void {
    this.subtitleService.getHeroes()
    .subscribe(data => {
      this.subtitle = data
      console.log(data);
      console.log(this.subtitle.name);
    });
  }

  onTest2() {
    this.subtitleService.getHeroes()
    .subscribe(data => {
      this.subtitle = data
      console.log(data);
      console.log(this.subtitle.name);
    });
  }


  onTest3() {
    //this.getHeroes();
    //const params = new HttpParams().set('lang', lang); 

    const fd = new FormData();
    fd.append('name', "lifedomy");
    fd.append('id', "123");
    this.http.post('http://localhost:8085/subtitle/test4',fd)
    .subscribe(res => {
      console.log("1111111111111111111");
      console.log(res);
      
    });    
 }


  onTest4() {

    this.http.get('http://localhost:8085/subtitle/test4/?name=abc&id=10')
    .subscribe(res => {
      console.log("1111111111111111111");
      console.log(res);
    });   
   
  }

  onTest() {
    this.getHeroes();
    // const fd = new FormData();
    // fd.append('uploadFile', this.foreignFile);
    // fd.append('uploadFile2', this.motherFile);
    // fd.append('usr', "lifedomy");
    // console.log("1111111111111111111");
    //console.log(this.http.get('http://localhost:8085/subtitle/test3',{responseType: 'json'}));

    // this.http.get('http://localhost:8085/subtitle/test3')
    // .subscribe(res => {
    //   console.log("1111111111111111111");
    //   console.log(res);
    //});   
    
    // this.http.post('http://localhost:8080/order/addtocart', 
    // '', 
    // httpOptions)
    // .subscribe(data => {
    //     // Handle the updated data here.
    //     console.log(data);
    // });


  }


}
