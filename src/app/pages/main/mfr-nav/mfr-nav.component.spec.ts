import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfrNavComponent } from './mfr-nav.component';

describe('MfrNavComponent', () => {
  let component: MfrNavComponent;
  let fixture: ComponentFixture<MfrNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfrNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
