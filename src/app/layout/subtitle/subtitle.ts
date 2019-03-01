export class Subtitle {
  usrId    : string; // 사용자아이디
  usrEmail : string; // 사용자이메일
  sttlNm   : string; // 자막명
  fsttlNm  : string; // 외국어자막명
  msttlNm  : string; // 모국어자막명
  sttlNum  : number; // 자막순번
  sttlCd   : string; // 자막구분(1:외국어,2:모국어)
  sttlStm  : string; // 자막시작시각
  sttlEtm  : string; // 자막종료시각
  sttlDesc : string; // 자막문장내용
  regDtm   : string; // 등록일시
  regUsrId : string; // 등록자
  updDtm   : string; // 변경일시
  updUsrId : string; // 변경자

  condSttlNum : string = "0";    // 조회조건:자막순번
  condSttlCd  : string = "0";    // 조회조건:자막구분
  condBookmarkYn : string = "Y"; // 조회조건:북마크여부

  fsttlDesc : string; // 외국어자막문장내용
  msttlDesc : string; // 모국어자막문장내용

  chk : boolean = false;
}
