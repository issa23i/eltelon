import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Footer,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {}
