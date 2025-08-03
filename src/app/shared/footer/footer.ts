import { Component } from '@angular/core';
import { TaigaSharedModule } from '../taiga-shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [TaigaSharedModule, RouterLink],
})
export class Footer {
  readonly linksFooter = [
    { label: 'Inicio', route: '/' },
    { label: 'Casting', route: '/casting' },
    { label: 'Contacto', route: '/contacto' },
    { label: 'Obras', route: '/obras' },
    { label: 'Hazte socio', route: '/hazte-socio' },
    { label: 'Política de privacidad', route: '/privacidad' },
    { label: 'Quiénes somos', route: '/quienes-somos' },
    { label: 'Galería', route: '/galeria' },
    { label: 'Aviso legal y condiciones de uso', route: '/aviso-legal' },
  ];

  abrirCV(): void {
    window.open('https://tu-url-de-cv.com', '_blank');
  }
}
