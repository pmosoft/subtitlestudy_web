import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleQuestionComponent } from './subtitle-question.component';

describe('SubtitleQuestionComponent', () => {
  let component: SubtitleQuestionComponent;
  let fixture: ComponentFixture<SubtitleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
