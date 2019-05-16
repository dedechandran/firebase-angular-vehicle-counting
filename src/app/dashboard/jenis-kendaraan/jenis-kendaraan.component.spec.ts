import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisKendaraanComponent } from './jenis-kendaraan.component';

describe('JenisKendaraanComponent', () => {
  let component: JenisKendaraanComponent;
  let fixture: ComponentFixture<JenisKendaraanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisKendaraanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisKendaraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
