import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartKepadatanComponent } from './chart-kepadatan.component';

describe('ChartKepadatanComponent', () => {
  let component: ChartKepadatanComponent;
  let fixture: ComponentFixture<ChartKepadatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartKepadatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartKepadatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
