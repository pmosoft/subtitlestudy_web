import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleViewComponent } from './subtitle-view.component';

describe('SubtitleViewComponent', () => {
  let component: SubtitleViewComponent;
  let fixture: ComponentFixture<SubtitleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
