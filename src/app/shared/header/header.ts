import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuHorizontal } from '../menu-horizontal/menu-horizontal';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MenuToggleButton } from '../menu-toogle-button/menu-toogle-button';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    MenuHorizontal,
    MatToolbar,
    MenuToggleButton,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() toggleMenu = new EventEmitter<void>();

  isMobile = false;

  menuLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Quiénes somos' },
    { path: '/obras', label: 'Obras' },
    { path: '/galeria', label: 'Galería' },
    { path: '/casting', label: 'Casting' },
    { path: '/hazte-socio', label: 'Hazte socio' },
    { path: '/contacto', label: 'Contacto' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  emitToggle() {
    this.toggleMenu.emit();
  }
}
