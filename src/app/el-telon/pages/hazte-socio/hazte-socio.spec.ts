import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazteSocio } from './hazte-socio';

describe('HazteSocio', () => {
  let component: HazteSocio;
  let fixture: ComponentFixture<HazteSocio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HazteSocio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazteSocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
