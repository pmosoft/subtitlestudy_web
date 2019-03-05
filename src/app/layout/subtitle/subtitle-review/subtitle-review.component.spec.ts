import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleReviewComponent } from './subtitle-review.component';

describe('SubtitleReviewComponent', () => {
  let component: SubtitleReviewComponent;
  let fixture: ComponentFixture<SubtitleReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
