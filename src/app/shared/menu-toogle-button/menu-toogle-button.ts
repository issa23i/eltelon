import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-toggle-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  template: `
    <button mat-icon-button aria-label="Abrir menú" (click)="clicked.emit()">
      <mat-icon>menu</mat-icon>
    </button>
  `,
})
export class MenuToggleButton {
  @Output() clicked = new EventEmitter<void>();
}
