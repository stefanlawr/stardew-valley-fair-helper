import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairHelperComponent } from './fair-helper.component';

describe('FairHelperComponent', () => {
  let component: FairHelperComponent;
  let fixture: ComponentFixture<FairHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
