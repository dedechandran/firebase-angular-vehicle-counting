import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountingComponent } from './form-counting.component';

describe('FormCountingComponent', () => {
  let component: FormCountingComponent;
  let fixture: ComponentFixture<FormCountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
