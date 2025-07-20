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

  private touchStartX = 0;
  private touchCurrentX = 0;
  private swipeThreshold = 60;

  closeMenu() {
    this.menuVisible = false;
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchMove(e: TouchEvent) {
    this.touchCurrentX = e.touches[0].clientX;
    // Evita scroll mientras se hace swipe sobre el telón
    e.preventDefault();
  }

  onTouchEnd(_e: TouchEvent) {
    console.log('dfsa', _e);

    const delta = this.touchCurrentX - this.touchStartX;
    const panel = document.querySelector('.menu-panel') as HTMLElement;

    if (panel) {
      panel.style.transition = 'transform 0.6s ease'; // reactiva animación
      if (delta > this.swipeThreshold) {
        this.menuVisible = true;
        panel.style.transform = 'translateX(0)';
      } else {
        this.menuVisible = false;
        panel.style.transform = 'translateX(-180px)';
      }
    }

    // reset para el siguiente gesto
    this.touchStartX = 0;
    this.touchCurrentX = 0;
  }
}
