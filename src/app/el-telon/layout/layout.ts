import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MenuDrawer } from '../../shared/menu-drawer/menu-drawer';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
    MenuDrawer,
    RouterOutlet,
    MatDrawerContainer,
    MatSidenavModule,
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {
  @ViewChild('drawer') drawer!: MatDrawer;

  isMobile = false;
  showHeader = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.showHeader = true;
      });
  }

  openDrawer() {
    this.drawer.toggle();
  }

  closeDrawer() {
    this.drawer.close();
  }
}
