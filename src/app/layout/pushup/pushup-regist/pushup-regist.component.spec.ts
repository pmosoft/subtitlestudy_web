import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushupRegistComponent } from './pushup-regist.component';

describe('PushupRegistComponent', () => {
  let component: PushupRegistComponent;
  let fixture: ComponentFixture<PushupRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushupRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushupRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
