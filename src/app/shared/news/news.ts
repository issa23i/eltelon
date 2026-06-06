import {
  booleanAttribute,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
} from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TuiButton, TuiTitle, TuiHeader],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {
  @Input() firstTitle = '¿Te quedaste fuera en el último casting?';

  @Input() paragraphText =
    'No te preocupes. EL TELÓN – Asociación cultural de artes escénicas abrirá proximamente dos nuevas fechas para los castings dirigidas a personas interesadas en actuar, colaborar en producción o participar en talleres escénicos. La convocatoria estará abierta a todos los públicos, sin necesidad de experiencia previa.';

  @Input() secondTitle =
    'Estate a atento/a a nuestra web y redes. Si tienes alguna puedes escribirnos a nuestro correo.';

  @Input({ transform: booleanAttribute }) hasButton = true;

  @Input() imageSrc = '';

  @Input() imageAlt = '';
}
