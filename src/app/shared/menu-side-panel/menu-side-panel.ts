import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-side-panel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-side-panel.html',
  styleUrl: './menu-side-panel.scss',
})
export class MenuSidePanel {
  menuLinks = [
    { path: '/home', label: 'Inicio' },
    { path: '/obras', label: 'Obras' },
    { path: '/galeria', label: 'Galería' },
    { path: '/casting', label: 'Casting' },
    { path: '/quienes-somos', label: 'Quiénes somos' },
    { path: '/hazte-socio', label: 'Hazte socia' },
    { path: '/contacto', label: 'Contacto' },
  ];

  menuVisible = false;

  closeMenu() {
    this.menuVisible = false;
  }
}
