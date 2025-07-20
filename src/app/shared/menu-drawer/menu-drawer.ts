import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],

  templateUrl: './menu-drawer.html',
  styleUrls: ['./menu-drawer.scss'],
})
export class MenuDrawer {
  @Output() linkClicked = new EventEmitter<void>();

  menuLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Quiénes somos' },
    { path: '/obras', label: 'Obras' },
    { path: '/galeria', label: 'Galería' },
    { path: '/casting', label: 'Casting' },
    { path: '/hazte-socio', label: 'Hazte socio' },
    { path: '/contacto', label: 'Contacto' },
  ];

  emitClose() {
    this.linkClicked.emit();
  }
}
