import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToogleButton } from './menu-toogle-button';

describe('MenuToogleButton', () => {
  let component: MenuToogleButton;
  let fixture: ComponentFixture<MenuToogleButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToogleButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToogleButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
