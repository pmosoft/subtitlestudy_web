import { Component, OnInit} from '@angular/core';
import { SubtitleService } from '../subtitle.service';
import { Subtitle } from '../subtitle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtitle-regist',
  templateUrl: './subtitle-regist.component.html',
  styleUrls: ['./subtitle-regist.component.scss']
})
export class SubtitleRegistComponent implements OnInit {


	  selCountry = [
	      {name: "English"           , value: "en"},
	      {name: "Chinese"           , value: "zh"},
	      {name: "Japanese"          , value: "ja"},
	      {name: "Korean"            , value: "ko"},
	      {name: "Abkhazian"         , value: "ab"},
	      {name: "Afar"              , value: "aa"},
	      {name: "Afrikaans"         , value: "af"},
	      {name: "Albanian"          , value: "sq"},
	      {name: "Amharic"           , value: "am"},
	      {name: "Arabic"            , value: "ar"},
	      {name: "Aragonese"         , value: "an"},
	      {name: "Armenian"          , value: "hy"},
	      {name: "Assamese"          , value: "as"},
	      {name: "Avestan"           , value: "ae"},
	      {name: "Aymara"            , value: "ay"},
	      {name: "Azerbaij"          , value: "az"},
	      {name: "Bashkir"           , value: "ba"},
	      {name: "Basque"            , value: "eu"},
	      {name: "Belarusi"          , value: "an"},
	      {name: "Bengali"           , value: "bn"},
	      {name: "Bihari"            , value: "bh"},
	      {name: "Bislama"           , value: "bi"},
	      {name: "Bosnian"           , value: "bs"},
	      {name: "Breton"            , value: "br"},
	      {name: "Bulgarian"         , value: "bg"},
	      {name: "Burmese"           , value: "my"},
	      {name: "Catalan"           , value: "ca"},
	      {name: "Chamorro"          , value: "ch"},
	      {name: "Chechen"           , value: "ce"},
	      {name: "Church Slavic"     , value: "cu"},
	      {name: "Chuvash"           , value: "cv"},
	      {name: "Cornish"           , value: "kw"},
	      {name: "Corsican"          , value: "co"},
	      {name: "Croatian"          , value: "hr"},
	      {name: "Czech"             , value: "cs"},
	      {name: "Danish"            , value: "da"},
	      {name: "Divehi"            , value: "dv"},
	      {name: "Dutch"             , value: "nl"},
	      {name: "Dzongkha"          , value: "dz"},
	      {name: "Esperanto"         , value: "eo"},
	      {name: "Estonian"          , value: "et"},
	      {name: "Faroese"           , value: "fo"},
	      {name: "Fijian"            , value: "fj"},
	      {name: "Finnish"           , value: "fi"},
	      {name: "French"            , value: "fr"},
	      {name: "Gaelic"            , value: "gd"},
	      {name: "Galician"          , value: "gl"},
	      {name: "Georgian"          , value: "ka"},
	      {name: "German"            , value: "de"},
	      {name: "Greek"             , value: "el"},
	      {name: "Guarani"           , value: "gn"},
	      {name: "Gujarati"          , value: "gu"},
	      {name: "Haitian"           , value: "ht"},
	      {name: "Hausa"             , value: "ha"},
	      {name: "Hebrew"            , value: "he"},
	      {name: "Herero"            , value: "hz"},
	      {name: "Hindi"             , value: "hi"},
	      {name: "Hiri"              , value: "ho"},
	      {name: "Hungarian"         , value: "hu"},
	      {name: "Icelandic"         , value: "is"},
	      {name: "Ido"               , value: "io"},
	      {name: "Indonesian"        , value: "id"},
	      {name: "Interlingua"       , value: "ia"},
	      {name: "Interlingue"       , value: "ie"},
	      {name: "Inuktitut"         , value: "iu"},
	      {name: "Inupiaq"           , value: "ik"},
	      {name: "Irish"             , value: "ga"},
	      {name: "Italian"           , value: "it"},
	      {name: "Javanese"          , value: "jv"},
	      {name: "Kalaallisut"       , value: "kl"},
	      {name: "Kannada"           , value: "kn"},
	      {name: "Kashmiri"          , value: "ks"},
	      {name: "Kazakh"            , value: "kk"},
	      {name: "Khmer"             , value: "km"},
	      {name: "Kikuyu"            , value: "ki"},
	      {name: "Kinyarwanda"       , value: "rw"},
	      {name: "Kirghiz"           , value: "ky"},
	      {name: "Komi"              , value: "kv"},
	      {name: "Kuanyama"          , value: "kj"},
	      {name: "Kurdish"           , value: "ku"},
	      {name: "Lao"               , value: "lo"},
	      {name: "Latin"             , value: "la"},
	      {name: "Latvian"           , value: "lv"},
	      {name: "Limburgan"         , value: "li"},
	      {name: "Lingala"           , value: "ln"},
	      {name: "Lithuanian"        , value: "lt"},
	      {name: "Luxembourgish"     , value: "lb"},
	      {name: "Macedonian"        , value: "mk"},
	      {name: "Malagasy"          , value: "mg"},
	      {name: "Malay"             , value: "ms"},
	      {name: "Malayalam"         , value: "ml"},
	      {name: "Maltese"           , value: "mt"},
	      {name: "Manx"              , value: "gv"},
	      {name: "Maori"             , value: "mi"},
	      {name: "Marathi"           , value: "mr"},
	      {name: "Marshallese"       , value: "mh"},
	      {name: "Moldavian"         , value: "mo"},
	      {name: "Mongolian"         , value: "mn"},
	      {name: "Nauru"             , value: "na"},
	      {name: "Navaho"            , value: "nv"},
	      {name: "Ndebele North"     , value: "nd"},
	      {name: "Ndebele South"     , value: "nr"},
	      {name: "Ndonga"            , value: "ng"},
	      {name: "Nepali"            , value: "ne"},
	      {name: "Sami"              , value: "se"},
	      {name: "Norwegian"         , value: "no"},
	      {name: "Norwegian Bokmal"  , value: "nb"},
	      {name: "Norwegian Nynorsk" , value: "nn"},
	      {name: "Nyanja"            , value: "ny"},
	      {name: "Occitan"           , value: "oc"},
	      {name: "Oriya"             , value: "or"},
	      {name: "Oromo"             , value: "om"},
	      {name: "Ossetian"          , value: "os"},
	      {name: "Pali"              , value: "pi"},
	      {name: "Panjabi"           , value: "pa"},
	      {name: "Persian"           , value: "fa"},
	      {name: "Polish"            , value: "pl"},
	      {name: "Portuguese"        , value: "pt"},
	      {name: "Pushto"            , value: "ps"},
	      {name: "Quechua"           , value: "qu"},
	      {name: "Raeto-Romance"     , value: "rm"},
	      {name: "Romanian"          , value: "ro"},
	      {name: "Rundi"             , value: "rn"},
	      {name: "Russian"           , value: "ru"},
	      {name: "Samoan"            , value: "sm"},
	      {name: "Sango"             , value: "sg"},
	      {name: "Sanskrit"          , value: "sa"},
	      {name: "Sardinian"         , value: "sc"},
	      {name: "Serbian"           , value: "sr"},
	      {name: "Shona"             , value: "sn"},
	      {name: "Sichuan"           , value: "Yi"},
	      {name: "Sindhi"            , value: "sd"},
	      {name: "Sinhala"           , value: "si"},
	      {name: "Slovak"            , value: "sk"},
	      {name: "Slovenian"         , value: "sl"},
	      {name: "Somali"            , value: "so"},
	      {name: "Sotho"             , value: "st"},
	      {name: "Spanish"           , value: "es"},
	      {name: "Sundanese"         , value: "su"},
	      {name: "Swahili"           , value: "sw"},
	      {name: "Swati"             , value: "ss"},
	      {name: "Swedish"           , value: "sv"},
	      {name: "Tagalog"           , value: "tl"},
	      {name: "Tahitian"          , value: "ty"},
	      {name: "Tajik"             , value: "tg"},
	      {name: "Tamil"             , value: "ta"},
	      {name: "Tatar"             , value: "tt"},
	      {name: "Telugu"            , value: "te"},
	      {name: "Thai"              , value: "th"},
	      {name: "Tibetan"           , value: "bo"},
	      {name: "Tigrinya"          , value: "ti"},
	      {name: "Tonga"             , value: "to"},
	      {name: "Tsonga"            , value: "ts"},
	      {name: "Tswana"            , value: "tn"},
	      {name: "Turkish"           , value: "tr"},
	      {name: "Turkmen"           , value: "tk"},
	      {name: "Twi"               , value: "tw"},
	      {name: "Uighur"            , value: "ug"},
	      {name: "Ukrainian"         , value: "uk"},
	      {name: "Urdu"              , value: "ur"},
	      {name: "Uzbek"             , value: "uz"},
	      {name: "Vietnamese"        , value: "vi"},
	      {name: "Volapuk"           , value: "vo"},
	      {name: "Walloon"           , value: "wa"},
	      {name: "Welsh"             , value: "cy"},
	      {name: "Frisian"           , value: "fy"},
	      {name: "Wolof"             , value: "wo"},
	      {name: "Xhosa"             , value: "xh"},
	      {name: "Yiddish"           , value: "yi"},
	      {name: "Yoruba"            , value: "yo"},
	      {name: "Zhuang"            , value: "za"},
	      {name: "Zulu"              , value: "zu"}
	    ];


  constructor(private subtitleService: SubtitleService
             ,private router: Router) {}

  ngOnInit() {
    //console.log('subtitle-regist ngOnInit');
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
    //console.log("onUpload");

    const fd = new FormData();
    fd.append('uploadFile', this.foreignFile);
    fd.append('uploadFile2', this.motherFile);
    fd.append('usrEmail', this.usrId);
    //study english using sutitles (foreign and self)
    this.subtitleService.saveUsrSubtitles(fd).subscribe(result => {
      if(!result.isSuccess) {
        alert(result.errUsrMsg);
        //console.log("errSysMsg====="+result.errSysMsg);

      } else {
        //this.foreignSubtitle = result.foreignSubtitle;
        //this.motherSubtitle = result.motherSubtitle;
        this.router.navigate(['/subtitle-view/'+result.sttlNm]);
        ////console.log(result.usrMsg);
      }
    });
  }

}
