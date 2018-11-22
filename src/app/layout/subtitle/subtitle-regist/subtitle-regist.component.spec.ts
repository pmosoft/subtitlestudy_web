import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleRegistComponent } from './subtitle-regist.component';

describe('SubtitleRegistComponent', () => {
  let component: SubtitleRegistComponent;
  let fixture: ComponentFixture<SubtitleRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
