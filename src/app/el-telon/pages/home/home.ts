import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { News } from '../../../shared/news/news';

@Component({
  selector: 'app-home',
  imports: [NgFor, TuiCarousel, TuiPagination, TaigaSharedModule, News],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  protected index = 2;
  items = [
    '“El teatro es poesía que se sale del libro para hacerse humana.”\n — Federico García Lorca',
    '“La cultura es el alma de los pueblos.”',
    '“Ama el arte en ti mismo, no a ti mismo en el arte.”\n —  Constantin Stanislavski ',
    '“El escenario es el lugar donde la verdad se disfraza para ser más sincera.”',
    '“La cultura no es un lujo, es una necesidad.”\n — Gao Xingjian',
  ];
}
