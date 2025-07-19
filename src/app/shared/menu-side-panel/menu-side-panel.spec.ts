import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidePanel } from './menu-side-panel';

describe('MenuSidePanel', () => {
  let component: MenuSidePanel;
  let fixture: ComponentFixture<MenuSidePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSidePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSidePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
