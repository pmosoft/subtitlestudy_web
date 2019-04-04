export class Subtitle {
  // 엔티티
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


  // 체크
  chk : boolean = false;

  // 조건
  condSttlNum : string = "0";    // 조회조건:자막순번
  condSttlCd  : string = "0";    // 조회조건:자막구분
  condBookmarkYn : string = "Y"; // 조회조건:북마크여부

  // 리뷰
  serialNo  : number = 0;
  fsttlDesc : string = ""; // 외국어자막문장내용
  msttlDesc : string = ""; // 모국어자막문장내용
  reviewCnt : number = 0;  // 리뷰횟수
  reviewCd  : string = ""; // 리뷰코드

  // 유저언어
  flandCd : string = ""; // 외국어언어코드
  mlandCd : string = ""; // 모국어언어코드

}
