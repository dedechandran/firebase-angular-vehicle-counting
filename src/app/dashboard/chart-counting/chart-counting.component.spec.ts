import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountingComponent } from './chart-counting.component';

describe('ChartCountingComponent', () => {
  let component: ChartCountingComponent;
  let fixture: ComponentFixture<ChartCountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
