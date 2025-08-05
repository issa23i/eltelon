import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-home',
  imports: [NgFor, TuiCarousel, TuiPagination, TuiTitle, TuiButton],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
