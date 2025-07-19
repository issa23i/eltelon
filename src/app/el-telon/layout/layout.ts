import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuSidePanel } from '../../shared/menu-side-panel/menu-side-panel';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Footer, MenuSidePanel],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
