import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleViewMotherComponent } from './subtitle-view-mother.component';

describe('SubtitleViewMotherComponent', () => {
  let component: SubtitleViewMotherComponent;
  let fixture: ComponentFixture<SubtitleViewMotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleViewMotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleViewMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
