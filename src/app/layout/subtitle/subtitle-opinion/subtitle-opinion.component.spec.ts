import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleOpinionComponent } from './subtitle-opinion.component';

describe('SubtitleOpinionComponent', () => {
  let component: SubtitleOpinionComponent;
  let fixture: ComponentFixture<SubtitleOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
