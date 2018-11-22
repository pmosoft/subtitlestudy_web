import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleSiteComponent } from './subtitle-site.component';

describe('SubtitleSiteComponent', () => {
  let component: SubtitleSiteComponent;
  let fixture: ComponentFixture<SubtitleSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
