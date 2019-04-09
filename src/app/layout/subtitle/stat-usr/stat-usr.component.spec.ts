import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUsrComponent } from './stat-usr.component';

describe('StatUsrComponent', () => {
  let component: StatUsrComponent;
  let fixture: ComponentFixture<StatUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
