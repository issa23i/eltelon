import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Router } from '@angular/router';
import { TuiDataList, TuiDropdown } from '@taiga-ui/core';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  imports: [TuiDataList, TuiDropdown, TuiTabs, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly tabs = [
    { label: 'Inicio', route: '/' },
    { label: 'Casting', route: '/casting' },
    { label: 'Obras', route: '/obras' }, // 2 disabled
    { label: 'Hazte socio', route: '/hazte-socio' },
    { label: 'Quiénes somos', route: '/quienes-somos' },
    { label: 'Contacto', route: '/contacto' },
    { label: 'Galería', route: '/galeria' },
  ];

  activeIndex = 0;

  constructor(private readonly router: Router) {}

  onTabChange(index: number): void {
    this.activeIndex = index;
    this.router.navigateByUrl(this.tabs[index].route);
  }
}
