import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-horizontal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-horizontal.html',
  styleUrls: ['./menu-horizontal.scss'],
})
export class MenuHorizontal {
  @Input() menuLinks: { path: string; label: string }[] = [];
}
