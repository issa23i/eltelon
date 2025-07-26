import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  readonly routes = [
    '/',
    '/quienes-somos',
    '/obras',
    '/galeria',
    '/casting',
    '/hazte-socio',
    '/contacto',
  ];
}
